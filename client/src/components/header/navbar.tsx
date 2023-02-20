import { useContext, useState, forwardRef, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import MenuNavigation from './menu-navigation'
import DefaultAvatar from '../../assets/default_avatar.png'
import MyMenu from '../navLink/mobileMenuNormal'

import GeneralContext from '../../contexts/context'
import Sidebar from '../sidebar/sidebar'
import { Menu } from '@headlessui/react'

const Navbar = () => {
  const { user, logout } = useContext(GeneralContext)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isDashboard = location.pathname.includes('dashboard')

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <NavLink to="/" className="flex ml-2 md:mr-24">
                <img src={Logo} className="h-8 mr-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-bold sm:text-2xl whitespace-nowrap text-red-logo-stronger">
                  Mapple
                </span>
              </NavLink>
            </div>
            {!isDashboard && user.progress.length ? <MenuNavigation /> : null}
            <User user={user} logout={logout} />
          </div>
        </div>
      </nav>
      <Sidebar isDashboard={isDashboard} open={isOpen} setOpen={setIsOpen} />
    </>
  )
}

export default Navbar

interface UserProps {
  user: {
    name: string
    lastName: string
    email: string
  }
  logout: () => void
}

const User = forwardRef<HTMLButtonElement, UserProps>(
  ({ user, logout }, ref) => {
    const { email, lastName, name } = user

    return (
      <Menu>
        <Menu.Button
          ref={ref}
          className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300">
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src={DefaultAvatar}
            alt="user photo"
          />
        </Menu.Button>
        <Menu.Items className="absolute z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow lg:top-14 top-[3.3rem] right-5">
          <Menu.Items className="px-4 py-3">
            <Menu.Item disabled>
              <p className="text-sm text-gray-900" role="none">
                {name} {lastName}
              </p>
            </Menu.Item>
            <Menu.Item disabled>
              <p
                className="text-sm font-medium text-gray-900 truncate"
                role="none">
                {email}
              </p>
            </Menu.Item>
          </Menu.Items>
          <Menu.Items className="py-1">
            <Menu.Item>
              <MyMenu label="Dashboard" to="/dashboard/cursos" />
            </Menu.Item>
            <Menu.Item>
              <MyMenu label="Cerrar sesión" onClick={() => logout()} />
            </Menu.Item>
          </Menu.Items>
        </Menu.Items>
      </Menu>
    )
  }
)
