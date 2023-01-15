# Nuxt 3 Discord Authentication Example

Uses https://github.com/nuxt-alt/auth to support nuxt3 properly.
Instructions for discord: https://auth.nuxtjs.org/providers/discord/

Steps:
1. Clone project.
1. Create an application in https://discord.com/developers/applications.
1. Copy client id and client secret from oauth2 settings - https://discord.com/developers/applications/{{yourclientid}}/oauth2/general
1. Add client id and client secret to nuxt.config.ts.
1. Add redirect uri as "http://localhost:3000/auth/callback" for development.
![image](https://user-images.githubusercontent.com/5083273/212569497-e31d723d-275b-47d1-9a5e-fd05465663ff.png)
1. Run `yarn install`.
1. Run `yarn run dev`.
1. Go to `http://localhost:3000/auth/login` to login.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
