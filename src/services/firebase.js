import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB67k1A-jpX6LoWuDsQTNS-pPK3ymjM2U8",
  authDomain: "cosmic-life-b6f46.firebaseapp.com",
  projectId: "cosmic-life-b6f46",
  storageBucket: "cosmic-life-b6f46.firebasestorage.app",
  messagingSenderId: "258668925112",
  appId: "1:258668925112:web:5cb2eb6919b1af8424a44d"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export default app