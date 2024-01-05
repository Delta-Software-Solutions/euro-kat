import type { ListResult, RecordService } from 'pocketbase';
import { connection, figureInitLoadCount } from './PocketBase';
import type { Figure } from './Types';

export class FigurFilterBuilder {
	filter: Set<string>;
	figureCollection: RecordService<Figure>;
	optionals: Set<string>;
	sort: Set<string>;
	currentPage: number = 1;

	constructor() {
		this.figureCollection = connection.collection('Figure');
		this.optionals = new Set();
		this.filter = new Set();
		this.sort = new Set();
		this.sortMpgNr();
	}

	fake() {
		if (this.findRemove('fake=true', this.filter)) return;
		this.filter.add('fake=true');
	}

	private toggleBoolConatined(field: string) {
		if (this.filter.has(`${field}=true`)) {
			this.filter.delete(`${field}=true`);
			this.filter.add(`${field}=false`);
		} else {
			this.filter.delete(`${field}=false`);
			this.filter.add(`${field}=true`);
		}
	}

	questionable() {
		if (this.findRemove('questionable=true', this.filter)) return;
		this.filter.add('questionable=true');
	}

	sticker() {
		if (this.findRemove('sticker=true', this.filter)) return;
		this.filter.add('sticker=true');
	}

	yearBegin(year: number | undefined) {
		this.findRemove('year>=', this.filter);
		this.filter.add(`year>='${year}'`);
	}

	yearEnd(year: number | undefined) {
		this.findRemove('year<=', this.filter);
		this.filter.add(`year<='${year}'`);
	}

	year(year: number | undefined) {
		this.findRemove('year=', this.filter);
		if (year == undefined) return;
		this.filter.add(`year="${year}"`);
	}

	name(name: string) {
		this.findRemove('name~', this.optionals);
		this.optionals.add(`name~"${name}"`);
	}

	identifier(id: string) {
		this.findRemove('identifier~', this.optionals);
		this.optionals.add(`identifier~"${id}"`);
	}

	note(note: string) {
		this.findRemove('note~', this.optionals);
		this.optionals.add(`note~"${note}"`);
	}

	id(id: string) {
		this.findRemove('id=', this.filter);
		this.filter.add(`id="${id}"`);
	}

	mpgnumber(mpgNr: string | undefined) {
		this.findRemove('mpgNr~', this.optionals);
		this.optionals.add(`mpgNr~"${mpgNr}"`);
	}

	country(country: string) {
		this.findRemove('country=', this.filter);
		this.filter.add(`country="${country}"`);
	}

	subSeries(name: string) {
		this.findRemove('subSeriesId.name~', this.optionals);
		this.optionals.add(`subSeriesId.name~"${name}"`);
	}

	sortNote() {
		this.killMpgNr();
		this.killName();
		this.toggleSort('note');
	}

	killNote() {
		this.findRemove('+note', this.sort);
		this.findRemove('-note', this.sort);
	}

	sortMpgNr() {
		this.killNote();
		this.killName();
		this.toggleSort('mpgNr');
	}

	killMpgNr() {
		this.findRemove('+mpgNr', this.sort);
		this.findRemove('-mpgNr', this.sort);
	}

	sortName() {
		this.killMpgNr();
		this.killNote();
		this.toggleSort('name');
	}

	killName() {
		this.findRemove('+name', this.sort);
		this.findRemove('-name', this.sort);
	}

	currentSeries() {
		if (this.findRemove('created>=', this.filter)) return;
		let date = new Date();
		date.setFullYear(date.getFullYear() - 1);
		this.filter.add(`created>="${this.formatDate(date)}"`);
	}

	changed() {
		if (this.findRemove('updated>=', this.filter)) return;
		let date = new Date();
		date.setFullYear(date.getMonth() - 2);
		this.filter.add(`updated>="${this.formatDate(date)}"`);
	}

	maxi(name: string) {
		this.findRemove('maxi~', this.filter);
		this.filter.add(`maxi~${name}`);
	}

	private formatDate(date: Date): string {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	}

	private toggleSort(sortName: string) {
		for (const sort of this.sort) {
			if (sort.startsWith('-' + sortName)) {
				this.sort.delete(sort);
				this.sort.add('+' + sortName);
				return;
			}

			if (sort.startsWith('+' + sortName)) {
				this.sort.delete(sort);
				this.sort.add('-' + sortName);
				return;
			}
		}
		this.sort.add('+' + sortName);
	}

	private findRemove(search: string, lookupList: Set<string>): boolean {
		for (const element of lookupList.values()) {
			if (element.startsWith(search)) {
				lookupList.delete(element);
				return true;
			}
		}
		return false;
	}

	async run(): Promise<ListResult<Figure>> {
		if (this.filter.size == 0 && this.optionals.size == 0 && this.sort.size == 0)
			return await this.figureCollection.getList(this.currentPage, figureInitLoadCount);

		let query = '';
		if (this.filter.size > 0) {
			query = Array.from(this.filter).join('&&');
			if (this.optionals.size > 0) query += '&&(';
		}
		if (this.optionals.size > 0) {
			query += Array.from(this.optionals).join('||');
			if (this.filter.size > 0) {
				query += ')';
			}
		}

		return structuredClone(
			await this.figureCollection.getList(this.currentPage, figureInitLoadCount, {
				filter: query,
				sort: Array.from(this.sort).join(','),
				expand: 'subSeriesId'
			})
		);
	}
}

export let figureBuilder = new FigurFilterBuilder();
