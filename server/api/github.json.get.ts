import type { GitHubUser } from '~/type'

export default eventHandler(async () => {
  return $fetch<GitHubUser>('https://api.github.com/users/tuanductran')
})
