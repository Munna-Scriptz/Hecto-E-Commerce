import React from 'react'
import ProductItem from '../../assets/images/ProductImage.png'
import { Link } from 'react-router'
const SingleCategory = () => {
  return (
    <>
    <div className='w-[270px] flex flex-col items-center relative group duration-[.3s] cursor-pointer'>
        <div className=' absolute bg-BlueText top-[300px] opacity-0 group-hover:top-[220px] group-hover:opacity-100 duration-[.3s]'>
            <Link className='bg-[#08D15F] h-[32px] px-[18px] font-josefin text-white rounded-[2px] flex items-center hover:scale-[1.07] duration-[.3s] justify-center' to={'/'}>View Shop</Link>
        </div>
        <img src={ProductItem} alt="Product Image" />
        <h2 className='text-BlueText text-[20px] font-josefin mt-[25px]'>Mini LCW Chair</h2>
        <p className='text-BlueText text-base font-josefin mt-[13px]'>$56.00</p>
    </div>
    </>
  )
}

export default SingleCategory