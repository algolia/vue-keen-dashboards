export function login() {
  window.lock.show();
}

export function logout() {
  localStorage.removeItem('id_token');
  document.location.reload();
}

export function isAuthenticated() {
  var idToken = localStorage.getItem('id_token');
  return !!idToken;
}

export function getProfile(cb) {
  var idToken = localStorage.getItem('id_token');
  window.lock.getProfile(idToken, function (error, profile) {
    if (error) {
      logout();
      document.location.href = '/';
    } else {
      cb(profile);
    }
  });
}

export function storeLogin(authResult) {
  localStorage.setItem('id_token', authResult.idToken);
}
