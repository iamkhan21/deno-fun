/** @jsx h */
import { serve } from 'https://deno.land/std@0.116.0/http/server.ts';
import { h, Helmet, renderSSR } from './deps.ts';
import App from './shell/App.tsx';

const ssr = renderSSR(<App />);
const { body, head, footer } = Helmet.SSR(ssr);

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com//open-props@1.3.1/open-props.min.css"/>
    <link rel="stylesheet" href="https://unpkg.com/open-props@1.3.1/normalize.min.css"/>
    <style>
      body {
        padding: 10px 25px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
        gap: 20px;
      }
    </style>
    ${head.join('\n')}
  </head>
  <body>
    ${body}
    ${footer.join('\n')}
  </body>
</html>`;

const handler = (request: Request): Response => {
	const url: URL = new URL(request.url);

	switch (url.pathname) {
		case '/':
			return new Response(html, {
				headers: { 'Content-Type': 'text/html' },
			});

		default:
			return new Response('404', { status: 404 });
	}
};

console.log(`HTTP webserver running. Access it at: http://localhost:8000/`);

await serve(handler);
