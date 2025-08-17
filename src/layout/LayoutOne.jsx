import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const LayoutOne = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default LayoutOne