import React from 'react'
import HeaderUser from './header/header'
import FooterUser from './footer/footer'
import { Outlet } from 'react-router'

function UserLayout() {
    return (
        <div>
            <HeaderUser />
            <div className='outlet'>
                <Outlet />
            </div>
            <FooterUser />
        </div>
    )
}

export default UserLayout
