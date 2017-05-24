<template lang="pug">
  div(ref="container")
</template>

<script>
export default {
  props: ['chart', 'height', 'client'],
  data: function () {
    return {
      defaultHeight: 320
    }
  },
  methods: {
    draw () {
      this.chart.viz
        .el(this.$refs['container'])
        .height(this.height || this.defaultHeight)
        .prepare();
      this.client.query(this.chart.operation, this.chart.params)
        .then((res) => {
          this.chart.viz
            .data(res)
            .sortGroups('desc')
            .render();
        }).catch(function(err) {
          console.error(err);
        });
      }
  },
  mounted: function () {
    if (this.client) {
      this.draw();
    }
  },
  watch: {
    client: function (newClient) {
      if (newClient) {
        this.draw();
      }
    }
  }
}
</script>
