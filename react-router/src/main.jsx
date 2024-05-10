import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Route from './components/route.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/user.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Route />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/> 
      },
      {
        path:"/github",
        element:<Github/> 
      },
      {
        path:"/user/:userID",
        element:<User/> 
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
