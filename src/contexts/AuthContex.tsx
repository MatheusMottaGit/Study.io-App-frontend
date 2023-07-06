import { ReactNode, createContext } from "react";

interface Auth {
  
}

interface Children {
  children: ReactNode
}

interface User {
  sub: string
  name: string
  avatarUrl: string
}

export const AuthContext = createContext({} as Auth)

export const AuthProvider = ({ children }: Children) => {
  return (
    <AuthContext.Provider value={{}} >
      {children}
    </AuthContext.Provider>
  )
}