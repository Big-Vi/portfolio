import { getClient } from './sanity'

export async function getAllDocSlugs(doc) {
    const data = await getClient().fetch(
        `*[_type == "${doc}"]{ "slug": slug.current }`
    )
    return data
}