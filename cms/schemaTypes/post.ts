import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Workflow / Blog',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: r => r.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: r => r.required()}),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Workflow', value: 'workflow'},
          {title: 'Process', value: 'process'},
          {title: 'Behind the Scenes', value: 'bts'},
          {title: 'Insight', value: 'insight'},
        ],
      },
    }),
    defineField({
      name: 'video',
      title: 'Video (Reel)',
      type: 'file',
      options: {accept: 'video/*'},
      description: 'Upload a video reel (mp4, mov, etc.)',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image / Thumbnail',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'coverImage'},
  },
  orderings: [
    {title: 'Newest first', name: 'publishedAtDesc', by: [{field: 'publishedAt', direction: 'desc'}]},
  ],
})
