import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBuQyLcAdvZxvRZW8yiBsXfrNQEyEfWTws",
    authDomain: "pantry-tracker-3fb1f.firebaseapp.com",
    projectId: "pantry-tracker-3fb1f",
    storageBucket: "pantry-tracker-3fb1f.appspot.com",
    messagingSenderId: "750649830923",
    appId: "1:750649830923:web:eb8d4512edac123539210e"
  };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };