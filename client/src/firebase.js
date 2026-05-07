import { initializeApp } from "firebase/app"

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth"

import {
  getFirestore
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA2rpED9OWoR5LKkaUzj7XuOUaMMIEpg6A",
  authDomain: "netflix-clone-7beed.firebaseapp.com",
  projectId: "netflix-clone-7beed",
  storageBucket: "netflix-clone-7beed.firebasestorage.app",
  messagingSenderId: "13954906205",
  appId: "1:13954906205:web:01daeff5ce9c07d29035b4"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const provider =
  new GoogleAuthProvider()

export const db =
  getFirestore(app)
