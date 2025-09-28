import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import CartLeftSide from '../components/cart/CartLeftSide'
import CartRightSide from '../components/cart/CartRightSide'

const Cart = () => {
  return (
    <>
        <BreadCrumb pageName={'Shopping Cart'} to={'cart'} />
        <section id='Cart-Page' className='mt-[112px]'>
            <div className="container">
                <div id="Cart-Page-Row" className='flex items-center justify-between'>
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