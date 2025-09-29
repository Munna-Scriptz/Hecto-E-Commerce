import React, { useEffect } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Shop from './pages/Shop'
import Details from './pages/Details'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { CartAllIds } from './CartSlice'
import Complete from './pages/Complete'

const App = () => {
  // ------------Auto Cart Data loads 
  const dispatch = useDispatch()
  useEffect(() => {
      const ids = JSON.parse(localStorage.getItem('productId')) || [];
      dispatch(CartAllIds(ids));
    }, [dispatch]);

  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/complete' element={<Complete/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/details/:productID' element={<Details/>}></Route>
      </Route>
    </Route>
  ))

  return (
    <>
      <ToastContainer />
      <RouterProvider router={MyRoute}></RouterProvider>
    </>
  )
}

export default App