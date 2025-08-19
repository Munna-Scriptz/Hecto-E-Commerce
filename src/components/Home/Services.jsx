import React from 'react'
import CommonHead from '../common/CommonHead'
import img1 from '../../assets/images/ServiceIcon1.svg'
import img2 from '../../assets/images/ServiceIcon2.svg'
import img3 from '../../assets/images/ServiceIcon3.svg'
import img4 from '../../assets/images/ServiceIcon4.svg'
const Services = () => {
  return (
    <>
    <section id='Services' className='mt-[60px]'>
        <div className="container">
            <div className="Services-Row">
              <CommonHead text={'What Shopex Offer!'}/>
            </div>
            {/* --------Services------- */}
            <div className='flex items-center justify-between'>
              <div className='w-[270px] p-[26px] mt-[41px] flex flex-col items-center'>
                <img src={img1} alt="Icon" />
                <h2 className='text-[22px] text-BlueText font-josefin font-semibold mt-[27px]'>Free Shipping</h2>
                <p className='text-base text-[#1A0B5B4D] leading-[25px] font-bold font-lato text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
              <div className='w-[270px] p-[26px] mt-[41px] flex flex-col items-center'>
                <img src={img2} alt="Icon" />
                <h2 className='text-[22px] text-BlueText font-josefin font-semibold mt-[27px]'>Money Refund</h2>
                <p className='text-base text-[#1A0B5B4D] leading-[25px] font-bold font-lato text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
              <div className='w-[270px] p-[26px] mt-[41px] flex flex-col items-center'>
                <img src={img3} alt="Icon" />
                <h2 className='text-[22px] text-BlueText font-josefin font-semibold mt-[27px]'>Best Products</h2>
                <p className='text-base text-[#1A0B5B4D] leading-[25px] font-bold font-lato text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
              <div className='w-[270px] p-[26px] mt-[41px] flex flex-col items-center'>
                <img src={img4} alt="Icon" />
                <h2 className='text-[22px] text-BlueText font-josefin font-semibold mt-[27px]'>24/7 Support</h2>
                <p className='text-base text-[#1A0B5B4D] leading-[25px] font-bold font-lato text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services