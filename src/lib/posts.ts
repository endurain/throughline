import { getCollection } from 'astro:content';

// Drafts show in `astro dev` but are excluded from production builds.
export async function getPosts() {
  const posts = await getCollection('labs', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
