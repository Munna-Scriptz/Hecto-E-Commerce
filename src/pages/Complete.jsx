import React from 'react'
import { Link } from 'react-router'
import { FaAngleRight } from 'react-icons/fa'
import img from '../../src/assets/images/completeImg.png'
import Clock from '../../src/assets/images/clockDec.png'
import checklist from '../../src/assets/images/checklistDec.png'
import Brands from '../components/Home/Brands'

const Complete = () => {
  return (
    <>
        {/* ----------------- breadcrumb  */}
        <div className='py-[48px] bg-[#F6F5FF] mb-[120px]'>
          <div className='container'>
              <h2 className='text-BlueText lg:text-[36px] text-2xl font-josefin font-bold'>Order Complete</h2>
              <div className='flex items-center lg:gap-3 md:justify-start justify-between mt-2'>
                  <Link to={'/'} className='text-black md:text-lg text-base font-lato font-medium'>Home</Link>
                  <FaAngleRight />
                  <Link to={'/'} className='text-black md:text-lg text-base font-lato font-medium'>Shopping Cart</Link>
                  <FaAngleRight />
                  <Link to={`/complete`} className='text-brand md:text-lg text-base font-lato font-medium'>Order Complete</Link>
              </div>
          </div>
        </div>
        <section id='Complete' className='relative'>
            <div className="container">
                <div id="Complete-Row" className='lg:w-[625px] w-full mx-auto flex flex-col items-center justify-center'>
                    <img src={img} alt="Checkbox" />
                    <h2 className='text-BlueText font-josefin font-bold lg:text-[36px] text-2xl mb-6 mt-7'>Your Order Is Completed! </h2>
                    <p className='text-subText font-lato leading-[30px] text-center mb-10'>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
                    <Link className='bg-brand text-white inline-block py-[12px] px-[32px] rounded-[4px] font-josefin hover:bg-subText duration-300' to={'/shop'}>Back to Shop</Link>
                </div>
                <Brands />
            </div>
            {/* ----------------------------Decs  */}
            <img className='absolute lg:block hidden top-0 left-[200px]' src={Clock} alt="Decoration Image" />
            <img className='absolute lg:block hidden bottom-[150px] right-[200px]' src={checklist} alt="Decoration Image" />
        </section>
    </>
  )
}

export default Complete