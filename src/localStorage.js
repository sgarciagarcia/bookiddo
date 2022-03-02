export const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
export const setLocalStorage = (key, localStorage) =>
  window.localStorage.setItem(key, JSON.stringify(localStorage));
