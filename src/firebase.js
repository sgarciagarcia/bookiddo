import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBdSLU0ozEPDecW4NBhTtEScGmCntECyP0",
  authDomain: "bookiddo-1e2dc.firebaseapp.com",
  databaseURL: "https://bookiddo-1e2dc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookiddo-1e2dc",
  storageBucket: "bookiddo-1e2dc.appspot.com",
  messagingSenderId: "696715108783",
  appId: "1:696715108783:web:ee13248d1361f2d8144f5a",
  // for the db
  databaseURL: 'https://bookiddo-1e2dc-default-rtdb.europe-west1.firebasedatabase.app/'
};

export const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);