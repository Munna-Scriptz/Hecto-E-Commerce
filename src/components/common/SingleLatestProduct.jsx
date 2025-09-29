import React from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
import { Bounce, toast } from 'react-toastify'

const SingleLatestProduct = ({proImage , proName , proPrice , ProDiscount , handleNav , handleCart}) => {
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
    <div className='lg:w-[360px] w-full'>
            {/* ---------Product Image------- */}
            <div className='w-full h-[270px] relative'>
                <div className='flex items-center gap-3 p-[11px] absolute top-[11px] left-[11px]'>
                    <div onClick={()=>{handleCart(), handleToast()}} className='ShopButton w-[35px] h-[35px] bg-[#EEEFFB] rounded-full flex items-center justify-center text-[19px] cursor-pointer text-[#2F1AC4]'>
                        <GrCart />
                        <span className="tooltip font-poppins text-white">Cart</span>
                    </div>
                    <div onClick={handleNav} className='wishlist w-[35px] h-[35px] bg-[#eef8fb] rounded-full flex items-center justify-center text-[19px] cursor-pointer text-[#1389FF]'>
                        <FaSearchPlus />
                        <span className="WishlistTooltip font-poppins text-white">View</span>
                    </div>
                </div>
                <img src={proImage} alt="Product Image" />
            </div>
            {/* ---------Product Text------- */}
            <div className='mt-[26px] flex items-center justify-between'>
                <h2 className='text-base text-BlueText font-josefin'>{proName}</h2>
                <div className='flex items-center gap-2'>
                    <p className='text-BlueText font-josefin text-sm'>${proPrice}</p>
                    <p className='text-brand line-through font-josefin text-[12px]'>${ProDiscount}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleLatestProduct