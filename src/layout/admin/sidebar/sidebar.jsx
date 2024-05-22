import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <nav >
            <Link className='block' to="/admin/" >Categoriya</Link>
            <Link className='block' to="/admin/dashboard" >Dashboard</Link>
        </nav>
    )
}

export default SideBar
