<template lang="pug">
.container-fluid
  .row
    .col-sm-4(v-for="(chart, index) in charts")
      .chart-wrapper
        .chart-stage
          chart(v-bind:chart="chart" :client="client")
</template>

<script>
  import { chartTwo } from '../charts';

  export default {
    props: ['isAuthenticated', 'profile', 'client'],
    components: {
      chart: require('../components/Chart')
    },
    data () {
      return {
        charts: [chartTwo]
      };
    }
  }
</script>
