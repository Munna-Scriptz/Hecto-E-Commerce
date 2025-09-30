import React, { useState } from 'react'
import Logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router'
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineGroup } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

const ResNavbar = () => {
    const [Value , SetValue] = useState(true)
  return (
    <>
    <nav className='lg:hidden block z-50 py-[12px]'>
        <div className="container">
            <div id="NavBar_Row" className='py-[20px] flex items-center justify-between' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='w-[110px]'>
                    <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                </div>
                {/* -----------Nav button--------  */}
                <div className='flex items-center gap-5 text-2xl text-black'>
                    <FaBarsStaggered onClick={()=>SetValue(!Value)} className='cursor-pointer'/>
                </div>
            </div>
        </div>
        {/* ------Button Menu------ */}
        <div className={`absolute top-0 left-0 w-full h-screen duration-[.3s]  ${Value? 'z-[-10]' : 'z-[40]'}`}>
            <div onClick={()=>SetValue(!Value)} className={`w-full h-screen duration-[.3s] absolute top-0 left-0 bg-[#00000070] ${Value? 'hidden' : 'visible'}`}></div>
            <div className={`h-screen w-[60%] absolute top-0 bg-white p-5 duration-[.8s] shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden z-50 ${Value? ' translate-x-[-520px] md:translate-x-[-740px] ' : ' translate-x-[-0px]'}`}>
                <div className='flex items-center justify-between absolute top-0 right-0 w-full px-4 mt-[25px]'>
                    <Link to={'/'} className='w-[100px]'><img src={Logo} alt="Logo" /></Link>
                    <button className='relative w-[32px] h-[28px] cursor-pointer right-0' onClick={()=>SetValue(!Value)}>
                        <span className={`w-[20px] h-[2px] bg-BlueText absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[5px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
                        <span className={`w-[20px] h-[2px] bg-BlueText absolute top-[10px] right-[10px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
                        <span className={`w-[20px] h-[2px] bg-BlueText absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[15px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
                    </button>
                </div>

                <ul className='flex flex-col items-start gap-5 text-xl mt-25'>
                    <li className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-brand font-josefin flex items-center gap-2' to={'/'}>Home</Link></li>
                    <li className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-brand font-josefin flex items-center gap-2' to={'/shop'}>Shop</Link></li>
                    <li className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-brand font-josefin flex items-center gap-2' to={'/details/2'}>products</Link></li>
                    <li className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-brand font-josefin flex items-center gap-2' to={'/blog'}>Blog</Link></li>
                    <li className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-brand font-josefin flex items-center gap-2' to={'/about'}>About</Link></li>
                    <li className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-brand font-josefin flex items-center gap-2' to={'/contact'}>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default ResNavbar