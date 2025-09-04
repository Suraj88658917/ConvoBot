// firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase config
const firebaseConfig = {

 apiKey: "AIzaSyBl2gFi6_v-qbuRtmM8Nz1m8TE3YyN025A",

 authDomain: "aichatapp-f3157.firebaseapp.com",

 projectId: "aichatapp-f3157",

 storageBucket: "aichatapp-f3157.firebasestorage.app",

 messagingSenderId: "522140066784",

 appId: "1:522140066784:web:98b908b5f7c8f56b514185",

 measurementId: "G-2J5XWK6M33"

};

// Ensure app is initialized only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Always initialize Auth with persistence ONCE
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Firestore setup
const db = getFirestore(app);

export { app, auth, db };
