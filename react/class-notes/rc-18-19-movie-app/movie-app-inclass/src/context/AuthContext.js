import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/ToastNotify"
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContextt = createContext()

const AuthContext = ({ children }) => {

  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    userTracking()
  }, [])



  const navigate = useNavigate()

  const createUser = async (email, password, displayName) => {
    await createUserWithEmailAndPassword(auth, email, password);

    toastSuccess("register is success")
    navigate("/")
    //userTracking den sonra ---kullanıcı profilini güncellemek için kullanılan firebase methodu, login logout da userTracking sayesinde güncelleniyor ama register da isim güncellemesi yok, o da bu şekilde oluyor. alttakini yazmasam (register ile girdiğimde) navbarda displayName i göremem. alttakini yazmasam sadece google ile girersem görürüm.
    await updateProfile(auth.currentUser, {
      displayName: displayName
    });

  }

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);

    toastSuccess("login is success")
    navigate("/")
  }

  const signInGoogle = () => {

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccess("Login with Google Successful")
        navigate("/")
      })
      .catch((error) => {
        toastError("Login failed ")
      });

  }

  const exit = () => {

    signOut(auth);

    toastSuccess("Exit successful");

  }

  const userTracking = () => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;

        setCurrentUser({ email: email, displayName: displayName, photoURL: photoURL });

      } else {
        setCurrentUser(false)
      }
    });
  }
  return (
    <AuthContextt.Provider value={{ createUser, signIn, signInGoogle, exit, currentUser }}>{children}</AuthContextt.Provider>
  )
}

export default AuthContext