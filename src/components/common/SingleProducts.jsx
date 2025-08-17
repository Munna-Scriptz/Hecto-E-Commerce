import React from 'react'
import ProductImage from '../../assets/images/ProductImage.png'
import { FaStar } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";

const SingleProducts = () => {
  return (
    <>
    <div className='w-[270px]'>
        {/* ---------Product Image------- */}
        <div className='w-full h-[236px] relative'>
            <div className='flex items-center gap-3 p-[11px] absolute top-[11px] left-[11px]'>
                <div className='w-[35px] h-[35px] bg-[#EEEFFB] rounded-full flex items-center justify-center text-[19px] cursor-pointer text-[#2F1AC4]'><GrCart /></div>
                <div className='w-[35px] h-[35px] bg-[#eef8fb] rounded-full flex items-center justify-center text-[19px] cursor-pointer text-[#1389FF]'><FaRegHeart /></div>
            </div>
            <img src={ProductImage} alt="Product Image" />
        </div>
        {/* ---------Product Text------- */}
        <div className='mt-[27px]'>
            <p className='text-brand text-lg font-bold font-lato '>Cantilever chair</p>
            <p className='text-subText font-medium font-lato mt-1'>Best Sellers Best selling of the month</p>
            <div className='flex items-center justify-between mt-4'>
                <p className='text-[#151875] text-[18px] font-lato'>$42.00</p>
                <div className='flex items-center gap-1.5'>
                    <FaStar className='text-[#FBBF24]'/>
                    <p className='text-[#151875] text-[16px] font-lato'>4.9</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-[#151875] text-[16px] font-lato mt-[9px]'>Code - Y523201</p>
                <div className='flex items-center gap-1'>
                    <span className='bg-[#05E6B7] w-[14px] h-[4px] '></span>
                    <span className='bg-[#F701A8] w-[14px] h-[4px] '></span>
                    <span className='bg-[#00009D] w-[14px] h-[4px] '></span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SingleProducts