import * as React from 'react'
import TextField from './form/TextField.tsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthProvider.js'

const Registration = () => {
  const [data, setData] = React.useState({
    name: '',
    password: '',
    id: '',
  })

  const navigate = useNavigate()
  const auth = useAuth()
  const location = useLocation()
  const from = location.state?.from || '/'

  const handleChange = ({ target }) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    auth.signIn(JSON.stringify(data), () => {
      navigate(from, { replace: true })
    })

    // localStorage.setItem('user', JSON.stringify(data))
    // navigate('/characters')
  }

  const handleRedirect = () => {
    navigate('/signIn')
  }

  return (
    <>
      <div className="register_box">
        <h3>Registration</h3>
        <button onClick={handleRedirect}>SignIn</button>
      </div>
      <div className="register">
        <form className="register_form" onSubmit={handleSubmit}>
          <TextField
            label="Ведите Ваше имя"
            name="name"
            value={data.name}
            type="text"
            onChange={handleChange}
            id={data.name}
          />
          <TextField
            label="Ведите Ваш пароль"
            name="password"
            value={data.password}
            type="text"
            onChange={handleChange}
            id={data.password}
          />
          <button type="submit">Регистрация нового пользователя</button>
        </form>
      </div>
    </>
  )
}

export default Registration
