import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import img1 from '../../assets/images/sidebarImg1.png'
import img2 from '../../assets/images/sidebarImg2.png'
import img3 from '../../assets/images/sidebarImg3.png'
import img4 from '../../assets/images/sidebarImg4.png'
import img5 from '../../assets/images/sidebarImg5.png'
import img6 from '../../assets/images/sidebarImg6.png'
import img7 from '../../assets/images/sidebarImg7.png'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { Link } from 'react-router'

const BlogRight = () => {
  return (
    <>
        <div className='w-[300px]'>
            {/* ------------- Search  */}
            <div>
                <h2 className='text-BlueText font-josefin font-semibold text-[22px] mb-4'>Search</h2>
                <div className='relative'>
                    <input className='w-full border-1 border-subText outline-none h-[40px] rounded-[4px] pl-3' placeholder='Search product' type="text" />
                    <IoSearchOutline className='absolute right-2.5 top-[10px] text-subText text-lg' />
                </div>
            </div>

            {/* ------------- Categories  */}
            <div className='mt-[52px]'>
                <h2 className='text-BlueText font-josefin font-semibold text-[22px] mb-4'>Categories</h2>
                <div className='flex items-center gap-2.5 flex-wrap'>
                    <button className='bg-brand text-white py-2 pl-2 rounded-[4px] pr-[33px] cursor-pointer'>Hobbies (14)</button>
                    <button className='bg-white text-[#3F509E] py-2 pl-2 rounded-[4px] pr-[33px] cursor-pointer'>Women (21)</button>
                    <button className='bg-white text-[#3F509E] py-2 pl-2 rounded-[4px] pr-[33px] cursor-pointer'>Women (21)</button>
                    <button className='bg-white text-[#3F509E] py-2 pl-2 rounded-[4px] pr-[33px] cursor-pointer'>Women (21)</button>
                    <button className='bg-white text-[#3F509E] py-2 pl-2 rounded-[4px] pr-[33px] cursor-pointer'>Women (21)</button>
                    <button className='bg-white text-[#3F509E] py-2 pl-2 rounded-[4px] pr-[33px] cursor-pointer'>Women (21)</button>
                </div>
            </div>

            {/* ------------- Categories  */}
            <div className='mt-[52px]'>
                <h2 className='text-BlueText font-josefin font-semibold text-[22px] mb-4'>Recent Post</h2>
                <div className='flex items-center gap-1.5'>
                    <img src={img1} alt="side img" />
                    <div>
                        <h2 className='text-[#3F509E] text-sm font-josefin'>It is a long established fact</h2>
                        <p className='text-subText mt-1.5 text-[11px] font-lato'>Aug 09 2020</p>
                    </div>
                </div>
                <div className='flex items-center gap-1.5 mt-[22px]'>
                    <img src={img2} alt="side img" />
                    <div>
                        <h2 className='text-[#3F509E] text-sm font-josefin'>It is a long established fact</h2>
                        <p className='text-subText mt-1.5 text-[11px] font-lato'>Aug 09 2020</p>
                    </div>
                </div>
                <div className='flex items-center gap-1.5 mt-[22px]'>
                    <img src={img3} alt="side img" />
                    <div>
                        <h2 className='text-[#3F509E] text-sm font-josefin'>It is a long established fact</h2>
                        <p className='text-subText mt-1.5 text-[11px] font-lato'>Aug 09 2020</p>
                    </div>
                </div>
                <div className='flex items-center gap-1.5 mt-[22px]'>
                    <img src={img4} alt="side img" />
                    <div>
                        <h2 className='text-[#3F509E] text-sm font-josefin'>It is a long established fact</h2>
                        <p className='text-subText mt-1.5 text-[11px] font-lato'>Aug 09 2020</p>
                    </div>
                </div>
            </div>

            {/* ------------- Sale Product  */}
            <div className='mt-[52px]'>
                <h2 className='text-BlueText font-josefin font-semibold text-[22px] mb-4'>Sale Product</h2>
                <div className='flex items-center gap-1.5'>
                    <img src={img5} alt="side img" />
                    <div>
                        <h2 className='text-[#3F509E] text-sm font-josefin'>Elit ornare in enim mauris.</h2>
                        <p className='text-subText mt-1.5 text-[11px] font-lato'>Aug 09 2020</p>
                    </div>
                </div>
                <div className='flex items-center gap-1.5 mt-[22px]'>
                    <img src={img6} alt="side img" />
                    <div>
                        <h2 className='text-[#3F509E] text-sm font-josefin'>Viverra pulvinar et enim.</h2>
                        <p className='text-subText mt-1.5 text-[11px] font-lato'>Aug 09 2020</p>
                    </div>
                </div>
                <div className='flex items-center gap-1.5 mt-[22px]'>
                    <img src={img7} alt="side img" />
                    <div>
                        <h2 className='text-[#3F509E] text-sm font-josefin'>Mattis varius donec fdsfd</h2>
                        <p className='text-subText mt-1.5 text-[11px] font-lato'>Aug 09 2020</p>
                    </div>
                </div>
            </div>

            {/* ------------- Socials  */}
            <div className='mt-[52px]'>
                <h2 className='text-BlueText font-josefin font-semibold text-[22px] mb-4'>Follow</h2>
                <div className='mt-[20px] flex items-center gap-2'>
                    <div className='w-[25px] h-[25px] text-white flex items-center justify-center rounded-full bg-[#5625DF] cursor-pointer'><FaFacebookF /></div>
                    <div className='w-[25px] h-[25px] text-white flex items-center justify-center rounded-full bg-[#FF27B7] cursor-pointer'><RiInstagramFill /></div>
                    <div className='w-[25px] h-[25px] text-white flex items-center justify-center rounded-full bg-[#37DAF3] cursor-pointer'><FaTwitter /></div>
                </div>
            </div>

            {/* ------------- Tags  */}
            <div className='mt-[52px]'>
                <h2 className='text-BlueText font-josefin font-semibold text-[22px] mb-4'>Follow</h2>
                <div className='mt-[20px] flex items-center flex-wrap gap-x-10 gap-y-2.5'>
                    <Link className='text-BlueText font-lato underline hover:text-brand duration-300' to={'/'}>General</Link>
                    <Link className='text-BlueText font-lato underline hover:text-brand duration-300' to={'/'}>Atsanil</Link>
                    <Link className='text-BlueText font-lato underline hover:text-brand duration-300' to={'/'}>Insas.</Link>
                    <Link className='text-BlueText font-lato underline hover:text-brand duration-300' to={'/'}>Bibsaas</Link>
                    <Link className='text-BlueText font-lato underline hover:text-brand duration-300' to={'/'}>Nulla.</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogRight