import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthProvider'

const SignOut = () => {
  const auth = useAuth()

  const navigate = useNavigate()
  // useEffect(() => {
  //   navigate('/signIn')
  // })
  // return localStorage.removeItem('user')
  return auth.signOut(() => {
    navigate('/signIn')
  })
}

export default SignOut
