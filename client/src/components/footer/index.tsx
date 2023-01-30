import Icon from '../../components/icons'
import PhoneIcon from '../../components/icons/phone'
import UserIcon from '../../components/icons/user'
import EmailIcon from '../../components/icons/email'
import Logo from '../../assets/logo.png'
import { useLocation } from 'react-router-dom'
const Footer = () => {
  const location = useLocation()
  const isDashboard = location.pathname.includes('dashboard')

  return (
    <footer
      className={`bg-yellow-page text-black mt-10 ${
        isDashboard ? 'lg:ml-40' : ''
      }`}>
      <div className="flex justify-center flex-col md:flex-row md:justify-between items-center gap-3 container max-w-[1366px] mx-auto p-5">
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="flex gap-2 items-center">
            <img src={Logo} alt="Logo" className="h-14" />
            <h1 className="text-2xl font-bold text-red-logo-stronger">
              Mapple
            </h1>
          </div>
          <p className="text-sm font-medium text-justify">
            Mapple es una aplicación web que te ayudará a aprender matemáticas,
            computación e inglés de una manera divertida y fácil.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold text-white">Autores</h1>
          <ul className="text-sm flex flex-col items-start gap-3">
            <li className="flex flex-col items-start">
              <span className="flex gap-2">
                <Icon width={15} viewBox="26 26" height={15}>
                  <UserIcon />
                </Icon>
                Marcillo Velez Johnny Josè
              </span>
              <span className="flex gap-2">
                <Icon width={15} viewBox="32 32" height={15}>
                  <EmailIcon />
                </Icon>
                jmarcillo2384@utm.edu.ec
              </span>
              <span className="flex gap-2">
                <Icon width={15} viewBox="24 24" height={15}>
                  <PhoneIcon />
                </Icon>
                099180708
              </span>
            </li>
            <li className="flex flex-col items-start">
              <span className="flex gap-2">
                <Icon width={15} viewBox="26 26" height={15}>
                  <UserIcon />
                </Icon>
                Chilán Ávila Ninse Jovina
              </span>
              <span className="flex gap-2">
                <Icon width={15} viewBox="32 32" height={15}>
                  <EmailIcon />
                </Icon>
                nchilan7406@utm.edu
              </span>
              <span className="flex gap-2">
                <Icon width={15} viewBox="24 24" height={15}>
                  <PhoneIcon />
                </Icon>
                0961728562
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
