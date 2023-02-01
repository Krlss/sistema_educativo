import ItemsSidebarDashboard from './ItemsSidebarDashboard'

const StaticRightSidebar = () => {
  return (
    <div className="fixed lg:block hidden h-full max-w-[16rem] w-full mt-14">
      <div className="h-full px-3 pt-4 overflow-y-auto bg-white shadow">
        <ItemsSidebarDashboard />
      </div>
    </div>
  )
}

export default StaticRightSidebar
