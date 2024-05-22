import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from './layout/user/userLayout'
import AdminLayout from './layout/admin/adminLayout'
import Blog from './pages/user/blog'
import Contact from './pages/user/contact'
import Home from './pages/user/home'
import Categories from './pages/admin/categories'
import Dashboard from './pages/admin/dashboard'
import NotFound from './components/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='category' element={<Categories />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App
