<template lang="pug">
  .container-fluid(v-if="hasMasterKey")
    .row
      .col-md-12(ref="container")
  .container-fluid(v-else)
    .row
      .col-md-12
        p.alert.alert-warning The Keen IO explorer requires a master key. The demo is not configured with one. To enable the explorer for your instance, make sure your Auth0 user profiles contains a <code>app_metadata.keen_master_key</code> property.
</template>

<script>
  export default {
    props: ['isAuthenticated', 'profile', 'client'],
    data () {
      return {
      };
    },
    computed: {
      hasMasterKey () {
        return this.client && this.client.config && this.client.config.masterKey
      }
    },
    methods: {
      draw () {
        if (this.hasMasterKey) {
          var myExplorer = new Keen.Explorer.App(this.$refs['container'])
            .client({
              projectId: this.client.config.projectId,
              masterKey: this.client.config.masterKey,
              readKey: this.client.config.readKey
            })
            .persistence(true)
            .fetch();
        }
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
