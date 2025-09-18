import React from 'react'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
const SingleShopProduct = ({proImage , proName , proPrice , ProDiscount , handleNav}) => {
  return (
    <>
        <div className='lg:w-[270px] w-full hover:bg-[#EBF4F3] pb-2 rounded-[5px] duration-300'>
            {/* ---------Product Image------- */}
            <div className='w-full h-[250px] relative'>
                <div className='flex items-center flex-col gap-3 p-[11px] absolute bottom-[11px] left-[11px]'>
                    <div className='ShopButton w-[35px] h-[35px] bg-[#EEEFFB] rounded-full flex items-center justify-center text-[19px] cursor-pointer text-[#2F1AC4]'>
                        <GrCart />
                        <span className="tooltip font-poppins text-white">Cart</span>
                    </div>
                    <div onClick={handleNav} className='w-[35px] h-[35px] bg-[#eef8fb] rounded-full flex items-center justify-center text-[19px] cursor-pointer text-primary'>
                        <FaSearchPlus />
                    </div>
                    <div className='w-[35px] h-[35px] bg-[#eef8fb] rounded-full flex items-center justify-center text-[19px] cursor-pointer text-[#1389FF]'>
                        <FaRegHeart />
                    </div>
                </div>
                <img src={proImage} alt="Product Image" />
            </div>
            {/* ---------Product Text------- */}
            <div className='mt-[26px] flex flex-col items-center justify-between'>
                <h2 className='text-base text-BlueText font-josefin'>{proName}</h2>
                <div className='flex items-center gap-2 mt-2'>
                    <p className='text-BlueText font-josefin text-sm'>{proPrice} </p>
                    <p className='text-brand line-through font-josefin text-[12px]'>$26.00 </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleShopProduct