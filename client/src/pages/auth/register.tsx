import Input from '../../components/inputs/inputWithLabel'
import FullScreenSlider from '../../components/sliders/h-screen'
import { NavLink } from 'react-router-dom'
import { ImagesSliders } from '../../constants/images'
import Authbutton from '../../components/buttons/auth'

import { useFormik } from 'formik'
import { registerValidationSchema } from '../../schemas'
import { useRegister } from '../../service/user/custom-hook'

const Register = () => {
  const { registerHandler } = useRegister()
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: ''
    },
    validationSchema: registerValidationSchema,
    onSubmit: values => {
      registerHandler({ ...values })
    }
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <section className="flex flex-col justify-center mx-auto md:px-12 px-10 max-w-[40rem]">
        <div className="mb-6">
          <h1 className="text-5xl font-semibold mb-1">Regístrate</h1>
          <span>
            Crear una cuenta es muy fácil, solo debes ingresar tus datos y
            listo.
          </span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
            <Input
              name="firstname"
              label="Nombres"
              placeholder="Ingresa tus nombres"
              type="text"
              containerStyles="lg:my-0 my-1"
              autoFocus
              onChange={formik.handleChange}
              error={formik.errors.firstname}
            />
            <Input
              name="lastname"
              label="Apellidos"
              placeholder="Ingresa tus apellidos"
              type="text"
              containerStyles="lg:my-0 my-1"
              onChange={formik.handleChange}
              error={formik.errors.lastname}
            />
          </div>

          <Input
            name="username"
            label="Usuario"
            placeholder="Ingresa un usuario"
            type="text"
            onChange={formik.handleChange}
            error={formik.errors.username}
          />
          <Input
            name="email"
            label="Correo electrónico"
            placeholder="ejemplo@ejemplo.com"
            type="email"
            onChange={formik.handleChange}
            error={formik.errors.email}
          />

          <Input
            name="password"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            type="password"
            onChange={formik.handleChange}
            error={formik.errors.password}
          />

          <Authbutton label="Registrarse" type="submit" />

          <div className="flex justify-center items-center mt-4">
            <span className="text-gray-500">¿Ya tienes una cuenta?</span>
            <NavLink
              to="/iniciar-sesion"
              className="text-yellow-page font-medium ml-2">
              Iniciar sesión
            </NavLink>
          </div>
        </form>
      </section>
      <FullScreenSlider images={ImagesSliders} />
    </div>
  )
}

export default Register
