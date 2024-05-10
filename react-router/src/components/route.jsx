import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './navbar/nav'
import Footer from './footer/footer'

function Route() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    
    </>
  )
}

export default Route