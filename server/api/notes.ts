import type { NotionPage } from '~/type'

export default cachedEventHandler(
  defineEventHandler(async event => {
    const { page_size, start_cursor } = getQuery(event)

    try {
      const response = await $fetch<{
        results: NotionPage[]
        has_more: boolean
        next_cursor: string | null
      }>('https://api-mynotes.tuanductran-dev-f18.workers.dev', {
        params: {
          page_size: page_size ? Number(page_size) : 10,
          start_cursor: start_cursor || undefined
        }
      })

      return response
    } catch (error) {
      console.error('Error fetching notes:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch books'
      })
    }
  }),
  {
    name: 'notes-cache',
    maxAge: 60,
    staleMaxAge: 300
  }
)
