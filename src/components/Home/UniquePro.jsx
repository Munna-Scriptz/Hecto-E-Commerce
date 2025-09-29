import React from 'react'
import UniqueProImg from '../../assets/images/UniqueFurniture.svg'
import CommonButton from '../common/CommonButton'

const UniquePro = () => {
  return (
    <>
    <section id='Unique' className='mt-[130px] bg-[#F1F0FF] py-[15px]'>
        <div className="container">
            <div id="Unique-Row" className='flex lg:flex-row flex-col items-center justify-between'>
                <div><img src={UniqueProImg} alt="Image" /></div>
                <div className='lg:w-[507px] w-full'>
                    <h2 className='lg:text-[35px] text-[25px] text-BlueText font-josefin font-bold leading-[132%]'>Unique Features Of leatest & Trending Poducts</h2>
                    {/* --------List-------- */}
                    <ul className='mt-[30px] flex flex-col gap-3'>
                        <li className='flex items-center gap-3 lg:text-base text-sm'>
                            <div className='lg:w-[11px] w-[8px] lg:h-[11px] h-[8px] bg-brand rounded-full'></div>
                            <p className='text-[#ACABC3] font-medium font-lato leading-[175%]'>All frames constructed with hardwood solids and laminates</p>
                        </li>
                        <li className='flex items-center gap-3 lg:text-base text-sm'>
                            <div className='lg:w-[11px] w-[8px] lg:h-[11px] h-[8px] bg-[#2B2BF5] rounded-full'></div>
                            <p className='text-[#ACABC3] font-medium font-lato leading-[175%]'>Reinforced with double wood dowels, glue, screw - nails corner</p>
                        </li>
                        <li className='flex items-center gap-3 lg:text-base text-sm'>
                            <div className='lg:w-[11px] w-[8px] lg:h-[11px] h-[8px] bg-[#2BF5CC] rounded-full'></div>
                            <p className='text-[#ACABC3] font-medium font-lato leading-[175%]'>Arms, backs and seats are structurally reinforced</p>
                        </li>
                    </ul>
                    {/* --------Link-------- */}
                    <div className='mt-[38px] flex items-center gap-5'>
                        <CommonButton to={'shop'} text={'View Products'} py={14} px={24}/>
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