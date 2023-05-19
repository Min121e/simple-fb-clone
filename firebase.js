// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/storage'

import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, uploadString } from 'firebase/storage';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9zU-QtXz6p08IRAsueEEviec-zn4a8fQ",
    authDomain: "facebook-clone-6fefa.firebaseapp.com",
    projectId: "facebook-clone-6fefa",
    storageBucket: "facebook-clone-6fefa.appspot.com",
    messagingSenderId: "949679764289",
    appId: "1:949679764289:web:6d89a621392d89da3527c0",
    measurementId: "G-S9F0RPHE0W"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export { app, db, storage, collection, addDoc, serverTimestamp, ref, getDownloadURL, uploadString };
