/** Keep the static site intact; normalize its established public entrances. */
export async function route(request, env) {
  const url = new URL(request.url);
  if (url.hostname === 'www.85skytower.org' ||
      (url.hostname === '85skytower.org' && url.protocol === 'http:')) {
    url.hostname = '85skytower.org';
    url.protocol = 'https:';
    url.port = '';
    return new Response(null, {status: 308, headers: {
      location: url.toString(),
      'cache-control': 'no-store'
    }});
  }
  const response = await env.ASSETS.fetch(request);
  if (response.status !== 404) return response;
  const headers = new Headers(response.headers);
  headers.set('x-robots-tag', 'noindex');
  headers.set('cache-control', 'no-store');
  return new Response(request.method === 'HEAD' ? null : response.body, {
    status: 404, headers
  });
}
export default {fetch: route};
