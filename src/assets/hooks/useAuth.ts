import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContex"

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}