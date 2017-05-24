# Mashboard

Mashboard is a secure, extensible dashboard for your [Keen IO](https://keen.io/) data built with [Vue.js](https://vuejs.org).

Mashboard is a mashup of a few friendly APIs: [Auth0](https://auth0.com/) for serverless login and [Netlify](https://netlify.com/) for free HTTPS hosting with custom domains.

This project solves a number of challenges traditionally associated with dashboard and static site hosting:

- API Keys are not discoverable by a logged out user. They are fetched from the user's Auth0 profile after login.
- All data travels over HTTPS.
- No server is required.

It takes about 10 minutes to set up your own instance. You will need to create Keen IO, Auth0 and Netlify accounts if you don't have them already.

See the demo: https://mashboard.dzello.com/

## Features

It's secure. API keys are never exposed and all data travels over HTTPS. You can even implement different security for different users using Auth0 primitives.

Adding new charts and dashboards is as simple as extending or copy existing Vue.js components.

The underlying static site is built with [hugo](https://gohugo.io/). You can add new pages and do anything that Hugo can do, with lightning-fast rebuilt times.

## Development

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

You will not be able to log in in development or production until you do the following steps.

## Set up Auth0

Create a free [Auth0 account](https://auth0.com/) if you don't have one already.

Following all of the onboarding instructions, including creating a new application in whatever region you like.

Go to the "Clients" tab of the Auth0 dashboard and create a new client for a single page application.

Add `http://localhost:3000` to the allowed callback URLs of the client you've created.

![client dashboard tab](https://cl.ly/1a2E421m0i3E/Screenshot%202017-05-24%2014.04.33.png)

In the Connections tab of the client, make sure to enable the "Username-Password-Authentication" connection. (If you're more familiar with Auth0 you can do any connection you want, but for just getting started this is the easiest.)

![connections dashboard tab](https://cl.ly/0n1v3t2A1217/Screenshot%202017-05-24%2013.59.15.png)

In the "Users" tab of your Auth0 dashboard, create a new user. Remember the email and password - this is what you will use to sign in.

![create new user](https://cl.ly/0w1r0i2Y3G1a/Screenshot%202017-05-24%2014.06.17.png)

Go back to the "Connections" tab and click on the connect you created. The settings tab looks like this:

![settings tab](https://cl.ly/3X1C1g272P2r/Screenshot%202017-05-24%2014.07.58.png)

Add two pieces of information to a new `.env` file in the same folder as the repository. The file should look like exactly like this:

```
AUTH_DOMAIN=<your-auth-domain>
AUTH_CLIENT_ID=<your-auth-client-id>
```

Restart your development application. There should be no warnings in the console and you should be able to sign in. You will not yet see any charts or dashboards, as we have not configured Keen IO yet.

For more details about these steps, see the [Auth0 JavaScript Quickstart Guide](https://auth0.com/docs/quickstart/spa/vanillajs). You can also read more information about [Auth0 lock](https://auth0.com/docs/libraries/lock/v10).

## Set up Keen IO

Add Auth0 profile rules for Keen IO API keys.



## Set up Netlify and deploy

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
