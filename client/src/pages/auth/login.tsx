import Input from '../../components/inputs/inputWithLabel'
import RemenberMe from '../../components/inputs/rememberMe'
import FullScreenSlider from '../../components/sliders/h-screen'
import { NavLink, Navigate } from 'react-router-dom'
import { ImagesSliders } from '../../constants/images'

import { useFormik } from 'formik'
import { loginValidationSchema } from '../../schemas'

import { useLogin } from '../../service/user/custom-hook'
import Authbutton from '../../components/buttons/auth'

const Login = () => {
  const { loginHandler, token, error } = useLogin()

  if (token) {
    return <Navigate to="/" />
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      rememberMe: true
    },
    validationSchema: loginValidationSchema,
    onSubmit: values => {
      loginHandler({ ...values })
    }
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <section className="flex flex-col justify-center mx-auto px-10 max-w-[40rem]">
        <div className="mb-3">
          <h1 className="text-5xl font-semibold mb-1">Inicio de sesión</h1>
          <span>
            Bienvenido a Mapple, por favor digita tus credenciales para iniciar
            sesión en la plataforma.
          </span>
        </div>
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2"
            role="alert">
            <strong className="font-bold mr-2">Error!</strong>
            <span className="block sm:inline break-words">{error.message}</span>
          </div>
        )}
        <form onSubmit={formik.handleSubmit}>
          <Input
            name="username"
            label="Usuario o correo electrónico"
            placeholder="Ingresa tu usuario o correo electrónico"
            type="text"
            autoFocus
            onChange={formik.handleChange}
            error={formik.errors.username}
          />

          <Input
            name="password"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            type="password"
            onChange={formik.handleChange}
            error={formik.errors.password}
          />

          <div className="flex justify-between lg:items-center mt-4 xs:flex-row flex-col">
            <RemenberMe
              name="rememberMe"
              onChange={formik.handleChange}
              defaultChecked={true}
            />
            <NavLink to="#recuperar-contraseña" className="text-blue-500">
              ¿Olvidaste tu contraseña?
            </NavLink>
          </div>

          <Authbutton label="Iniciar sesión" type="submit" />

          <div className="flex justify-center items-center mt-4">
            <span className="text-gray-500">¿No tienes una cuenta?</span>
            <NavLink to="/registrarse" className="font-medium ml-2">
              Regístrate
            </NavLink>
          </div>
        </form>
      </section>
      <FullScreenSlider images={ImagesSliders} />
    </div>
  )
}

export default Login
