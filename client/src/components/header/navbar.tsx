import { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import MenuNavigation from './menu-navigation'
import DefaultAvatar from '../../assets/default_avatar.png'
import Menu from '../navLink/mobileMenuNormal'

import GeneralContext from '../../contexts/context'
import ItemSidebar from '../navLink/itemSidebar'
import Home from '../icons/home'
import Asidebar from './asidebar'

const Navbar = () => {
  const { user, logout, config } = useContext(GeneralContext)
  const location = useLocation()

  const isDashboard = location.pathname.includes('dashboard')

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
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
                <span className="self-center text-xl font-bold sm:text-2xl whitespace-nowrap dark:text-white text-red-logo-stronger">
                  Mapple
                </span>
              </NavLink>
            </div>
            {!isDashboard ? <MenuNavigation /> : null}
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={DefaultAvatar}
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user">
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none">
                      {user.name} {user.lastName}
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none">
                      {user.email}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <Menu label="Dashboard" to="/dashboard" />
                    <Menu label="Cerrar sesión" onClick={() => logout()} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {!isDashboard ? <Asidebar /> : null}
    </>
  )
}

export default Navbar
