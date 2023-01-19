import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_-zUmwTM-piftkM9z-mDifRYnMU4zWqU",
    authDomain: "to-do-f42d3.firebaseapp.com",
    projectId: "to-do-f42d3",
    storageBucket: "to-do-f42d3.appspot.com",
    messagingSenderId: "258342798040",
    appId: "1:258342798040:web:b321733e0deb374a7f4dad"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };