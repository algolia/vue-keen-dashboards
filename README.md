# Mashboard

A boilerplate that mashes up a few APIs to create a secure dashboard.

Totally serverless.

### Features

Serverless authentication.
Very easy to add new pages.
Streamlined, fast development with gulp, webpack and hugo.

### Technologies

- Vue.js for the JavaScript app
- Hugo as the static site generator
- Auth0 lock for serverless authentication
- Keen IO for charts
- keen-explorer for point-and-click browsing of Keen IO data
- Bootstrap for layout and CSS

### Development

Clone the repo.

Install dependencies.

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
