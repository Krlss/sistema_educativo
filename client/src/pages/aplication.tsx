import Navbar from '../components/header/navbar'
import { Outlet } from 'react-router-dom'

const Aplication = () => {
  document.body.classList.add('bg-slate-50')
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Aplication
