import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: r => r.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: r => r.required()}),
    defineField({name: 'category', title: 'Category', type: 'string'}),
    defineField({name: 'year', title: 'Year', type: 'number'}),
    defineField({name: 'featured', title: 'Featured (Hero)', type: 'boolean', initialValue: false}),
    defineField({name: 'coverImage', title: 'Cover Image', type: 'image', options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt Text', type: 'string'})],
    }),
    defineField({
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
          {
            name: 'orientation',
            title: 'Format',
            type: 'string',
            options: {
              list: [
                {title: 'Querformat (16:9)', value: 'landscape'},
                {title: 'Hochformat (9:16)', value: 'portrait'},
                {title: 'Quadrat (1:1)', value: 'square'},
              ],
              layout: 'radio',
            },
            initialValue: 'landscape',
          },
        ],
        preview: {
          select: {media: 'image', subtitle: 'orientation'},
          prepare: ({media, subtitle}: any) => ({media, title: subtitle || 'landscape'}),
        },
      }],
    }),
    defineField({name: 'modelFile', title: '3D Model (.glb)', type: 'file',
      options: {accept: '.glb,.gltf'},
      description: 'Upload a .glb file to enable the 3D viewer',
    }),
    defineField({name: 'description', title: 'Description', type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({name: 'tags', title: 'Tags', type: 'array', of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'coverImage'},
  },
  orderings: [
    {title: 'Year, newest', name: 'yearDesc', by: [{field: 'year', direction: 'desc'}]},
  ],
})
