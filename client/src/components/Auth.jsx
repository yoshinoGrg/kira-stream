import {
  signInWithPopup,
  signOut
} from "firebase/auth"

import {
  auth,
  provider
} from "../firebase"

export default function Auth({
  user,
  setUser
}) {

  const login = async () => {

    try {

      const result =
        await signInWithPopup(
          auth,
          provider
        )

      setUser(result.user)

    } catch (error) {

      console.error(error)

    }
  }

  const logout = async () => {

    await signOut(auth)

    setUser(null)
  }

  return (
    <div>

      {user ? (

        <div className="flex items-center gap-4">

          <img
            src={user.photoURL}
            alt=""
            className="w-10 rounded-full"
          />

          <button
            onClick={logout}
            className="bg-red-600 px-4 py-2 rounded text-white"
          >
            Logout
          </button>

        </div>

      ) : (

        <button
          onClick={login}
          className="bg-red-600 px-4 py-2 rounded text-white"
        >
          Sign In
        </button>

      )}

    </div>
  )
}
