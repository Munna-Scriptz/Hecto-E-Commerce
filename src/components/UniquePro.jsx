import React from 'react'
import UniqueProImg from '../assets/images/UniqueFurniture.svg'
import { Link } from 'react-router'

const UniquePro = () => {
  return (
    <>
    <section id='Unique' className='mt-[130px] bg-[#F1F0FF] py-[15px]'>
        <div className="container">
            <div id="Unique-Row" className='flex items-center justify-between'>
                <div><img src={UniqueProImg} alt="Image" /></div>
                <div className='w-[507px]'>
                    <h2 className='text-[35px] text-BlueText font-josefin font-bold leading-[132%]'>Unique Features Of leatest & Trending Poducts</h2>
                    {/* --------List-------- */}
                    <ul className='mt-[30px] flex flex-col gap-3'>
                        <li className='flex items-center gap-3'>
                            <div className='w-[11px] h-[11px] bg-brand rounded-full'></div>
                            <p className='text-[#ACABC3] font-medium font-lato leading-[175%]'>All frames constructed with hardwood solids and laminates</p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='w-[14px] h-[11px] bg-[#2B2BF5] rounded-full'></div>
                            <p className='text-[#ACABC3] font-medium font-lato leading-[175%]'>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='w-[11px] h-[11px] bg-[#2BF5CC] rounded-full'></div>
                            <p className='text-[#ACABC3] font-medium font-lato leading-[175%]'>Arms, backs and seats are structurally reinforced</p>
                        </li>
                    </ul>
                    {/* --------Link-------- */}
                    <div className='mt-[38px] flex items-center gap-5'>
                        <Link className='bg-brand py-[14px] px-[24px] text-white font-josefin font-semibold text-[17px]' to={'/'}>Add To Cart</Link>
                        <div>
                            <h2 className='font-josefin text-sm text-BlueText font-semibold'>B&B Italian Sofa </h2>
                            <p className='font-lato text-sm text-BlueText'>$32.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default UniquePro