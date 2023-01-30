import { Dialog, Transition } from '@headlessui/react'
import Home from '../icons/home'
import ItemSidebar from '../navLink/itemSidebar'
import { Fragment } from 'react'
import Curso from '../icons/curso'
import Unidad from '../icons/unidad'
import Estudiantes from '../icons/students'
import Reports from '../icons/report'
import React from 'react'
import { MyNavLink } from '../../pages/aplication'

const Asidebar = ({
  open,
  setOpen,
  isDashboard
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  isDashboard: boolean
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full">
                <Dialog.Panel className="pointer-events-auto w-screen max-w-[18rem]">
                  {!isDashboard ? (
                    <div className="flex h-full flex-col">
                      <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <ul className="space-y-2">
                          <ItemSidebar label="Inicio" viewBox="24 24" to="/">
                            <Home />
                          </ItemSidebar>
                        </ul>
                        <div className="h-px my-4 bg-gray-200 dark:bg-gray-700"></div>
                        <ul className="flex items-center p-2 font-bold">
                          Asignaturas
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full px-3 pt-4 overflow-y-auto bg-white dark:bg-gray-800">
                      <ul className="space-y-2">
                        <MyNavLink text="Cursos" to="cursos">
                          <Curso />
                        </MyNavLink>
                        <MyNavLink text="Pruebas" to="pruebas">
                          <Unidad />
                        </MyNavLink>
                        <MyNavLink text="Estudiantes" to="reportes">
                          <Estudiantes />
                        </MyNavLink>
                        <MyNavLink text="Reportes" to="reportes">
                          <Reports />
                        </MyNavLink>
                      </ul>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Asidebar

/*  <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700 block lg:hidden"
      aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2">
          <ItemSidebar label="Inicio" viewBox="24 24" to="/">
            <Home />
          </ItemSidebar>
        </ul>
        <div className="h-px my-4 bg-gray-200 dark:bg-gray-700"></div>
        <ul className="flex items-center p-2 font-bold">Asignaturas</ul>
      </div>
    </aside> */
