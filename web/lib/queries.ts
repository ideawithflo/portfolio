import { client } from './sanity'

export async function getProjects() {
  return client.fetch(`
    *[_type == "project"] | order(year desc) {
      _id, title, slug, category, year, featured,
      coverImage, tags, "modelUrl": modelFile.asset->url
    }
  `)
}

export async function getFeaturedProject() {
  return client.fetch(`
    *[_type == "project" && featured == true][0] {
      _id, title, slug, category, year,
      coverImage, description, tags,
      "modelUrl": modelFile.asset->url
    }
  `)
}

export async function getSettings() {
  return client.fetch(`*[_type == "settings"][0]`)
}
