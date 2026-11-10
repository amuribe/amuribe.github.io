import { getCollection } from 'astro:content';

/** Published posts, newest first. Drafts appear only in `npm run dev`. */
export async function getPosts() {
  const posts = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** True once there is at least one published post; nav and footer use this. */
export async function hasPosts() {
  return (await getPosts()).length > 0;
}
