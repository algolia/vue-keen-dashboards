<template lang="pug">
  .container-fluid
    .row
      .col-sm-8
        .chart-wrapper
          .chart-stage
            chart(:chart="chartOne" :client="client")
</template>

<script>
  import { chartOne } from '../charts';

  export default {
    props: ['isAuthenticated', 'profile', 'client'],
    components: {
      chart: require('../components/Chart')
    },
    data () {
      return {
        chartOne
      };
    }
  }
</script>
