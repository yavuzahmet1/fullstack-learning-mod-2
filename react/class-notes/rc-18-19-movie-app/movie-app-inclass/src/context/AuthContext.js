import React, { createContext } from 'react'


export const AuthContextt = createContext()

const AuthContext = ({ children }) => {
  return (
    <AuthContextt.Provider>{children}</AuthContextt.Provider>
  )
}

export default AuthContext