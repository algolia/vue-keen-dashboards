import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
import config from './config';
import { storeLogin, isAuthenticated, getProfile } from './auth';

Vue.use(VueRouter);

window.lock = new window.Auth0Lock(config.authClientId, config.authDomain);
window.lock.on('authenticated', function(authResult) {
  storeLogin(authResult);
  appVue.isAuthenticated = true;
});

const router = new VueRouter({
  routes,
  mode: 'history'
});

const appVue = new Vue({
  router,
  el: '#app',
  template: `
    <div>
      <navbar :is-authenticated="isAuthenticated" :profile="profile"></navbar>
      <router-view :is-authenticated="isAuthenticated" :profile="profile" :client="client"></router-view>
    </div>
  `,
  components: {
    navbar: require('./components/Navbar'),
  },
  data: {
    isAuthenticated: isAuthenticated(),
    currentRoute: window.location.pathname,
    profile: undefined
  },
  created: function() {
    if (this.isAuthenticated) {
      this.fetchProfile();
    }
  },
  watch: {
    isAuthenticated: function(newIsAuthenticated) {
      if (newIsAuthenticated) {
        this.fetchProfile();
      }
    }
  },
  computed: {
    client () {
      if (this.profile) {
        return new window.KeenClient({
          projectId: this.profile.app_metadata.keen_project_id,
          masterKey: this.profile.app_metadata.keen_master_key,
          readKey: this.profile.app_metadata.keen_read_key
        });
      }
    }
  },
  methods: {
    fetchProfile () {
      getProfile((profile) => {
        this.profile = profile;
      });
    }
  }
});
