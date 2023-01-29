import Home from '../icons/home'
import ItemSidebar from '../navLink/itemSidebar'

const Asidebar = () => {
  return (
    <aside
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
    </aside>
  )
}

export default Asidebar
