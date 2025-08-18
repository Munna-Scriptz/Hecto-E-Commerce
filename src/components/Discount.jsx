import React from 'react'
import CommonHead from './common/CommonHead'
import discountImg from '../assets/images//DiscountImg.svg'
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router';
import CommonButton from './common/CommonButton';

const Discount = () => {
  return (
    <>
    <section id='Discount' className='mt-[130px]'>
        <div className="container">
            <div id="Discount-Row">
            {/* ---------------Header----------- */}
            <CommonHead text={'Discount Item'}/>
            <div className='mt-[20px]'>
                <ul className='flex items-center justify-center gap-[60px] font-lato text-lg text-[#151875]'>
                    <li><button className='hover:text-brand duration-[.3s] cursor-pointer'>Wood Chair</button></li>
                    <li><button className='hover:text-brand duration-[.3s] cursor-pointer'>Plastic Chair</button></li>
                    <li><button className='hover:text-brand duration-[.3s] cursor-pointer'>Sofa Collection</button></li>
                </ul>
            </div>
            {/* ----------Left Side---------- */}
            <div className='flex items-center justify-baseline'>
                <div className='w-[509px]'>
                    <h2 className='text-BlueText font-josefin text-[35px] font-bold'>20% Discount Of All Products</h2>
                    <p className='text-brand text-[21px] font-josefin mt-4'>Eams Sofa Compact</p>
                    <p className='text-[#B7BACB] font-lato text-[17px] leading-[30px] mt-5 mb-[28px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                    <ul className='flex items-center flex-wrap gap-x-[44px] gap-y-[10px] mb-[57px]'>
                        <li className='flex items-center gap-2'>
                            <FaCheck className='text-[#7569B2]'/>
                            <p className='text-[#B8B8DC] font-lato text-[16px] leading-[30px]'>Material expose like metals</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheck className='text-[#7569B2]'/>
                            <p className='text-[#B8B8DC] font-lato text-[16px] leading-[30px]'>Material expose like metals</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheck className='text-[#7569B2]'/>
                            <p className='text-[#B8B8DC] font-lato text-[16px] leading-[30px]'>Material expose like metals</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheck className='text-[#7569B2]'/>
                            <p className='text-[#B8B8DC] font-lato text-[16px] leading-[30px]'>Material expose like metals</p>
                        </li>
                    </ul>
                    <CommonButton text={'Shop Now'} py={16} px={68}/>
                </div>
                <div>
                    <img src={discountImg} alt="Discount Product" />
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Discount