import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDOrpuaFwODFsuIvb4KPnGPiGjkr0tVXzY',
  authDomain: 'eleman-tunc-bilek.firebaseapp.com',
  databaseURL: 'https://eleman-tunc-bilek-default-rtdb.firebaseio.com',
  projectId: 'eleman-tunc-bilek',
  storageBucket: 'eleman-tunc-bilek.appspot.com',
  messagingSenderId: '558370953974',
  appId: '1:558370953974:web:a92052ccce3d3d59322ad7',
  measurementId: 'G-V42CF9PF0T',
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
