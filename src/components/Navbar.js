import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Navbar = () => {
  return (
    <div  className='layout'>
            

    <Link  to="/home">Home</Link>
    <Link   to="/">Login</Link>          
    <Link  to="/contact">Contact</Link>
    <Outlet/>
   </div>
  )
}

export default Navbar