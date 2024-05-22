import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoEdge } from "react-icons/io5";


function HeaderAdmin() {
  return (
    <div>
        <div className='adminhead'>
        <div className='logo'>
            <Link className='link' to="/"><IoLogoEdge /></Link>
            </div>
        <div >
            <Link className='link' to="/">User Interface</Link>
        </div>
        </div>
    </div>
  )
}

export default HeaderAdmin
