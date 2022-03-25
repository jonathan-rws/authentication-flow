import { createContext, useContext, useState, useEffect, } from "react";
import { authenticateUser, deleteUserLocalStorage, getUserLocalStorage, setUserLocalStorage } from "./utils";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const user = getUserLocalStorage()
    setUser(user)
    setIsLoading(false)
  }, [])

  async function singIn(email, passworld) {
    const data = await authenticateUser(email, passworld)
    console.log(data)
    setUser(data)
    setUserLocalStorage(data)
  }
  async function singUp(name, email, password) {
    const data = await CreateUser(name, email, passworld)
    console.log(data)
    setUser(data)
    setUserLocalStorage(data)
  }
  async function singOut() {
    setUser(null)
    deleteUserLocalStorage()
  }
  return (
    <AuthContext.Provider value={{ authenticate: !!user, user, singIn, singUp, singOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => {
  const context = useContext(AuthContext)
  return (context)

}