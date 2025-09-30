import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import CartLeftSide from '../components/cart/CartLeftSide'
import CartRightSide from '../components/cart/CartRightSide'
import axios from 'axios'
import { useSelector } from 'react-redux'
import noProImg from '../../src/assets/images/noProFound.png'
import { Link } from 'react-router'
import Loading from '../components/common/Loading'
const Cart = () => {
  const [loader , setLoader] = useState(false)
  const [product , setProduct] = useState([])
  const Ids = useSelector(state => state.MyRedux.value)

  const filteredPro = product.filter((item)=>{
    return Ids.includes(item.id)
  })
  console.log(filteredPro)
  // ---------------Api--------------
    useEffect(() => {
      axios.get(`https://dummyjson.com/products/`)
      .then((res)=>(setProduct(res.data.products) , setLoader(true)))
      .catch((err)=>(console.log(err)))
    }, []);

  return (
    <>
        <BreadCrumb pageName={'Shopping Cart'} to={'cart'} />
        <Loading turnOff={loader}/>
        <section id='Cart-Page' className='mt-[112px]'>
            <div className="container">
              {
                filteredPro.length == 0?
                <div className='flex flex-col items-center justify-center'>
                  <img className='w-[600px]' src={noProImg} alt="No Product Added yet..." />
                  <h2 className='text-BlueText text-[32px] font-josefin mt-4'>No products added yet...</h2>
                  <Link className='bg-brand text-white inline-block py-[12px] px-[32px] rounded-[4px] font-josefin hover:bg-subText duration-300' to={'/shop'}>Back to Shop</Link>
                </div>
                :
                <div id="Cart-Page-Row" className='flex items-start justify-between'>
                    {/* --------------------Left side  -------------------- */}
                    <CartLeftSide products={filteredPro}/>
                    {/* --------------------Right side --------------------  */}
                    <CartRightSide products={filteredPro} />
                </div>
              }
            </div>
        </section>
    </>
  )
}

export default Cart