// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDfzTtRfHwMC5JO16AqpkNd2n81I_7PmTM",
  authDomain: "edutrainee-47438.firebaseapp.com",
  projectId: "edutrainee-47438",
  storageBucket: "edutrainee-47438.appspot.com",
  messagingSenderId: "721866540600",
  appId: "1:721866540600:web:7982f5ef86ada5673c48cd",
  measurementId: "G-DBT8MP3YSC"
};

// ✅ Prevent re-initializing app in development (Next.js hot reload fix)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);

// ✅ Optional: Enable analytics only in client
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log("✅ Firebase Analytics initialized");
    }
  });
}

export { analytics };
