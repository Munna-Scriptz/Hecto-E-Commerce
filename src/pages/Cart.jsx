import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import CartLeftSide from '../components/cart/CartLeftSide'
import CartRightSide from '../components/cart/CartRightSide'
import axios from 'axios'

const Cart = () => {
  const [product , setProduct] = useState([])

  const filteredId = JSON.parse(localStorage.getItem('productId')).map((item)=>{
    return(
      item
    )
  })
  
  // ---------------Api--------------
    // ------Axios 
    useEffect(() => {
      axios.get(`https://dummyjson.com/products/${filteredId}`)
      .then((res)=>(setProduct(res.data)))
      .catch((err)=>(console.log(err)))
    }, []);

  console.log(filteredId)
  return (
    <>
        <BreadCrumb pageName={'Shopping Cart'} to={'cart'} />
        <section id='Cart-Page' className='mt-[112px]'>
            <div className="container">
                <div id="Cart-Page-Row" className='flex items-start justify-between'>
                    {/* --------------------Left side  -------------------- */}
                    <CartLeftSide />
                    {/* --------------------Right side --------------------  */}
                    <CartRightSide />
                </div>
            </div>
        </section>
    </>
  )
}

export default Cart