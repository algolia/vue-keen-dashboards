<template lang="pug">
div
  p.alert.alert-warning You aren't logged in, so you can't see any data.
  p You can sign in to this demo using a test account.
  p
    span Username: <code>mashboard</code><br>
    span Password: <code>mashboard</code>
  br
  p
    button.btn.btn-primary.center(v-on:click.prevent="login") Sign In
</template>

<script>
import { login } from '../auth';
export default {
  methods: {
    login: login
  }
}
</script>
