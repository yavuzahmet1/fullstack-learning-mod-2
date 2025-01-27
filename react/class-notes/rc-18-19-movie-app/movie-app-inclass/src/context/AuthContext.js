import React, { createContext } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/ToastNotify"
import { useNavigate } from 'react-router-dom';

export const AuthContextt = createContext()

const AuthContext = ({ children }) => {

  const navigate = useNavigate()

  const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);

    toastSuccess("register is success")
    navigate("/")

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

  return (
    <AuthContextt.Provider value={{ createUser, signIn, signInGoogle }}>{children}</AuthContextt.Provider>
  )
}

export default AuthContext