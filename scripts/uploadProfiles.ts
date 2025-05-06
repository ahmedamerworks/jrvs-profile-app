import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import * as fs from 'fs';
import * as path from 'path';

// Firebase config
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
const db = getFirestore(app);

async function uploadProfiles() {
  const profilesDir = path.join(__dirname, 'profiles');
  const files = fs.readdirSync(profilesDir);

  for (const file of files) {
    if (file.endsWith('.json')) {
      const filePath = path.join(profilesDir, file);
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const profile = JSON.parse(rawData);

      await addDoc(collection(db, 'trainees'), profile);
      console.log(`Uploaded profile: ${profile.name || file}`);
    }
  }
}

uploadProfiles().then(() => {
  console.log('✅ All profiles uploaded!');
  process.exit(0);
});
