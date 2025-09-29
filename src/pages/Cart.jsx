import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import CartLeftSide from '../components/cart/CartLeftSide'
import CartRightSide from '../components/cart/CartRightSide'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Cart = () => {
  const [product , setProduct] = useState([])
  const Ids = useSelector(state => state.MyRedux.value)

  const filteredPro = product.filter((item)=>{
    return Ids.includes(item.id)
  })
  // ---------------Api--------------
    useEffect(() => {
      axios.get(`https://dummyjson.com/products/`)
      .then((res)=>(setProduct(res.data.products)))
      .catch((err)=>(console.log(err)))
    }, []);

  return (
    <>
        <BreadCrumb pageName={'Shopping Cart'} to={'cart'} />
        <section id='Cart-Page' className='mt-[112px]'>
            <div className="container">
                <div id="Cart-Page-Row" className='flex items-start justify-between'>
                    {/* --------------------Left side  -------------------- */}
                    <CartLeftSide products={filteredPro}/>
                    {/* --------------------Right side --------------------  */}
                    <CartRightSide products={filteredPro} />
                </div>
            </div>
        </section>
    </>
  )
}

export default Cart