import { useAuth } from "../contexts/AuthContexts"
import { Navigate } from "react-router-dom"


export function Private({ children }) {
  const { user, isLoading, } = useAuth()


  if(isLoading){
   return(
    <h1>Carregando . . . </h1>
   )
  }
  if (!user) {
    return <Navigate to={('/')}/>
  }
  return children

}