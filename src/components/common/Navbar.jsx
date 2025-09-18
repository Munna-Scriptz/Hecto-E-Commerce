import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router'
import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <>
    <nav className='lg:block hidden'>
        <div className="container">
            <div id="Navbar-Row" className='py-[19px] flex items-center justify-between'>
                <div className='flex items-center gap-[88px]'>
                    {/* ------Logo------ */}
                    <Link to={'/'}><img className='w-[98px]' src={Logo} alt="Logo" /></Link>
                    {/* ------NavIcons------ */}
                    <ul className='flex items-center gap-[35px] text-NavyBlue text-base '>
                        <li><Link id='UlHover' to={'/'}>Home</Link></li>
                        <li><Link id='UlHover' to={'/'}>Pages</Link></li>
                        <li><Link id='UlHover' to={'/'}>Products</Link></li>
                        <li><Link id='UlHover' to={'/'}>Blog</Link></li>
                        <li><Link id='UlHover' to={'/shop'}>Shop</Link></li>
                        <li><Link id='UlHover' to={'/'}>Faq</Link></li>
                        <li><Link id='UlHover' to={'/about'}>About</Link></li>
                    </ul>
                </div>
                <div className='w-[317px] h-[40px] flex items-center justify-between'>
                    <input type="text" className='border-1 border-borderCol h-full outline-none pl-4 w-full' placeholder='Search Furniture'/>
                    <div className='bg-brand text-white py-2 px-[14px] text-2xl font-bold cursor-pointer'>
                        <IoSearchOutline />
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar