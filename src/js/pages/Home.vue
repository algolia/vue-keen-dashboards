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
            chart(:chart="chartTwo" :client="client")
  .container-fluid(v-else)
    .row
      .col-md-12
        h3 Please log in.
</template>

<script>
import { chartOne, chartTwo } from '../charts';
export default {
  props: ['isAuthenticated', 'profile', 'client'],
  components: {
    chart: require('../components/Chart')
  },
  data () {
    return {
      chartOne, chartTwo
    };
  }
}
</script>
