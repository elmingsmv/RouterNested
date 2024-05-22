import React from 'react'
import HeaderAdmin from './header/header'
import FooterAdmin from './footer/footer'
import SideBar from './sidebar/sidebar'
import { Outlet } from 'react-router'

function AdminLayout() {
  return (
    <div>
      <HeaderAdmin/>
      <div className='mainadmin'>
        <div className='sidebar'>
      <SideBar/>

        </div>
        <div>
      <Outlet/>

        </div>

      </div>
      <FooterAdmin/>
    </div>
  )
}

export default AdminLayout
