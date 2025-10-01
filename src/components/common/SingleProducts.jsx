import React from 'react'
import { FaSearchPlus, FaStar } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { Bounce, toast } from 'react-toastify';

const SingleProducts = ({proImg , proName , ProDesc , proPrice , handleNav , addToCart}) => {
    const handleToast = ()=>{
        toast.success('Cart Added !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }
  return (
    <>
    <div className='lg:w-[270px] w-full mx-auto'>
        {/* ---------Product Image------- */}
        <div className='w-full h-[236px] relative'>
            <div className='flex items-center gap-3 p-[11px] absolute top-[11px] left-[11px]'>
                <div onClick={()=>{addToCart(), handleToast()}} className='ShopButton w-[35px] h-[35px] bg-[#EEEFFB] rounded-full flex items-center justify-center text-[19px] cursor-pointer text-[#2F1AC4]'>
                    <GrCart />
                    <span className="tooltip font-poppins text-white">Cart</span>
                </div>
                <div onClick={handleNav} className='wishlist w-[35px] h-[35px] bg-[#eef8fb] rounded-full flex items-center justify-center text-[19px] cursor-pointer text-[#1389FF]'>
                    <FaSearchPlus />
                    <span className="WishlistTooltip font-poppins text-white">View</span>
                </div>
            </div>
            <img src={proImg} alt="Product Image" />
        </div>
        {/* ---------Product Text------- */}
        <div className='mt-[57px]'>
            <p className='text-brand text-lg font-bold font-lato line-clamp-1'>{proName}</p>
            <p className='text-subText md:text-base text-xs font-medium font-lato mt-1 line-clamp-2'>{ProDesc}</p>
            <div className='flex items-center justify-between mt-4'>
                <p className='text-[#151875] md:text-lg text-base font-lato'>${proPrice}</p>
                <div className='flex items-center gap-1.5'>
                    <FaStar className='text-[#FBBF24]'/>
                    <p className='text-[#151875] text-[16px] font-lato'>4.9</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-[#151875] md:text-[16px] text-sm font-lato mt-[9px]'>Code - Y523201</p>
                <div className='flex items-center gap-1'>
                    <span className='bg-[#05E6B7] w-[14px] h-[4px] '></span>
                    <span className='bg-[#F701A8] w-[14px] h-[4px] '></span>
                    <span className='bg-[#00009D] w-[14px] h-[4px] '></span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SingleProducts