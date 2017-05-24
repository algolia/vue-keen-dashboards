<template lang="pug">
.container-fluid
  .row
    .col-sm-4
      loggedOut()
</template>

<script>
import { login } from '../auth';
export default {
  components: {
    loggedOut: require('../components/LoggedOut')
  },
  methods: {
    login: login
  }
}
</script>
