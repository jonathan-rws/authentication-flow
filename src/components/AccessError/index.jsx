import { useNavigate } from 'react-router-dom'




export function AccessError() {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate('/')
  }, 5000)

  return (

    <div >
      <h1>Você não tem acesso. Redirecionando ...</h1>
    </div>
  )
}