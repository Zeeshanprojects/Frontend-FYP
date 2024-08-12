import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBik3uW7fcL29764-QqHcMTylHtV1nftiQ",
  authDomain: "fir-authentication-5fade.firebaseapp.com,",
  projectId: "fir-authentication-5fade",
  storageBucket: "fir-authentication-5fade.appspot.com",
  messagingSenderId: "99412828156",
  appId: "1:99412828156:web:6cfd732d0ec214d267dc79"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
