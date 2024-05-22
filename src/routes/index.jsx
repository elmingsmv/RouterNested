import { createBrowserRouter } from "react-router-dom"
import AdminLayout from "../layout/admin/adminLayout"
import UserLayout from "../layout/user/userLayout"
import Home from  "../pages/user/home"
import Blog from "../pages/user/blog"
import Contact from "../pages/user/contact"
import Categories from "../pages/admin/categories"
import Dashboard from "../pages/admin/dashboard"
import NotFound from "../components/NotFound"

export const routers=createBrowserRouter([
    {
        path:"/",
        element:<UserLayout/>,
        children:[
            {
                element:<Home/>,
                index:true
                
            },
            {
                element:<Blog/>,
                path:"blog"
            },
            {
                element:<Contact/>,
                path:"contact"
            }
        ]
    },
    {
        path:"/admin",
        element:<AdminLayout/>,
        children:[
            {
                element:<Categories/>,
                // path:"category",
                index:true
            },
            {
                element:<Dashboard/>,
                path:"dashboard"
            }
        ]
        },
        {
            path:"*",
            element:<NotFound/>
        }
])

