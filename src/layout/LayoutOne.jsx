import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/common/Navbar'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const LayoutOne = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default LayoutOne