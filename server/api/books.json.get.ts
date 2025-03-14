import type { NotionPage } from '~/type'

export default eventHandler(async () => {
  return $fetch<NotionPage[]>(
    'https://api-mybooks.tuanductran-dev-f18.workers.dev'
  )
})
