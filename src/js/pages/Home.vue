<template lang="pug">
  .container-fluid(v-if="isAuthenticated")
    .row
      .col-sm-8
        .chart-wrapper
          .chart-stage
            chart(:chart="chartFive" :client="client")
      .col-sm-4
        .chart-wrapper
          .chart-stage
            chart(:chart="chartSix" :client="client")
    .row
      .col-sm-6
        .chart-wrapper
          .chart-stage
            chart(:chart="chartSeven" :client="client" :height="1280")
      .col-sm-6
        .chart-wrapper
          .chart-stage
            chart(:chart="chartEight" :client="client" :height="1280")
  .container-fluid(v-else)
    .row
      .col-md-12
        h3 Please log in.
</template>

<script>
import { chartFive, chartSix, chartSeven, chartEight } from '../charts';
export default {
  props: ['isAuthenticated', 'profile', 'client'],
  components: {
    chart: require('../components/Chart')
  },
  data () {
    return {
      chartFive, chartSix, chartSeven, chartEight
    };
  }
}
</script>
