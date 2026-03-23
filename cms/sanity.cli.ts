import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'm7bjlhok',
    dataset: 'production'
  },
  deployment: {
    appId: 'prdovbw3o8i18sgiln92p5ne',
    autoUpdates: true,
  }
})
