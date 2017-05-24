<template lang="pug">
  .container-fluid(v-if="isAuthenticated")
    .row
      .col-sm-8
        .chart-wrapper
          .chart-stage
            chart(:chart="chartOne" :client="client")
      .col-sm-4
        .chart-wrapper
          .chart-stage
            h4 This is the logged in home page of your mashboard.
            p You can add more charts in <code>src/pages/Home.vue</code>.
            p You can create pages by creating new components and linking them in <code>src/js/routes.js</code>.
    .row
      .col-sm-4
        .chart-wrapper
          .chart-stage
            chart(:chart="chartTwo" :client="client")
  .container-fluid(v-else)
    .row
      .col-sm-4
        .chart-wrapper
          .chart-stage
            h4 Mashboard is a secure, extensible dashboard for your Keen IO data built with Vue.js.
            p It uses Auth0 for serverless login and comes ready to deploy to Netlify for free HTTPS hosting with custom domains. 
            p New charts and dashboard pages can be added easily.
            p
              span To create and deploy your own, follow the instructions&nbsp;
              a(href="https://github.com/dzello/mashboard") on Github
              span .
      .col-sm-4
        .chart-wrapper
          .chart-stage
            loggedOut()
</template>

<script>
import { login } from '../auth';
import { chartOne, chartTwo } from '../charts';
export default {
  props: ['isAuthenticated', 'profile', 'client'],
  components: {
    chart: require('../components/Chart'),
    loggedOut: require('../components/LoggedOut')
  },
  methods: {
    login: login
  },
  data () {
    return {
      chartOne, chartTwo
    };
  }
}
</script>
