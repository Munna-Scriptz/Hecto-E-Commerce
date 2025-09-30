import React from 'react'

const ShopHeader = () => {
  return (
    <>
        <div id='Shop-Header'>
            <div className='flex flex-wrap gap-y-7 items-center justify-between'>
                <div>
                    <h2 className='text-BlueText font-josefin font-bold md:text-[22px] text-xl'>Accessories & Fashion item </h2>
                    <p className='text-subText text-xs'>About 9,620 results (0.62 seconds)</p>
                </div>
                {/* --------------Functionality--------------------- */}
                <div className='flex flex-wrap items-center gap-[28px]'>
                    <div className='flex items-center gap-2'>
                        <label htmlFor='perPage' className='text-[#3F509E] font-lato'>Per Page:</label>
                        <input className='w-[55px] h-[22px] outline-none border-borderCol border-1 pl-5' type="number" id="perPage" placeholder='9' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <label htmlFor='bestMatch' className='text-[#3F509E] font-lato'>Sort By:</label>
                        <input className='w-[116px] h-[28px] outline-none border-borderCol border-1 pl-2' type="number" id="bestMatch" placeholder='Best Match' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShopHeader