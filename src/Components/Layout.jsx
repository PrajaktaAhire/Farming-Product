import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar.jsx'
import { Footer } from './Footer.jsx'
import ScrollToTopOnRouteChange from './ScollToTopOnRouteChange.jsx'

export const Layout = () => {
  return (
    <>
        <div className='flex flex-col relative'>
            <div className='sticky top-0 z-[999]'>
                <Navbar/>
            </div>
            <Outlet/>
            <Footer/>
            <ScrollToTopOnRouteChange/>
        </div>
    </>
  )
}
