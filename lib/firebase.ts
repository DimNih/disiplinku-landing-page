import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDHdbhD4E0MKKVbF6JUebd86KAruFxqkqo",
  authDomain: "disiplinkuapp.firebaseapp.com",
  databaseURL: "https://disiplinkuapp-default-rtdb.firebaseio.com",
  projectId: "disiplinkuapp",
  storageBucket: "disiplinkuapp.firebasestorage.app",
  messagingSenderId: "224296478511",
  appId: "1:224296478511:web:e0c5dba42ea483059ca3da",
  measurementId: "G-CHEYZZ3LG9"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
