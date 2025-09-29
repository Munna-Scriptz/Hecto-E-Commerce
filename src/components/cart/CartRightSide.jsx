import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'

const CartRightSide = ({products}) => {
    
  const totalPrice = products.reduce((sum , no)=>{
    return sum + no.price
  } , 0)

    //   --------------------- Complete validations 
    const [place , setPlace] = useState({
        location: ''
    })
    const handleComplete = ()=>{
        console.log('Hello')
    }
  return (
    <>
        <main className='flex items-center flex-col'>
            <section className='w-[370px]'>
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

                    <button className='mt-[35px] w-full py-3 bg-[#19D16F] text-white font-lato font-bold text-sm cursor-pointer hover:bg-BlueText duration-300 rounded-[4px]'>Proceed To Checkout</button>
                </div>
            </section>

            <section className='w-[370px] mt-[32px]'>
                <h2 className='text-center text-[#1D3178] font-josefin font-bold text-xl mb-10'>Calculate Shopping</h2>
                <div className='bg-[#F4F4FC] rounded-[4px] py-[34px] px-[24px]'>
                    <div>
                        <input className='border-b-1 border-[#C7CEE4] font-josefin text-base text-subText w-full h-[30px] outline-none' placeholder='Bangladesh' type="text"/>
                        <input className='border-b-1 border-[#C7CEE4] font-josefin text-base text-subText w-full h-[30px] outline-none mt-[38px]' placeholder='Uttara Dhaka - 1200' type="text"/>
                        <input className='border-b-1 border-[#C7CEE4] font-josefin text-base text-subText w-full h-[30px] outline-none mt-[38px]' placeholder='Postal Code' type="text"/>
                    </div>
                    <button className='mt-[35px] w-full py-3 bg-brand text-white font-lato font-bold text-sm cursor-pointer hover:bg-BlueText duration-300 rounded-[4px]'>Proceed To Checkout</button>
                </div>
            </section>
        </main>
    </>
  )
}

export default CartRightSide