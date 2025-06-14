// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmBdg8tE7WZuOiLVZw-gzQv5IPWSNjjQU",
  authDomain: "edutrainee-d2eec.firebaseapp.com",
  projectId: "edutrainee-d2eec",
  storageBucket: "edutrainee-d2eec.appspot.com", // fixed
  messagingSenderId: "653532554303",
  appId: "1:653532554303:web:df0f6f49778c01d8b8048a",
  measurementId: "G-RTDGJ476N8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// ✅ Analytics (only in browser)
let analytics = null;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log("✅ Firebase Analytics initialized");
    } else {
      console.log("⚠️ Firebase Analytics not supported in this environment");
    }
  });
}

export { analytics };
