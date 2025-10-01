import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/Logo.svg'
import { Link, useNavigate } from 'react-router'
import { IoSearchOutline } from "react-icons/io5";
import axios from 'axios';
import searchEmpty from '../../../src/assets/images/noProFound.png'

const Navbar = () => {
    const [search , setSearch] = useState('')

    // ---------------Api--------------
    const [product , setProduct] = useState([])
    const [filProduct , setFilProduct] = useState([])
    // ------Axios 
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((res)=>(setProduct(res.data.products)))
        .catch((err)=>(console.log(err)))
    }, [])

    // --------------- Handle Search 
    const handleSearch = ()=>{
       const filteredPro = product.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
       setFilProduct(filteredPro)
    }

    // ------------ Navigate to product 
    // ---------------------Redirect To Details 
    const navigate = useNavigate()

    const handleNav = (idNo)=>{
      navigate(`/details/${idNo}`)
    }

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
                        <li><Link id='UlHover' to={'/shop'}>Shop</Link></li>
                        <li><Link id='UlHover' to={'/details/2'}>Products</Link></li>
                        <li><Link id='UlHover' to={'/blog'}>Blog</Link></li>
                        <li><Link id='UlHover' to={'/about'}>About</Link></li>
                        <li><Link id='UlHover' to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
                <div className='w-[317px] h-[40px] flex items-center justify-between'>
                    <input onChange={(e)=>{setSearch(e.target.value), handleSearch()}} type="text" className='border-1 border-borderCol h-full outline-none pl-4 w-full' placeholder='Search Furniture'/>
                    <div className='bg-brand text-white py-2 px-[14px] text-2xl font-bold cursor-pointer'>
                        <IoSearchOutline />
                    </div>
                </div>
            {/* ---------Search items--------- */}
            <div className={`${search == ''? 'hidden' : ''} bg-[#F6F5FF] absolute top-30 right-[30px] w-[600px] h-auto max-h-[600px] px-[24px] py-[32px] z-10 rounded-md overflow-y-scroll shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
              {/* ------------SearchError---------- */}
                <div className={`${filProduct == 0? '' : 'hidden'} flex flex-col gap-6 items-center justify-center`}>
                  <img className='w-[350px]' src={searchEmpty} alt="Sorry no Product Founded :(" />
                  <p className='text-xl text-BlueText font-josefin'>Sorry No products founded :(</p>
                </div>
                {
                    filProduct.map((item , i)=>(
                        <div onClick={()=>{handleNav(item.id), setSearch('')}} key={i} className='flex items-center gap-5 border-b-1 border-subText py-3 duration-[.2s] hover:bg-[#cacccf] cursor-pointer'>
                            <img className='w-[100px]' src={item.thumbnail} alt="ProductImg" />
                            <div>
                            <h2 className='text-BlueText font-medium font-josefin text-[20px]'>{item.title}</h2>
                            <p className='text-subText font-normal font-josefin text-base mt-1 mb-1'>{item.category}</p>
                            <p className='text-brand font-medium font-josefin text-[16px]'>${item.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar