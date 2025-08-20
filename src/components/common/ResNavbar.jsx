import React, { useState } from 'react'
import Logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router'
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoHomeOutline } from 'react-icons/io5';
import { LuShoppingBag } from 'react-icons/lu';
import { MdOutlineGroup } from 'react-icons/md';
import { RiShoppingCart2Line, RiUserLine } from 'react-icons/ri';
import { TbArrowsJoin } from 'react-icons/tb';
const ResNavbar = () => {
    const [Value , SetValue] = useState(true)
  return (
    <>
    <nav className='lg:hidden block'>
        <div className="container">
            <div id="Navbar-Row" className='py-[20px] flex items-center justify-between'>
                <div className='flex items-center justify-between'>
                    <Link to={'/'}><img className='w-[78px] z-50' src={Logo} alt="Logo" /></Link>
                </div>
                <div onClick={()=>SetValue(!Value)} className='cursor-pointer text-[24px] z-50'>
                   <button className='relative w-[32px] h-[28px] cursor-pointer right-0' onClick={()=>SetValue(!Value)}>
                        <span className={`w-[20px] h-[3px] bg-black rounded-[4px] absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[3px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
                        <span className={`w-[20px] h-[3px] bg-black rounded-[4px] absolute top-[10px] right-[8px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
                        <span className={`w-[20px] h-[3px] bg-black rounded-[4px] absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[17px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
                    </button>
                </div>
            </div>
        </div>
        {/* ------Button Menu------ */}
        <div className={`absolute top-0 left-0 w-full h-screen duration-[.3s]  ${Value? 'z-[-10]' : 'z-[40]'}`}>
            <div onClick={()=>SetValue(!Value)} className={`w-full h-screen duration-[.3s] absolute top-0 left-0 bg-[#00000070] ${Value? 'hidden' : 'visible'}`}></div>
            <div className={`h-screen w-[60%] absolute top-0 bg-[#7E33E0] p-5 flex justify-center duration-[.8s] shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden z-50 ${Value? ' translate-x-[-520px] md:translate-x-[-740px] ' : ' translate-x-[-0px]'}`}>
                <div className='flex items-center justify-between absolute top-0 right-0 w-full p-5'>
                    <Link to={'/'} className='w-[64px]'><img src={Logo} alt="Logo" /></Link>
                    <button className='relative w-[32px] h-[28px] cursor-pointer right-0' onClick={()=>SetValue(!Value)}>
                        <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[5px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
                        <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute top-[10px] right-[10px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
                        <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[15px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
                    </button>
                </div>

                <ul className='flex flex-col items-start gap-5 text-md mt-25'>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] flex items-center gap-2' to={'/'}><IoHomeOutline/> Home</Link></li>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] flex items-center gap-2' to={'/shop'}><LuShoppingBag/> Shop</Link></li>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] flex items-center gap-2' to={'/about'}><MdOutlineGroup/> About</Link></li>
                    <li><button onClick={()=>{SetValue(!Value) , SetShowCart(!showCart)}} className='text-[#F8F8F8] flex items-center gap-2'><RiShoppingCart2Line/>Cart</button></li>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] flex items-center gap-2' to={'/Login'}><RiUserLine/> Login</Link></li>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] flex items-center gap-2' to={'/Register'}><TbArrowsJoin/> Register</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default ResNavbar