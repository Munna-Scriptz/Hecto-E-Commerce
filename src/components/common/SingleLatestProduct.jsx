import React from 'react'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
import ProductImg1 from '../../assets/images/SingleLatestImg1.png'
const SingleLatestProduct = () => {
  return (
    <>
    <div className='w-[360px]'>
            {/* ---------Product Image------- */}
            <div className='w-full h-[270px] relative'>
                <div className='flex items-center gap-3 p-[11px] absolute top-[11px] left-[11px]'>
                    <div className='ShopButton w-[35px] h-[35px] bg-[#EEEFFB] rounded-full flex items-center justify-center text-[19px] cursor-pointer text-[#2F1AC4]'>
                        <GrCart />
                        <span className="tooltip font-poppins text-white">Cart</span>
                    </div>
                    <div className='wishlist w-[35px] h-[35px] bg-[#eef8fb] rounded-full flex items-center justify-center text-[19px] cursor-pointer text-[#1389FF]'>
                        <FaRegHeart />
                        <span className="WishlistTooltip font-poppins text-white">Wishlist</span>
                    </div>
                </div>
                <img src={ProductImg1} alt="Product Image" />
            </div>
            {/* ---------Product Text------- */}
            <div className='mt-[26px] flex items-center justify-between'>
                <h2 className='text-base text-BlueText font-josefin'>Comfort Handy Craft</h2>
                <div className='flex items-center gap-2'>
                    <p className='text-BlueText font-josefin text-sm'>$42.00</p>
                    <p className='text-brand line-through font-josefin text-[12px]'>$42.00</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleLatestProduct