import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch } from 'react-redux';
import { CartAllIds } from '../../CartSlice';
import { Bounce, toast } from 'react-toastify';

const CartLeftSide = ({products}) => {
  // ----------------Delete products 
  const dispatch = useDispatch()
  let arrId = JSON.parse(localStorage.getItem("productId")) || [];

  const handleDlt = (e)=>{
   const removedList = arrId.filter(item => item !== e)
   localStorage.setItem('productId', JSON.stringify(removedList))
   dispatch(CartAllIds(removedList))
   
   toast.success('Product Deleted', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
  }
  return (
    <>
      <section className='lg:w-[725px] w-full'>
        {/* ------------------------ Header ---------------------------- */}
        <div className='text-[#1D3178] text-xl font-josefin font-bold items-center lg:flex hidden'>
          <h2 className='mr-[320px]'>Product</h2>
          <h2 className='mr-[54px]'>Price</h2>
          <h2 className='ml-[25px]'>Quantity</h2>
          <h2 className='ml-[70px]'>Total</h2>
        </div>
        {/* ------------------------ Cart Products ---------------------------- */}
        {
          products.map((item , i)=>(
            <div key={i} className='mt-[38px] flex items-center gap-[27px] border-b-1 border-[#E1E1E4] pb-6'>
              {/* ----------------Image  */}
              <div className='relative'>
                <img src={item.thumbnail} className='w-[140px]' alt="Cart Product" />
                {/* ---------- Remove Button  */}
                <div onClick={()=>handleDlt(item.id)} className='absolute -top-2 -right-2 w-4 h-4 bg-black rounded-full text-[13px] cursor-pointer hover:bg-red-600 duration-300 flex items-center justify-center text-white'>
                  <RxCross2 />
                </div>
              </div>
              {/* ----------------- cart Other details  */}
              <div className='flex lg:flex-row flex-col lg:items-center gap-y-4 justify-between w-full'>
                <div>
                  <h2 className='text-[#000] font-josefin text-base text-ellipsis overflow-hidden whitespace-nowrap w-[180px]'>{item.title}</h2>
                  <p className='text-subText text-sm mt-1.5'>Color brown</p>
                  <p className='text-subText text-sm mt-1.5'>Size: XL</p>
                </div>
                {/* ---- Price , qty , total */}
                <h2 className='text-BlueText font-josefin lg:block hidden'>${item.price}</h2>
                <div className='w-[70px] h-[20px] bg-[#BEBFC2] flex items-center justify-between'>
                  <button className='text-white bg-brand flex h-full cursor-pointer items-center justify-center w-[18px]'>-</button>
                  <p className='text-BlueText font-josefin'>1</p>
                  <button className='text-white bg-brand flex h-full cursor-pointer items-center justify-center w-[18px]'>+</button>
                </div>
                <h2 className='text-BlueText font-josefin'>${item.price}</h2>
              </div>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default CartLeftSide