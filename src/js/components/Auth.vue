<template lang="pug">
ul.nav.navbar-nav.navbar-right
  li
    p.navbar-text(v-if='isAuthenticated', href='#')
      span.glyphicon.glyphicon-user
      span &nbsp; {{ name }}
  li
    a(v-if='isAuthenticated', v-on:click.prevent='logout', href='#') Logout
    a(v-else='isAuthenticated', v-on:click.prevent='login', href='#') Sign In
</template>

<script>
import { login, logout } from '../auth';

export default {
  props: ['isAuthenticated', 'profile'],
  methods: {
    login: () => login(),
    logout: () => logout()
  },
  data: function () {
    return {
    }
  },
  computed: {
    name () {
      if (this.profile) {
        return this.profile.user_metadata.name;
      }
    }
  }
}
</script>

<style>
</style>
