import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthProvider'

const SignOut = () => {
  const auth = useAuth()

  const navigate = useNavigate()
  useEffect(() => {
    navigate('/signIn/registration')
  }, [auth])
  return auth.signOut(() => {})
}

export default SignOut
