<template lang="pug">
  .container-fluid
    .row
      .col-sm-8
        .chart-wrapper
          .chart-stage
            chart(:chart="chartOne" :client="client")
      .col-sm-4
        .chart-wrapper
          .chart-stage
            chart(:chart="chartTwo" :client="client")
    .row
      .col-sm-8
        .chart-wrapper
          .chart-stage
            chart(:chart="chartThree" :client="client")
      .col-sm-4
        .chart-wrapper
          .chart-stage
            chart(:chart="chartFour" :client="client")
</template>

<script>
  import { chartOne, chartTwo, chartThree, chartFour } from '../charts';

  export default {
    props: ['isAuthenticated', 'profile', 'client'],
    components: {
      chart: require('../components/Chart')
    },
    data () {
      return {
        chartOne, chartTwo, chartThree, chartFour
      };
    }
  }
</script>
