import React from 'react'
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <footer className='mt-[115px] bg-[#EEEFFB] pt-[94px]'>
        <div className="container">
            <div id="Footer-Row" className='flex lg:flex-row flex-col lg:items-start items-center justify-between pb-[100px]'>
                {/* ------------------1st Row---------------- */}
                <div>
                    <Link to={'/'}><img src={logo} alt="Logo" /></Link>
                    <div className='lg:w-[377px] w-full h-[44px] mt-[32px] bg-white flex items-center justify-between'>
                        <input className='h-full lg:w-[230px] w-[210px] outline-none pl-5' type="text" placeholder='Enter Email Address'/>
                        <button className='bg-brand h-full lg:px-[40px] px-[24px] rounded-[3px] inline-block cursor-pointer text-white font-josefin'>Sign Up</button>
                    </div>
                    <p className='text-subText font-lato mt-[25px] mb-[10px]'>Contact Info</p>
                    <p className='text-subText font-lato lg:text-base text-sm mb-[10px]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
                {/* ------------------2nd Row---------------- */}
                <div className='lg:text-start text-center lg:mt-0 mt-10'>
                    <h2 className='text-black text-[22px] font-josefin font-semibold mb-[42px]'>Categories</h2>
                    <ul className='flex flex-col text-subText text-base font-lato gap-[18px]'>
                        <li><Link to={'/'}>Laptops & Computers</Link></li>
                        <li><Link to={'/'}>Cameras & Photography</Link></li>
                        <li><Link to={'/'}>Smart Phones & Tablets</Link></li>
                        <li><Link to={'/'}>Video Games & Consoles</Link></li>
                        <li><Link to={'/'}>Waterproof Headphones</Link></li>
                    </ul>
                </div>
                {/* ------------------3nd Row---------------- */}
                <div className='lg:text-start text-center lg:mt-0 mt-10'>
                    <h2 className='text-black text-[22px] font-josefin font-semibold mb-[42px]'>Customer Care</h2>
                    <ul className='flex flex-col text-subText text-base font-lato gap-[18px]'>
                        <li><Link to={'/'}>My Account</Link></li>
                        <li><Link to={'/'}>Discount</Link></li>
                        <li><Link to={'/'}>Returns</Link></li>
                        <li><Link to={'/'}>Orders History</Link></li>
                        <li><Link to={'/'}>Order Tracking</Link></li>
                    </ul>
                </div>
                {/* ------------------4th Row---------------- */}
                <div className='lg:text-start text-center lg:mt-0 mt-10'>
                    <h2 className='text-black text-[22px] font-josefin font-semibold mb-[42px]'>Pages</h2>
                    <ul className='flex flex-col text-subText text-base font-lato gap-[18px]'>
                        <li><Link to={'/'}>Blog</Link></li>
                        <li><Link to={'/'}>Browse the Shop</Link></li>
                        <li><Link to={'/'}>Category</Link></li>
                        <li><Link to={'/'}>Pre-Built Pages</Link></li>
                        <li><Link to={'/'}>Visual Composer Elements</Link></li>
                        <li><Link to={'/'}>WooCommerce Pages</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        {/* -------------Bottom Footer---------- */}
        <div id='Footer-Bottom-Row' className='bg-[#E7E4F8] py-[17px]'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <p className='text-[#9DA0AE] lg:text-base text-sm font-lato font-semibold'>©Munna - All Rights Reserved</p>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#8a8fb950] rounded-[6px] p-2 text-BlueText hover:bg-BlueText hover:text-white duration-[.3s] cursor-pointer'><FaFacebookF /></div>
                        <div className='bg-[#8a8fb950] rounded-[6px] p-2 text-BlueText hover:bg-BlueText hover:text-white duration-[.3s] cursor-pointer'><FaInstagram /></div>
                        <div className='bg-[#8a8fb950] rounded-[6px] p-2 text-BlueText hover:bg-BlueText hover:text-white duration-[.3s] cursor-pointer'><FaTwitter /></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer