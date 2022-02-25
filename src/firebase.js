import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBNx_Ehjn52LhaADXacU2wf-7pu3lRdBr0",
  authDomain: "todo-6e822.firebaseapp.com",
  projectId: "todo-6e822",
  storageBucket: "todo-6e822.appspot.com",
  messagingSenderId: "346832021646",
  appId: "1:346832021646:web:372d44d2cf61fb74b5c1df",
  // for the db
  databaseURL: 'https://bookiddo-1e2dc-default-rtdb.europe-west1.firebasedatabase.app/'
};

export const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);