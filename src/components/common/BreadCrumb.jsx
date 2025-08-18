import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router'

const BreadCrumb = ({pageName , to}) => {
  return (
    <>
        <div className='py-[48px]'>
            <h2 className='text-BlueText text-[36px] font-josefin font-bold'>About Us</h2>
            <div className='flex items-center gap-3 mt-2'>
                <Link to={'/'} className='text-black text-lg font-lato font-medium'>Home</Link>
                <FaAngleRight />
                <Link to={`/${to}`} className='text-brand text-lg font-lato font-medium'>{pageName}</Link>
            </div>
        </div>
    </>
  )
}

export default BreadCrumb