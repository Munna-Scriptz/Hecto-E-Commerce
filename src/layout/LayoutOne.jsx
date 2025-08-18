import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

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