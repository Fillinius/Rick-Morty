import * as React from 'react'
import TextField from './form/TextField.tsx'
import '../../src/index.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthProvider.js'

interface userLocalStorageProp {
  [key: string]: string | null
}
const INITIALSTATELOGIN = {
  name: '',
  password: '',
  id: '',
}
const KEYUSER = 'user'

const SignIn = () => {
  const [data, setData] = React.useState(INITIALSTATELOGIN)
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

    const userLocalStorage: userLocalStorageProp | null = JSON.parse(
      localStorage.getItem(KEYUSER) || 'null'
    )

    if (
      userLocalStorage !== null &&
      userLocalStorage.name === data.name &&
      userLocalStorage.password === data.password
    ) {
      navigate('/characters')
    } else {
      navigate('/signIn')
    }
  }

  const handleRedirect = () => {
    navigate('/signIn/registration')
  }

  return (
    <>
      <div className="register_box">
        <div>
          <h3>SignIn</h3>
          {auth.user === null ? (
            <div>
              <p>
                Пользователь не выполнил вход в систему или не
                зарегистрирован.Перейдите по ссылке для регистрации или введите
                свои пользовательские данные
              </p>
              <button onClick={handleRedirect}>Registration</button>
            </div>
          ) : (
            <p>
              Пользователь "{JSON.parse(auth.user).name}" зарегистрирован в
              системе
            </p>
          )}
        </div>
      </div>
      <div className="register">
        <form className="register_form" onSubmit={handleSubmit}>
          <TextField
            label="Введите Ваше имя "
            name="name"
            value={data.name}
            type="text"
            onChange={handleChange}
            id={data.name}
          />
          <TextField
            label="Введите Ваш пароль "
            name="password"
            value={data.password}
            type="password"
            onChange={handleChange}
            id={data.password}
          />
          <button type="submit">Вход в систему</button>
        </form>
      </div>
    </>
  )
}

export default SignIn
