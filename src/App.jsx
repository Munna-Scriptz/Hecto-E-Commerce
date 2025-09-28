import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Shop from './pages/Shop'
import Details from './pages/Details'
import Blog from './pages/Blog'

const App = () => {

  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/details/:productID' element={<Details/>}></Route>
      </Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={MyRoute}></RouterProvider>
    </>
  )
}

export default App