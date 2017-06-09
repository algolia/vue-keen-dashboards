# vue-keen-dashboards

vue-keen-dashboards is a secure, extensible dashboard boilerplate for your [Keen IO](https://keen.io/) data built with [Vue.js](https://vuejs.org). It comes ready to plug in Auth0 for authentication and it's deploy-ready to Netlify using Hugo as the static site generator.

![demo screenshot](https://cl.ly/3u1e2n0G2N3q/Screenshot%202017-05-24%2014.50.24.png)

vue-keen-dashboards is a mashup of a few friendly APIs & services:

- [Keen IO](https://keen.io/) for data collection and visualization
- [Auth0](https://auth0.com/) for serverless login
- [Netlify](https://netlify.com/) for free HTTPS hosting with custom domains

This project addresses a number of pain points traditionally associated with dashboard hosting:

- API keys need to stay private until the user is authenticated.
- All data should travel over HTTPS.
- Having many charts and graphs can lead to unkempt code.
- Running a server is annoying.

It takes about 10 minutes to set up your own instance. You will need to create Keen IO, Auth0 and Netlify accounts if you don't have them already.

See the demo: https://vue-keen-dashboards.dzello.com/

## Features

Adding new charts and dashboards is as simple as extending or copy existing Vue.js components.

The underlying static site is built with [hugo](https://gohugo.io/) and based on the [netlify/victor-hugo boilerplate](https://github.com/netlify/victor-hugo). You can add new pages and do anything that Hugo can do, with lightning-fast rebuild times.

It's secure. API keys for Keen IO are only sent to the browser once the user has authentication. All data travels over HTTPS.

## Development

Clone the repo.

``` shell
git clone git@github.com:dzello/vue-keen-dashboards.git
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

Create a free [Auth0 account](https://auth0.com/) if you don't have one already. Follow all of the onboarding instructions, including creating a new application in whatever region you like.

Go to the "Clients" tab of the Auth0 dashboard and create a new client for a single page application.

![new auth0 client](https://cl.ly/0q3j1Y111u1R/Screenshot%202017-05-24%2014.16.34.png)

Go to the Settings tab. Add `http://localhost:3000` to the allowed callback URLs of the new client.

![client dashboard tab](https://cl.ly/1a2E421m0i3E/Screenshot%202017-05-24%2014.04.33.png)

Go to the Connections tab and enable "Username-Password-Authentication". (If you're more familiar with Auth0 you can do any connection you want, but for just getting started this is the easiest.)

![connections dashboard tab](https://cl.ly/0n1v3t2A1217/Screenshot%202017-05-24%2013.59.15.png)

Go to the Users tab of your Auth0 dashboard and create a new user. Remember the email and password - this is what you will use to sign in.

![create new user](https://cl.ly/0w1r0i2Y3G1a/Screenshot%202017-05-24%2014.06.17.png)

Go back to the Connections tab and click on the connection you created previously. It should look like this:

![settings tab](https://cl.ly/3X1C1g272P2r/Screenshot%202017-05-24%2014.07.58.png)

Add the domain and client ID to a new `.env` file in the root of the repository you cloned. The file should look like exactly like this:

```
AUTH_DOMAIN=<your-auth-domain>
AUTH_CLIENT_ID=<your-auth-client-id>
```

Restart your development application.

```
yarn start
```

There should be no warnings in the console and you should now be able to sign in. You will not yet see any charts or dashboards, as we have not configured Keen IO yet.

For more details about these steps, see the [Auth0 JavaScript Quickstart Guide](https://auth0.com/docs/quickstart/spa/vanillajs). You can also read more information about [Auth0 lock](https://auth0.com/docs/libraries/lock/v10).

## Set up Keen IO

Create a [Keen IO account](https://keen.io/) and create a new project if you don't have one already.

![new keen project](https://cl.ly/1B363R1a1o1x/Screenshot%202017-05-24%2014.49.44.png)

The "Access" tab of your Keen IO dashboard contains several pieces of information you'll need - Project ID, Read Key and Master Key (if you want to use [keen-explorer](https://github.com/keen/explorer)).

Do NOT put these in your .env file.

Go back to the Users tab of your Auth0 dashboard and click on the user you created previously. Scroll down to the Metadata section.

![auth0 user metadata](https://cl.ly/34191v3y1p1M/Screenshot%202017-05-24%2014.25.46.png)

To the app_metadata section, add these fields, substituting your specific Keen IO values:

```
{
  "keen_project_id": "<your-keen-project-id",
  "keen_read_key": "<your-keen-read-key>",
  "keen_master_key": "<your-keen-master-key>"
}
```

Save the user. Now, when they log in, the vue-keen-dashboards JavaScript application can fetch these values from their Auth0 profile and begin to make API calls.

In your development environment, log out and log back in to make sure the keys are in the profile.

Edit the `src/js/charts/index.js` file and change `chartOne` and `chartTwo` to charts that match the data you have.

```
export const chartOne = {
  operation: 'count',
  params: {
    event_collection: '<your-keen-io-collection>',
    timeframe: 'this_14_days',
    interval: 'daily'
  },
  viz: new window.Keen.Dataviz()
        .type('bar')
        .title('Pageviews by day')
};
```

See the [keen-dataviz.js documentation](https://github.com/keen/keen-dataviz.js/) for the full set of charting options available. You can also check out [the demo](http://keen.github.io/keen-dataviz.js/).

When you save the file, the app should rebuild and the browser should refresh. If everything goes right, you should see your own data show up!

## Set up Netlify and deploy

Deploying to Netlify is easy, and you can get HTTPS and custom domains for free. Netlify deploys directly from Github.

First, create a new Github repo. Then push this repository to it (make sure to check in everything that you've done.

Create a new Netlify app based on the new Github repository. Set these environment variables, substituting your Auth0 domain and client ID:

```
NODE_ENV=production
HUGO_VERSION=0.20
AUTH_DOMAIN=<your-auth-domain>
AUTH_CLIENT_ID=<your-auth-client-id>
```

Here's what that looks like:

![netlify environment variables](https://cl.ly/3y082h1w2M2M/[3b428b7cf80395ce90fc41f41609dd18]_Screenshot%202017-05-24%2014.42.00.png)
 
 Trigger a build via a `git push` or in the Netlify dashboard.
 
**Important:** Add your new app's Netlify or custom domain to the allowed callbacks of your Auth0 dashboard. Make sure to match http/https appropriately.

![Add callback app](https://cl.ly/0Z1H3Q0b110C/Screenshot%202017-05-24%2014.47.21.png)

You should now be able to log in via Auth0 to your Netlify instance.

## Contributing

Issues and pull requests are welcome. Please follow the instructions in the contribution templates.

Thank you!
