import type { Item } from '~/type'

export function categorizeItems(items: Item[]): Record<string, Item[]> {
  const categories = ['applications', 'hardware', 'software', 'services']

  return categories.reduce(
    (acc, category) => {
      acc[category] = items.filter(item => item.category === category)
      return acc
    },
    {} as Record<string, Item[]>
  )
}
