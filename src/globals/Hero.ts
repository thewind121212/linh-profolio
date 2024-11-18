
import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'Hero',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
    }
  ],
}
