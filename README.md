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

Add Auth0 profile rules for Keen IO API keys.

Create a .env file.

AUTH_DOMAIN
AUTH_CLIENT_ID

### Deploy

Set environment variables.

NODE_ENV
HUGO_VERSION
AUTH_DOMAIN
AUTH_CLIENT_ID
