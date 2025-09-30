import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { CartAllIds } from '../../CartSlice'
import Loading from '../common/Loading'

const CartRightSide = ({products}) => {
const [loader , setLoader] = useState(true)
  const totalPrice = products.reduce((sum , no)=>{
    return sum + no.price
  } , 0)

    //   -------------------Hide Checkout 
    const [checkout , hideCheckout] = useState(true)

    //   --------------------- Complete validations 
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [place , setPlace] = useState({
        location: '',
        currentLoc: '',
        postalCode: '',
        PlaceError: ''
    })

    const handleComplete = ()=>{
        if(!place.location || !place.currentLoc || !place.postalCode) return setPlace((prev)=>({...prev , PlaceError : 'Please Fill all the inputs *' }))
            setTimeout(() => {
                navigate('/complete')
                setLoader(true)
                localStorage.removeItem('productId')
                dispatch(CartAllIds([]))
            }, 3000);
        setLoader(false)
    
    }
  return (
    <>
        <Loading turnOff={loader}/>
        <main className='flex items-center flex-col lg:w-auto w-full lg:mt-0 mt-10'>
            <section className={`${checkout? '' : 'hidden'} lg:w-[370px] w-full`}>
                <h2 className='text-center text-[#1D3178] font-josefin font-bold text-xl mb-10'>Cart Totals</h2>
                <div className='bg-[#F4F4FC] rounded-[4px] py-[34px] px-[24px]'>
                    <div className='flex items-center justify-between border-b-1 border-[#E8E6F1] pb-3'>
                        <h2 className='text-[#1D3178] text-lg font-semibold font-lato'>Subtotals:</h2>
                        <h2 className='text-[#1D3178] text-lg font-semibold font-lato text-ellipsis w-17 whitespace-nowrap overflow-hidden'>${totalPrice}</h2>
                    </div>

                    <div className='flex items-center justify-between border-b-1 border-[#E8E6F1] pb-3 mt-[34px]'>
                        <h2 className='text-[#1D3178] text-lg font-semibold font-lato'>Totals:</h2>
                        <h2 className='text-[#1D3178] text-lg font-semibold font-lato text-ellipsis w-17 whitespace-nowrap overflow-hidden'>${totalPrice + 60}</h2>
                    </div>

                    <div className='mt-[27px] flex items-center gap-3'>
                        <div className='w-[16px] h-[16px] text-white text-[13px] bg-[#19D16F] flex items-center justify-center rounded-full'>
                            <FaCheck />
                        </div>
                        <p className='text-subText font-lato text-xs '>Shipping & taxes calculated at checkout</p>
                    </div>

                    <button onClick={()=>hideCheckout(!checkout)} className='mt-[35px] w-full py-3 bg-[#19D16F] text-white font-lato font-bold text-sm cursor-pointer hover:bg-BlueText duration-300 rounded-[4px]'>Proceed To Checkout</button>
                </div>
            </section>

            <section className={`${checkout? 'hidden' : ''} lg:w-[370px] w-full`}>
                <h2 className='text-center text-[#1D3178] font-josefin font-bold text-xl mb-10'>Calculate Shopping</h2>
                <div className='bg-[#F4F4FC] rounded-[4px] py-[34px] px-[24px]'>
                    <h2 className='text-center text-red-500 font-josefin mb-5'>{place.PlaceError}</h2>
                    <div>
                        <input onChange={(e)=>setPlace((prev)=>({...prev , location: e.target.value, PlaceError: ''}))} className='border-b-1 border-[#C7CEE4] font-josefin text-base text-subText w-full h-[30px] outline-none' placeholder='Bangladesh' type="text"/>
                        <input onChange={(e)=>setPlace((prev)=>({...prev , currentLoc: e.target.value, PlaceError: ''}))} className='border-b-1 border-[#C7CEE4] font-josefin text-base text-subText w-full h-[30px] outline-none mt-[38px]' placeholder='Uttara Dhaka - 1200' type="text"/>
                        <input onChange={(e)=>setPlace((prev)=>({...prev , postalCode: e.target.value, PlaceError: ''}))} className='border-b-1 border-[#C7CEE4] font-josefin text-base text-subText w-full h-[30px] outline-none mt-[38px]' placeholder='Postal Code' type="text"/>
                    </div>
                    <button onClick={handleComplete} className='mt-[35px] w-full py-3 bg-brand text-white font-lato font-bold text-sm cursor-pointer hover:bg-BlueText duration-300 rounded-[4px]'>Proceed To Checkout</button>
                </div>
            </section>
        </main>
    </>
  )
}

export default CartRightSide