import { getHost } from "./getHost";

export function getThumbnail(url: string): string {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
