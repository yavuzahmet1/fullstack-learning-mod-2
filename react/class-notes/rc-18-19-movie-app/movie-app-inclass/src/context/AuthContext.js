import React, { createContext } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastSuccess } from "../helpers/ToastNotify"
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

  return (
    <AuthContextt.Provider value={{ createUser, signIn }}>{children}</AuthContextt.Provider>
  )
}

export default AuthContext