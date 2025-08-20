import React from 'react'
import { FaPenNib, FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router'
const SingleBlogCard = ({img , publisher , date , heading, details}) => {
  return (
    <>
    <div className='lg:w-[370px w-full] pb-[35px]'>
        <img src={img} alt="Blog Image" />
        <div className='mt-[19px] flex items-center gap-[29px]'>
            <p className='text-[14px] text-BlueText font-josefin flex items-center gap-2'><FaPenNib className='text-brand'/>{publisher}</p>
            <p className='text-[14px] text-BlueText font-josefin flex items-center gap-2'><FaRegCalendarAlt className='text-[#FFA454]'/>{date}</p>
        </div>
        <h2 className='text-BlueText text-lg font-josefin font-bold mt-[32px] mb-[17px]'>{heading}</h2>
        <p className='text-[#72718F] text-base font-lato leading-[30px] w-[297px] mb-[14px]'>{details}</p>
        <Link className='text-BlueText font-lato underline hover:text-brand duration-[.3s]' to={'/'}>Read More</Link>
    </div>
    </>
  )
}

export default SingleBlogCard