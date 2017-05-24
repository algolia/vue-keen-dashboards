<template lang="pug">
  .container-fluid
    .row
      .col-md-12(ref="container")
</template>

<script>
  export default {
    props: ['isAuthenticated', 'profile', 'client'],
    data () {
      return {
      };
    },
    methods: {
      draw () {
        var myExplorer = new Keen.Explorer.App(this.$refs['container'])
          .client({
            projectId: this.client.config.projectId,
            masterKey: this.client.config.masterKey,
            readKey: this.client.config.readKey
          })
          .persistence(true)
          .fetch();
      }
    },
    mounted: function() {
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
