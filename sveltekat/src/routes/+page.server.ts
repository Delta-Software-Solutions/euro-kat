import { connection, getLatestArticle } from '$lib/PocketBase';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	let figureCount = (await connection.collection('Figure').getList(1, 1, {})).totalItems;
  let article = await getLatestArticle();
	return {
		figureCount: figureCount,
    article: article
	};
}) satisfies PageServerLoad;
