import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDK-CPugpUJoJrMsJWOoAaT6GnvNlfJbdE",
	authDomain: "snap-dragon-853e7.firebaseapp.com",
	projectId: "snap-dragon-853e7",
	storageBucket: "snap-dragon-853e7.appspot.com",
	messagingSenderId: "122113729849",
	appId: "1:122113729849:web:848d2cba4814fff621f4e8",
	measurementId: "G-7X3ZK2BXXY"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
