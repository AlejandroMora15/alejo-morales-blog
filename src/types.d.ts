export interface Block {
  id: string
  type: BlockType
  heading_1?: { rich_text: RichText[] }
  heading_2?: { rich_text: RichText[] }
  paragraph?: { rich_text: RichText[] }
  code?: CodeText
  image?: BlockImage
}

type BlockType = 'heading_1' | 'heading_2' | 'paragraph' | 'code' | 'image' 

export interface RichText {
 plain_text: string
 href?: string
 annotations: {
    bold: boolean,
    italic: boolean,
    strikethrough: boolean,
    underline: boolean,
    code: boolean
  },
}

interface CodeText {
  language: string
  rich_text: RichText[]
}

interface BlockImage {
  caption: RichText[]
  external: {
    url: string
  }
}

// ----------------------------------------------

export interface IPost {
  id: string
  title: string
  description: string
  created_at: string
  cover: string
  tags: {name: string, color: string}[]
}