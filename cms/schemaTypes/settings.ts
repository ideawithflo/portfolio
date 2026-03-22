import {defineField, defineType} from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'siteTitle', title: 'Site Title', type: 'string'}),
    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({name: 'bio', title: 'Bio', type: 'text', rows: 4}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url'}),
    defineField({name: 'instagramUrl', title: 'Instagram URL', type: 'url'}),
  ],
  preview: {
    select: {title: 'siteTitle'},
    prepare: () => ({title: 'Site Settings'}),
  },
})
