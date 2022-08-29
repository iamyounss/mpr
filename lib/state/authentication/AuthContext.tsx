import { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';
import { auth } from '../../../config/firebase';
import {
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    onAuthStateChanged,
} from 'firebase/auth';

const AuthContext = createContext(null)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined)
    throw new Error("useAuth doit s'utiliser avec AuthContext.Provider")
  return context
}

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState<User | null>(null)

  const createUser = useCallback((email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }, [])

  const logIn = useCallback((email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }, [])

  const logOut = useCallback(() => {
    return signOut(auth)
  }, [])

  const sendPasswordOnEmail = useCallback((email) => {
    return sendPasswordResetEmail(auth, email)
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => { setAuthUser(user) })

    return unsubscribe
  }, [])

  const value = useMemo(
      () => ({
          authUser,
          logIn,
          createUser,
          logOut,
          sendPasswordOnEmail,
      }),
      [authUser, logIn, createUser, logOut, sendPasswordOnEmail])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}