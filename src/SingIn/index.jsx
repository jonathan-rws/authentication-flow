
import { LockClosedIcon } from '@heroicons/react/solid'
import { Input } from '../components/Input'
import Login from '../assets/login.svg'
import { useForm } from "react-hook-form";
import { useAuth } from '../contexts/AuthContexts';
import { useNavigate } from 'react-router-dom';


export function SingIn() {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const {singIn, user } = useAuth()
  const navigate = useNavigate()
  !!user && navigate('/dashboard')


  async function handleLogin(data) {

   await singIn(data.email, data.password)
  }

  return (
    <>

      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
            
              className="mx-auto h-40"
              src={Login}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Entre com sua conta</h2>


          </div>
          <form onSubmit={handleSubmit(handleLogin)} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <Input
                register = {register}
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email" />
              <Input 
                register = {register}
                name="password"
                type="password"
                autoComplete="password"
                required
                placeholder="Senha" /> 

            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">

              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Criar conta
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}