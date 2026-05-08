import { auth, provider } from "../firebase"
import {
  signInWithPopup,
  signOut
} from "firebase/auth"

import { useAuth } from "../context/AuthContext"

function Login() {

  const { user } = useAuth()

  const handleLogin = async () => {

    try {

      await signInWithPopup(auth, provider)

      alert("Logged In 🌌")

    } catch (error) {

      console.error(error)

    }
  }

  const handleLogout = async () => {

    try {

      await signOut(auth)

    } catch (error) {

      console.error(error)

    }
  }

  if (user) {

    return (

      <div className="flex items-center gap-3">

        <img
          src={user.photoURL}
          alt="profile"
          className="w-10 h-10 rounded-full border border-white/50"
        />

        <button
          onClick={handleLogout}
          className="text-sm border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition"
        >
          Logout
        </button>

      </div>

    )
  }

  return (

    <button
      onClick={handleLogin}
      className="text-sm border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition"
    >
      Sign In
    </button>

  )
}

export default Login