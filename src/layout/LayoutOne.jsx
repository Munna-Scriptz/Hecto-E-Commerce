import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/common/Navbar'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ResNavbar from '../components/common/ResNavbar'

const LayoutOne = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <ResNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default LayoutOne