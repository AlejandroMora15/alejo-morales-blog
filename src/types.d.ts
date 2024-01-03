export interface Block {
  id: string
  type: BlockType
  heading_1?: { rich_text: RichText[] }
  paragraph?: { rich_text: RichText[] }
  code?: CodeText
}

type BlockType = 'heading_1' | 'paragraph' | 'code'

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