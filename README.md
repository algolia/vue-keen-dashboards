# Mashboard

Mashboard is a secure, extensible dashboard for your [Keen IO](https://keen.io/) data built with [Vue.js](https://vuejs.org).

It uses [Auth0](https://auth0.com/) for serverless login and comes ready to deploy to [Netlify](https://netlify.com/) for free HTTPS hosting with custom domains.

This project solves a number of challenges traditionally associated with dashboard and static site hosting:

- API Keys are not discoverable by a logged out user. They are fetched from the user's Auth0 profile after login.
- All data travels over HTTPS.
- No server is required.

It takes about 10 minutes to set up your own instance. You will need to create Keen IO, Auth0 and Netlify accounts if you don't have them already.

See the demo: https://mashboard.dzello.com/

### Features

Adding new charts and dashboards is as simple as extending or copy existing Vue.js components.

The underlying static site is built with [hugo](https://gohugo.io/). That means you can add new pages and do anything that Hugo can do.

### Development

Clone the repo.

``` shell
git clone git@github.com:dzello/mashboard.git
```

Install dependencies.

``` shell
yarn
```

Compile the hugo static site, build the webpack assets and serve locally with hot reloading:

```
yarn start
```

Then point your browser to [http://localhost:3000](http://localhost:3000).

### APIs

You will not be able to log in or deploy until you do the following steps.

Set up an Auth0 lock.
Use the domain name for localhost.

Create a .env file.

AUTH_DOMAIN=<your-auth-domain>
AUTH_CLIENT_ID=<your-auth-client-id>

Add Auth0 profile rules for Keen IO API keys.

### Deploy

Create a netlify app.

NODE_ENV=production
HUGO_VERSION=0.20
AUTH_DOMAIN=<your-auth-domain>
AUTH_CLIENT_ID=<your-auth-client-id>

Modify the domain name if you want.
Add the domain name.

Put the domain name in the Auth0 client config.

Deploy.
