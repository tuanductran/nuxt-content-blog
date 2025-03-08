export function getHost(url: string): string {
  const parsedUrl = new URL(url);
  let { host } = parsedUrl;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}
