import React from 'react'
import CommonHead from '../common/CommonHead'
import discountImg from '../../assets/images//DiscountImg.svg'
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router';

const Discount = () => {
  return (
    <>
    <section id='Discount' className='mt-[130px]'>
        <div className="container">
            <div id="Discount-Row">
            {/* ---------------Header----------- */}
            <CommonHead text={'Discount Item'}/>
            <div className='mt-[20px]'>
                <ul className='flex items-center justify-center lg:gap-[60px] gap-[10px] font-lato lg:text-lg text-sm text-[#151875]'>
                    <li><button className='hover:text-brand duration-[.3s] cursor-pointer'>Wood Chair</button></li>
                    <li><button className='hover:text-brand duration-[.3s] cursor-pointer'>Plastic Chair</button></li>
                    <li><button className='hover:text-brand duration-[.3s] cursor-pointer'>Sofa Collection</button></li>
                </ul>
            </div>
            {/* ----------Left Side---------- */}
            <div className='flex lg:flex-row flex-col-reverse items-center justify-baseline lg:mt-0 mt-10'>
                <div className='lg:w-[509px] w-full'>
                    <h2 className='text-BlueText font-josefin lg:text-[35px] text-[26px] font-bold'>20% Discount Of All Products</h2>
                    <p className='text-brand md:text-[21px] text-lg font-josefin mt-4'>Eams Sofa Compact</p>
                    <p className='text-[#B7BACB] font-lato md:text-[17px] text-sm md:leading-[30px] mt-5 mb-[28px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                    <ul className='flex items-center flex-wrap gap-x-[44px] gap-y-[10px] md:mb-[57px] mb-6'>
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
                    <Link to={'/shop'} className={`relative flex items-center justify-center md:py-[16px] py-[10px] md:px-[68px] px-[40px] overflow-hidden text-white bg-brand group rounded-md w-fit`}>
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-BlueText rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="relative font-josefin text-[16px]">Shop Now</span>
                    </Link>
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