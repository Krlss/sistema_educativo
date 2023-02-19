import { Dialog, Transition } from '@headlessui/react'
import ItemSidebar from '../navLink/itemSidebar'
import React, { Fragment, useContext } from 'react'
import Home from '../icons/home'
import ItemsSidebarDashboard from './ItemsSidebarDashboard'
import GeneralContext from '../../contexts/context'

const Asidebar = ({
  open,
  setOpen,
  isDashboard
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  isDashboard: boolean
}) => {
  const { user } = useContext(GeneralContext)
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
                      <div className="h-full px-3 py-4 overflow-y-auto bg-white">
                        <ul className="space-y-2">
                          <ItemSidebar label="Inicio" viewBox="24 24" to="/">
                            <Home />
                          </ItemSidebar>
                        </ul>
                        <div className="h-px my-4 bg-gray-200"></div>
                        {user.progress.length ? (
                          <ul className="flex items-center p-2 font-bold">
                            Asignaturas
                          </ul>
                        ) : null}
                        {user.progress.map((p, index) => (
                          <ul key={index}>
                            <ItemSidebar
                              label={p.name}
                              to={`/asignatura/${p.id}`}
                            />
                          </ul>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full px-3 pt-4 overflow-y-auto bg-white">
                      <ItemsSidebarDashboard />
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
