<template lang='pug'>
.navbar.navbar-inverse.navbar-fixed-top(role='navigation')
  .container-fluid
    .navbar-header
      button.navbar-toggle(type='button', data-toggle='collapse', data-target='.navbar-collapse')
        span.sr-only Toggle navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      router-link.navbar-brand(:to="{ name: 'home' }")
        span.glyphicon.glyphicon-dashboard
        span &nbsp; Mashboard
    .navbar-collapse.collapse
      ul.nav.navbar-nav(v-if="isAuthenticated")
        li.dropdown
          a.dropdown-toggle(href='#', data-toggle='dropdown', role='button', aria-haspopup='true', aria-expanded='false')
            | Dashboards
            span.caret
          ul.dropdown-menu
            li
              router-link(:to="{ name: 'one' }") Dashboard One
            li
              router-link(:to="{ name: 'two' }") Dashboard Two
          li
            router-link(:to="{ name: 'explorer' }") Explorer
      auth(:profile='profile', :is-authenticated='isAuthenticated')
      ul.nav.navbar-nav.navbar-right
        li
          a(href="https://github.com/dzello/mashboard" target="_blank") Get the code
</template>

<script>
  export default {
    props: ['isAuthenticated', 'profile'],
    components: {
      auth: require('./Auth'),
    }
  }
</script>
