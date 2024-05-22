import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoEdge } from "react-icons/io5";

function HeaderUser() {
    return (
        <div className='main-head'>
            <div className='logo'>
            <Link className='link' to="/"><IoLogoEdge /></Link>
            </div>
            <div>
                <nav className='navhead'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/blog">Blog</Link>
                    <Link className='link' to="/contact">Contact</Link>
                </nav>
            </div>
            <div>
            <Link className='link' to="/admin">Admin Panel</Link>
            </div>
        </div>

    )
}

export default HeaderUser
