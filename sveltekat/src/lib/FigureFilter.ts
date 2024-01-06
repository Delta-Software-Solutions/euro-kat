import type { ListResult, RecordService } from 'pocketbase';
import { connection, figureInitLoadCount } from './PocketBase';
import type { Figure } from './Types';

export class FigurFilterBuilder {
	required: Set<string>;
	figureCollection: RecordService<Figure>;
	optional: Set<string>;
	sort: Set<string>;
	currentPage: number = 1;

	constructor() {
		this.figureCollection = connection.collection('Figure');
		this.optional = new Set();
		this.required = new Set();
		this.sort = new Set();
		this.sortMpgNr();
	}
	private startIsContainedRequired(start: string) {
		return Array.from(this.required).some((elem) => elem.startsWith(start))
	}

	private startIsContainedOptional(start: string) {
		return Array.from(this.optional).some((elem) => elem.startsWith(start))
	}

	private toggleBoolConatined(field: string) {
		if (this.required.has(`${field}=true`)) {
			this.required.delete(`${field}=true`);
			this.required.add(`${field}=false`);
		} else {
			this.required.delete(`${field}=false`);
			this.required.add(`${field}=true`);
		}
	}

	private getRequiredFilterValue(start: string): string {
		for (const elem of this.required) {
			if (elem.startsWith(start)) return elem.replace(start, '')
		}
		return ''
	}

	private getOptionalFilterValue(start: string): string {
		for (const elem of this.optional) {
			if (elem.startsWith(start)) return elem.replace(start, '')
		}
		return ''
	}

	currentSeries() {
		if (this.findRemove('created>=', this.required)) return;
		let date = new Date();
		date.setFullYear(date.getFullYear() - 1);
		this.required.add(`created>="${this.formatDate(date)}"`);
	}

	isCurrentTriggered(): boolean {
		return this.startIsContainedOptional("created>=");
	}

	changed() {
		if (this.findRemove('updated>=', this.required)) return;
		let date = new Date();
		date.setMonth(date.getMonth() - 1);
		this.required.add(`updated>="${this.formatDate(date)}"`);
	}

	isChangedTriggered(): boolean {
		return this.startIsContainedOptional("updated>=");
	}

	maxi() {
		if (this.findRemove('maxi=true', this.required)) return;
		this.required.add('maxi=true');
	}

	isMaxiTriggered(): boolean {
		return this.startIsContainedOptional("maxi");
	}

	fake() {
		if (this.findRemove('fake=true', this.required)) return;
		this.required.add('fake=true');
	}

	isFakeTriggered(): boolean {
		return this.startIsContainedOptional("fake=");
	}

	questionable() {
		if (this.findRemove('questionable=true', this.required)) return;
		this.required.add('questionable=true');
	}

	isQuestionableTriggered(): boolean {
		return this.startIsContainedRequired("questionable=")
	}

	sticker() {
		if (this.findRemove('sticker=true', this.required)) return;
		this.required.add('sticker=true');
	}

	isStickerTriggered(): boolean {
		return this.startIsContainedRequired("sticker=")
	}

	yearBegin(year: number | undefined) {
		this.findRemove('year>=', this.required);
		this.required.add(`year>='${year}'`);
	}

	getYearBegin(): number {
		return Number.parseInt(this.getRequiredFilterValue("year>="))
	}

	getYearEnd(): number {
		return Number.parseInt(this.getRequiredFilterValue("year<="))
	}

	yearEnd(year: number | undefined) {
		this.findRemove('year<=', this.required);
		this.required.add(`year<='${year}'`);
	}

	getYear(): number {
		return Number.parseInt(this.getRequiredFilterValue("year="))
	}

	year(year: number | undefined) {
		this.findRemove('year=', this.required);
		if (year == undefined) return;
		this.required.add(`year="${year}"`);
	}

	name(name: string) {
		this.findRemove('name~', this.optional);
		this.optional.add(`name~"${name}"`);
	}

	getName(): string {
		return this.getOptionalFilterValue("name~")
	}

	identifier(id: string) {
		this.findRemove('identifier~', this.optional);
		this.optional.add(`identifier~"${id}"`);
	}

	getIdentifier(): string {
		return this.getOptionalFilterValue("identifier~")
	}

	note(note: string) {
		this.findRemove('note~', this.optional);
		this.optional.add(`note~"${note}"`);
	}

	getNote(): string {
		return this.getOptionalFilterValue("note~")
	}

	id(id: string) {
		this.findRemove('id=', this.required);
		this.required.add(`id="${id}"`);
	}

	getId(): string {
		return this.getRequiredFilterValue("id=")
	}

	mpgnumber(mpgNr: string | undefined) {
		this.findRemove('mpgNr~', this.optional);
		this.optional.add(`mpgNr~"${mpgNr}"`);
	}

	getMpgNr(): string {
		return this.getOptionalFilterValue("mpgNr~")
	}

	country(country: string) {
		this.findRemove('country=', this.required);
		this.required.add(`country="${country}"`);
	}

	getCountry(): string {
		return this.getRequiredFilterValue("country~")
	}

	subSeries(name: string) {
		this.findRemove('subSeriesId.name~', this.optional);
		this.optional.add(`subSeriesId.name~"${name}"`);
	}

	getSubSerie(): string {
		return this.getOptionalFilterValue("subSeriesId.name~")
	}

	sortNote() {
		this.killMpgNr();
		this.killName();
		this.toggleSort('note');
	}

	getSortNote(): boolean {
		return !this.sort.has("-note")
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

	getSortMpgNr(): boolean {
		return !this.sort.has("-mpgNr")
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

	getSortName(): boolean {
		return !this.sort.has("-name")
	}

	killName() {
		this.findRemove('+name', this.sort);
		this.findRemove('-name', this.sort);
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
		if (this.required.size == 0 && this.optional.size == 0 && this.sort.size == 0)
			return await this.figureCollection.getList(this.currentPage, figureInitLoadCount);

		let query = '';
		if (this.required.size > 0) {
			query = Array.from(this.required).join('&&');
			if (this.optional.size > 0) query += '&&(';
		}
		if (this.optional.size > 0) {
			query += Array.from(this.optional).join('||');
			if (this.required.size > 0) {
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
