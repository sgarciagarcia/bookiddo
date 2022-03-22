import { signOut } from "@firebase/auth";

export const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
export const setLocalStorage = (key, localStorage) =>
  window.localStorage.setItem(key, JSON.stringify(localStorage));

export const removeLocalStorage = (key) => window.localStorage.removeItem(key);


//importar signOut
//poner boton que haga {handleLogOut}