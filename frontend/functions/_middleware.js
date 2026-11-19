// Runs on Cloudflare before serving HTML, JavaScript, images, and other assets.
export function onRequest({ request, next }) {
  if (request.cf?.country !== 'JP') {
    return new Response('Access is only available from Japan.', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  }

  return next();
}
