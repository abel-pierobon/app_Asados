import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
getApps
const firebaseConfig = {
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID
    apiKey: "AIzaSyAOkMl765ILeEv4iI3K6X2R0IoDWpF5R8w",
    authDomain: "appasados-d7bd8.firebaseapp.com",
    projectId: "appasados-d7bd8",
    storageBucket: "appasados-d7bd8.appspot.com",
    messagingSenderId: "261009731186",
    appId: "1:261009731186:web:c6a720348dd2ea7b3f5ceb",
};

// Initialize Firebase
if (!getApps().length) {
    const app = initializeApp(firebaseConfig);
};
export const db = getFirestore();
