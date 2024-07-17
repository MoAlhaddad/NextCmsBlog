import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemas/post'
import { comment } from './schemas/comment'
import { tag } from './schemas/tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, comment, tag],
}
