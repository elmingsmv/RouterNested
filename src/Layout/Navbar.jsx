import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav  className='navc d-flex justify-content-center gap-3 p-3 bg-success'>
    <Link className='text-decoration-none text-dark fw-bold' to={"/"} >Home</Link>
    <Link className='text-decoration-none text-dark fw-bold' to={"/about"}>About</Link>
    </nav>
  )
}

export default Navbar
