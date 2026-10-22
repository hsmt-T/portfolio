# portfolio

## Development

Use Node.js 26.12.1 (Current) for both the frontend and backend tooling.
The version is pinned in `.nvmrc`, and both packages declare the supported
Node.js range in `engines`.

```sh
nvm install
nvm use

cd frontend
npm ci
npm run dev
```

In another terminal, select the same Node.js version from the repository root:

```sh
nvm use
cd backend
npm ci
npm run dev
```

The backend runs on Cloudflare Workers; Node.js is used for Wrangler tooling.
