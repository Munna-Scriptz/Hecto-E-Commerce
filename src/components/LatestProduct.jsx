import React from 'react'
import CommonHead from './common/CommonHead'
import SingleLatestProduct from './common/SingleLatestProduct'

const LatestProduct = () => {
  return (
    <>
    <section id='LatestProduct' className='mt-[130px]'>
        <div className="container">
            <div className="LatestProduct-Row">
                {/* ----------Header--------- */}
                <CommonHead text={'Latest Products'}/>
                <div>
                    <ul className='flex items-center justify-center gap-[60px] mt-2 font-lato text-lg text-[#151875]'>
                        <li><button className='hover:text-brand duration-[.3s] cursor-pointer'>New Arrival</button></li>
                        <li><button className='hover:text-brand duration-[.3s] cursor-pointer'>Best Seller</button></li>
                        <li><button className='hover:text-brand duration-[.3s] cursor-pointer'>Featured</button></li>
                        <li><button className='hover:text-brand duration-[.3s] cursor-pointer'>Special Offer</button></li>
                    </ul>
                </div>
                {/* ----------Latest Products--------- */}
                <div className='mt-[62px] flex items-center justify-between flex-wrap gap-y-[120px]'>
                    <SingleLatestProduct/>
                    <SingleLatestProduct/>
                    <SingleLatestProduct/>
                    <SingleLatestProduct/>
                    <SingleLatestProduct/>
                    <SingleLatestProduct/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default LatestProduct