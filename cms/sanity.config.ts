import React from 'react'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {PreviewPane} from './plugins/previewPane'

const Logo = () =>
  React.createElement('img', {
    src: '/static/logo.png',
    alt: 'Florian Huber',
    style: {height: '32px', objectFit: 'contain'},
  })

export default defineConfig({
  name: 'default',
  title: 'Florian Huber e.U.',

  projectId: 'm7bjlhok',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Projects')
              .child(
                S.documentTypeList('project')
                  .title('Projects')
                  .child((documentId) =>
                    S.document()
                      .documentId(documentId)
                      .schemaType('project')
                      .views([
                        S.view.form().title('Edit'),
                        S.view
                          .component(PreviewPane)
                          .title('Preview')
                          .icon(() => React.createElement('span', {}, '👁')),
                      ])
                  )
              ),
            S.listItem()
              .title('Workflow / Blog')
              .child(
                S.documentTypeList('post')
                  .title('Workflow / Blog')
              ),
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('settings')
                  .documentId('settings')
                  .title('Site Settings')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
    },
  },
})
