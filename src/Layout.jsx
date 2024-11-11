import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NavLinks from './components/NavLinks'
const Layout = () => {
  return (
    <div >
      <Navbar />
      <NavLinks />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout