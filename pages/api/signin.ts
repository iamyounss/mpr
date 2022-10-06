// We don't actually do any validation here because
// that's not the point of this demo.
export default (req, res) => {
    res.setHeader(
      'Set-Cookie',
      'session=1; Max-Age=86400; SameSite=Strict; HttpOnly; Path=/'
    );
    res.status(200).end();

  };

import { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';
import { auth } from '../../lib/config/firebase';
import {
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    onAuthStateChanged,
} from 'firebase/auth';


/**
 * 
 * deprecated 
 * pass to next version of authentication which is verifying with api/login blabla
 */
// export default function AuthContextProvider({ children }) {
//   const [authUser, setAuthUser] = useState<User | null>(null)

//   const createUser = useCallback((email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password)
//   }, [auth])

//   const logIn = useCallback((email, password) => {
//     return signInWithEmailAndPassword(auth, email, password)
//   }, [auth])

//   const logOut = useCallback(() => {
//     return signOut(auth)
//   }, [auth])

//   const sendPasswordOnEmail = useCallback((email) => {
//     return sendPasswordResetEmail(auth, email)
//   }, [auth])

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, user => { setAuthUser(user) })

//     return unsubscribe
//   }, [])

//   const value = useMemo(
//       () => ({
//           authUser,
//           logIn,
//           createUser,
//           logOut,
//           sendPasswordOnEmail,
//       }),
//       [authUser, logIn, createUser, logOut, sendPasswordOnEmail])

  
// }