import { Client } from "@notionhq/client"
import type { Block } from "../types"
import { formatDate } from "../utils"

const notion = new Client({
  auth: import.meta.env.NOTION_API_KEY,
})

const database_id = '94a5a0d12e514ca7aeb4b284f5bd28e8'

export const getPosts = async () => {
  //const databaseId = import.meta.env.NOTION_DATABASE_ID
  const response = await notion.databases.query({
    database_id,
    filter: {
      property: 'status',
      status: {
        equals: 'Disponible',
      },
    },
    sorts: [
      {
        property: 'created_at',
        direction: 'descending',
      },
    ],
  })

  const posts = response.results.map((page: any) => {
    return {
      id: page.id,
      title: page.properties.title.title[0].plain_text,
      description: page.properties.description.rich_text[0].plain_text,
      created_at: formatDate(page.properties.created_at.created_time),
      cover: page.cover.external.url,
      status: page.properties.status.status.name,
      tags: page.properties.tags.multi_select.map((tag: any) => ({name: tag.name, color: tag.color})),
    }
  })

  return posts
}

export const getMainPosts = async () => {
  //const databaseId = import.meta.env.NOTION_DATABASE_ID
  const response = await notion.databases.query({
    database_id,
    page_size: 4,
    filter: {
      property: 'status',
      status: {
        equals: 'Disponible',
      },
    },
    sorts: [
      {
        property: 'created_at',
        direction: 'descending',
      },
    ],
  })

  const posts = response.results.map((page: any) => {
    return {
      id: page.id,
      title: page.properties.title.title[0].plain_text,
      description: page.properties.description.rich_text[0].plain_text,
      created_at: formatDate(page.properties.created_at.created_time),
      cover: page.cover.external.url,
      status: page.properties.status.status.name,
      tags: page.properties.tags.multi_select.map((tag: any) => ({name: tag.name, color: tag.color})),
    }
  })

  return posts
}

export const getPostsIds = async () => {
  const response = await notion.databases.query({ database_id })
  const ids = response.results.map((page: any) => {
    return {
      params: {
        id: page.id,
      },
    } 
  })
  return ids
}

export const getBlockById = async (id: string) => {
  const block = await notion.blocks.children.list({
    block_id: id,
  })
  return block.results as Block[]
}
