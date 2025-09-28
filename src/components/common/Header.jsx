import React from 'react'
import { MdOutlineEmail, MdOutlineShoppingCart } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleDown, FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router';



const Header = () => {
  return (
    <>
    <header className='bg-[#7E33E0] py-[14px]'>
        <div className="container">
            <div id="Header-Row" className='flex items-center justify-between'>
                {/* -------Contact Infos------ */}
                <div className='items-center gap-22 md:flex hidden'>
                    <Link id='UlHover' to={'/'} className='flex items-center gap-2.5 text-brandWhite font-josefin font-semibold'>
                        <MdOutlineEmail />
                        <p>munnascriptz@gmail.com</p>
                    </Link>
                    <Link id='UlHover' to={'/'} className='flex items-center gap-2.5 text-brandWhite font-josefin font-semibold'>
                        <FiPhoneCall />
                        <p>(12345)67890</p>
                    </Link>
                </div>
                {/* -------Functions------ */}
                <div className='flex items-center lg:justify-start justify-around lg:gap-[18px] gap-[14px]'>
                    <div className='text-brandWhite font-josefin font-semibold flex items-center gap-1 lg:text-base text-[14px] cursor-pointer'>
                        <p>English</p>
                        <FaAngleDown />
                    </div>
                    <div className='text-brandWhite font-josefin font-semibold flex items-center gap-1 lg:text-base text-[14px] cursor-pointer'>
                        <p>USD</p>
                        <FaAngleDown />
                    </div>
                    <div className='text-brandWhite font-josefin font-semibold flex items-center gap-1 lg:text-base text-[14px] cursor-pointer'>
                        <p>Login</p>
                        <FaRegUser />
                    </div>
                    <Link to={'/cart'} className='text-brandWhite font-josefin font-semibold flex items-center gap-1 lg:text-base text-[14px] cursor-pointer hover:text-brand duration-300'>
                        <p>Cart</p>
                        <MdOutlineShoppingCart className='text-xl'/>
                    </Link>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header