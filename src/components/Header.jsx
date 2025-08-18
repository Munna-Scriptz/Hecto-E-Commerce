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
                <div className='flex items-center gap-22'>
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
                <div className='flex items-center gap-[18px]'>
                    <div className='text-brandWhite font-josefin font-semibold flex items-center gap-1 cursor-pointer'>
                        <p>English</p>
                        <FaAngleDown />
                    </div>
                    <div className='text-brandWhite font-josefin font-semibold flex items-center gap-1 cursor-pointer'>
                        <p>USD</p>
                        <FaAngleDown />
                    </div>
                    <div className='text-brandWhite font-josefin font-semibold flex items-center gap-1 cursor-pointer'>
                        <p>Login</p>
                        <FaRegUser />
                    </div>
                    <div className='text-brandWhite font-josefin font-semibold flex items-center gap-1 cursor-pointer'>
                        <p>WhishList</p>
                        <FaRegHeart />
                    </div>
                    <div className='text-brandWhite font-josefin font-semibold text-[20px] cursor-pointer hover:text-brand duration-[.3s]'>
                        <MdOutlineShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header