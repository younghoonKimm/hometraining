function saveAuthToCookie(value) {
  document.cookie = `samsung_auth=${value}`;
}

function saveUserToCookie(value) {
  document.cookie = `samsung_user=${value}`;
}

function saveReservationToCookie(value) {
  document.cookie = `reservation=${value}`;
}

function getAuthFromCookie() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)samsung_auth\s*=\s*([^;]*).*$)|^.*$/, '$1');
}

function getUserFromCookie() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)samsung_user\s*=\s*([^;]*).*$)|^.*$/, '$1');
}

function getReservationFromCookie() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)reservation\s*=\s*([^;]*).*$)|^.*$/, '$1');
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  saveReservationToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  getReservationFromCookie,
  deleteCookie,
};
