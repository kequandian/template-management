export default {
  isLocalStorage() { return !!window.localStorage; },
  set(key, value) {
    value = typeof (value) === "object" ? JSON.stringify(value) : value;
    localStorage.setItem(key, value);
  },
  get(key) {
    var value = localStorage.getItem(key) || '';
    if ((value === "") || (value.indexOf("{") === -1) && (value.indexOf("[") === -1)) {
      return value;
    } else {
      return JSON.parse(value);
    }
  },
  del(key) {
    localStorage.removeItem(key);
  },
}