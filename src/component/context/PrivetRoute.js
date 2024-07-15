import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const PrivetRoute = ({ children }) => {
  const auth = useAuth()
  const location = useLocation()
  if (auth.user === null) {
    return (
      <Navigate
        to="/signIn/registration"
        state={{ from: location.pathname }}
        replace
      />
    )
  }
  return children
}

export default PrivetRoute
