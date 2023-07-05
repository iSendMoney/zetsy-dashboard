import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const ENV = import.meta.env;

const firebaseConfig = {
  apiKey: ENV.VITE_APP_FIREBASE_API_KEY,
  authDomain: ENV.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: ENV.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: ENV.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: ENV.VITE_APP_FIREBASE_APP_ID,
  measurementId: ENV.VITE_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
