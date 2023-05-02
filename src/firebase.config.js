// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_tLoCzKq_wHskQw7yeJlmsXNafIFiudA',
  authDomain: 'house-marketplace-app-5646f.firebaseapp.com',
  projectId: 'house-marketplace-app-5646f',
  storageBucket: 'house-marketplace-app-5646f.appspot.com',
  messagingSenderId: '915467992046',
  appId: '1:915467992046:web:ba81be72274462af6a2cff',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
