import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Category description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
    }),
  ],
})
