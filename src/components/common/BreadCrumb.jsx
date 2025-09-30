import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router'

const BreadCrumb = ({pageName , to}) => {
  return (
    <>
        <div className='lg:py-[48px] py-[28px] bg-[#F6F5FF] lg:mb-[120px] mb-[60px]'>
          <div className='container'>
              <h2 className='text-BlueText lg:text-[36px] text-2xl font-josefin font-bold'>{pageName}</h2>
              <div className='flex items-center gap-3 mt-2'>
                <Link to={'/'} className='text-black md:text-lg text-base font-lato font-medium'>Home</Link>
                <FaAngleRight />
                <Link to={`/${to}`} className='text-brand md:text-lg text-base font-lato font-medium'>{pageName}</Link>
              </div>
          </div>
        </div>
    </>
  )
}

export default BreadCrumb