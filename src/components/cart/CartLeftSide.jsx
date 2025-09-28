import React from 'react'
import cartPro from '../../assets/images/cartProduct.png'
import { RxCross2 } from 'react-icons/rx'
const CartLeftSide = () => {
  return (
    <>
      <section className='w-[725px]'>
        {/* ------------------------ Header ---------------------------- */}
        <div className='text-[#1D3178] text-xl font-josefin font-bold flex items-center'>
          <h2 className='mr-[265px]'>Product</h2>
          <h2 className='mr-[84px]'>Price</h2>
          <h2 className='mr-[122px]'>Quantity</h2>
          <h2>Total</h2>
        </div>
        {/* ------------------------ Cart Products ---------------------------- */}
        <div className='mt-[38px] flex items-center gap-[27px] border-b-1 border-[#E1E1E4] pb-6'>
          {/* ----------------Image  */}
          <div className='relative'>
            <img src={cartPro} alt="Cart Product" />
            {/* ---------- Remove Button  */}
            <div className='absolute -top-2 -right-2 w-4 h-4 bg-black rounded-full text-[13px] cursor-pointer hover:bg-red-600 duration-300 flex items-center justify-center text-white'>
              <RxCross2 />
            </div>
          </div>
          {/* ----------------- cart Other details  */}
          <div className='flex items-center justify-between w-full'>
            <div>
              <h2 className='text-[#000] font-josefin text-base'>Ut diam consequat</h2>
              <p className='text-subText text-sm mt-1.5'>Color brown</p>
              <p className='text-subText text-sm mt-1.5'>Size: XL</p>
            </div>
            {/* ---- Price , qty , total */}
            <h2 className='text-BlueText font-josefin'>$32.00</h2>
            <div className='w-[70px] h-[20px] bg-[#BEBFC2] flex items-center justify-between'>
              <button className='text-white bg-brand flex h-full cursor-pointer items-center justify-center w-[18px]'>-</button>
              <p className='text-BlueText font-josefin'>1</p>
              <button className='text-white bg-brand flex h-full cursor-pointer items-center justify-center w-[18px]'>+</button>
            </div>
            <h2 className='text-BlueText font-josefin'>$32.00</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartLeftSide