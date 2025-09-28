import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import AboutPageImg from '../assets/images/AboutPageImage.png'
import { Link } from 'react-router'
import img1 from '../assets/images/ServiceIcon1.svg'
import img2 from '../assets/images/ServiceIcon2.svg'
import img3 from '../assets/images/ServiceIcon3.svg'
import img4 from '../assets/images/ServiceIcon4.svg'
import Client from '../assets/images/AboutClient.png'
const AboutUs = () => {
  return (
    <>
    <section id='About-Us'>
        {/* ---------BreadCrumb---------- */}
        <BreadCrumb pageName={'About Us'} to={'about'}/>
        <div className="container">
            <div id="About-Us-Row">
                {/* -----------About Page Details--------- */}
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <img src={AboutPageImg} alt="About Us Image" />
                    <div className='lg:w-[550px] w-full lg:mt-0 mt-12'>
                        <h2 className='text-BlueText lg:text-[36px] lg:text-start text-center text-[26px] font-josefin font-bold lg:leading-[48px]'>Know About Our E-Commerce Business, History</h2>
                        <p className='text-subText font-lato leading-[26px] mt-[14px] mb-[80px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <Link className='bg-brand rounded-[4px] py-[13px] px-[30px] text-lg font-medium text-white font-lato' to={'/'}>Contact Us</Link>
                    </div>
                </div>
                {/* -----------Our Features--------- */}
                <h2 className='text-black font-josefin lg:text-[42px] text-[36px] font-bold text-center mb-[67px] mt-[141px]'>Our Features</h2>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='lg:w-[270px] w-full p-[26px] mt-[41px] flex flex-col items-center duration-[.3s] border-b-2 border-white hover:border-[#FF9100]'>
                      <img src={img1} alt="Icon" />
                      <h2 className='text-[22px] text-BlueText font-josefin font-semibold mt-[27px]'>Free Shipping</h2>
                      <p className='text-base text-[#1A0B5B4D] leading-[25px] font-bold font-lato text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className='lg:w-[270px] w-full p-[26px] mt-[41px] flex flex-col items-center duration-[.3s] border-b-2 border-white hover:border-[#FF9100]'>
                      <img src={img2} alt="Icon" />
                      <h2 className='text-[22px] text-BlueText font-josefin font-semibold mt-[27px]'>Money Refund</h2>
                      <p className='text-base text-[#1A0B5B4D] leading-[25px] font-bold font-lato text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className='lg:w-[270px] w-full p-[26px] mt-[41px] flex flex-col items-center duration-[.3s] border-b-2 border-white hover:border-[#FF9100]'>
                      <img src={img3} alt="Icon" />
                      <h2 className='text-[22px] text-BlueText font-josefin font-semibold mt-[27px]'>Best Products</h2>
                      <p className='text-base text-[#1A0B5B4D] leading-[25px] font-bold font-lato text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className='lg:w-[270px] w-full p-[26px] mt-[41px] flex flex-col items-center duration-[.3s] border-b-2 border-white hover:border-[#FF9100]'>
                      <img src={img4} alt="Icon" />
                      <h2 className='text-[22px] text-BlueText font-josefin font-semibold mt-[27px]'>24/7 Support</h2>
                      <p className='text-base text-[#1A0B5B4D] leading-[25px] font-bold font-lato text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
                {/* -----------Our Client say--------- */}
                <div className='my-[200px]'>
                    <h2 className='text-black font-josefin lg:text-[42px] text-[36px] font-bold text-center mb-[67px] mt-[141px]'>Our Client Say!</h2>
                    <div className='flex flex-col items-center'>
                        <img src={Client} alt="Client" />
                        <h2 className='text-black font-lato text-[22px] font-bold text-center mb-[12px] mt-[25px]'>Selina Gomez</h2>
                        <p className='text-subText font-lato text-[12px] font-semibold text-center mb-[14px]'>Selina Gomez</p>
                        <p className='text-subText font-lato text-base lg:w-[689px] font-bold leading-[26px] text-center mb-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUs