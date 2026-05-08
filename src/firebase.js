import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB67k1A-jpX6LoWuDsQTNS-pPK3ymjM2U8",
  authDomain: "cosmic-life-b6f46.firebaseapp.com",
  projectId: "cosmic-life-b6f46",
  storageBucket: "cosmic-life-b6f46.firebasestorage.app",
  messagingSenderId: "258668925112",
  appId: "1:258668925112:web:5cb2eb6919b1af8424a44d",
  measurementId: "G-CJEQ9VLWX5"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()