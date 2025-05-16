import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles}) => {

  const navLinks = [
    {id: 1, path: '/', title: 'Home'},
    {id: 2, path: '/collection', title: 'Collection'},
    {id: 3, path: '/blog', title: 'Blog'},
    {id: 4, path: 'insovetotal@insove.com', title: 'Contact'},
  ]
  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link) => (
        <NavLink
        key={link.id}
        to={link.path}
        className={({isActive})=> `${isActive ? "px-5 py-2 rounded-full bg-black/80 text-white text-center" : ""} px-2 py-3 rounded-full`}>
          {link.title}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar