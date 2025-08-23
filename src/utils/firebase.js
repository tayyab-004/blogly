import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogly-54a66.firebaseapp.com",
  projectId: "blogly-54a66",
  storageBucket: "blogly-54a66.firebasestorage.app",
  messagingSenderId: "785532844646",
  appId: "1:785532844646:web:d79eee2e3b66386f9b4ba7",
};

export const app = initializeApp(firebaseConfig);
