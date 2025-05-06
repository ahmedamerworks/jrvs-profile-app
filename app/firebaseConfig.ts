import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBS98vipIgYAykE8TNu6OSJ0wa_JVw0vBw",
    authDomain: "jrvs-profile-app.firebaseapp.com",
    projectId: "jrvs-profile-app",
    storageBucket: "jrvs-profile-app.firebasestorage.app",
    messagingSenderId: "911138177031",
    appId: "1:911138177031:web:0d089ecc33fa35d4bdaaa2",
    measurementId: "G-FQR3M0XYHB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Ensure you're exporting as default
export default app;
