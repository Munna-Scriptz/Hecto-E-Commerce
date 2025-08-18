import React from 'react'
import { Link } from 'react-router'
import BannerImage1 from '../assets/images/BannerImg1.svg'
import BannerImage2 from '../assets/images/BannerImg2.svg'
import BannerImage3 from '../assets/images/BannerImg3.svg'

import LightDeco from '../assets/images/LightBannerDec.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CommonButton from './common/CommonButton'
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3500,
    };
  return (
    <>
    <section id='Banner' className='bg-[#F2F0FF] mt-[19px] py-[36px]'>
        <div className="container">
            <div className="Banner-Row relative">
                {/* -------------Slider------------- */}
                <div className="slider-Banner-container">
                    <div className='absolute top-[-36px] left-[-190px]'><img src={LightDeco} alt="DecoImage" /></div>
                    <Slider {...settings}>
                        <div>
                            <div className='flex items-center justify-between'>
                                <div id="bannerText">
                                    <h2 className='text-brand font-bold font-lato mb-3'>Best Furniture For Your Castle....</h2>
                                    <h1 className='text-black text-[53px] font-bold font-josefin tracking-[1.5%] w-[644px]'>New Furniture Collection Trends in 2020</h1>
                                    <p className='text-subText font-bold font-lato leading-[28px] mt-3 w-[559px] mb-[43px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <CommonButton text={'Shop Now'} py={'13'} px={'40'}/>
                                </div>
                                <div>
                                    <img src={BannerImage1} alt="Banner Image" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <div id="bannerText">
                                    <h2 className='text-brand font-bold font-lato mb-3'>Best Furniture For Your Castle....</h2>
                                    <h1 className='text-black text-[53px] font-bold font-josefin tracking-[1.5%] w-[644px]'>New Furniture Collection Trends in 2020</h1>
                                    <p className='text-subText font-bold font-lato leading-[28px] mt-3 w-[559px] mb-[43px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <Link className='bg-brand py-4 px-10 text-white text-[17px] font-josefin font-semibold' to={'/'}>Shop Now</Link>
                                </div>
                                <div>
                                    <img src={BannerImage2} alt="Banner Image" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <div id="bannerText">
                                    <h2 className='text-brand font-bold font-lato mb-3'>Best Furniture For Your Castle....</h2>
                                    <h1 className='text-black text-[53px] font-bold font-josefin tracking-[1.5%] w-[644px]'>New Furniture Collection Trends in 2020</h1>
                                    <p className='text-subText font-bold font-lato leading-[28px] mt-3 w-[559px] mb-[43px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <Link className='bg-brand py-4 px-10 text-white text-[17px] font-josefin font-semibold' to={'/'}>Shop Now</Link>
                                </div>
                                <div>
                                    <img src={BannerImage3} alt="Banner Image" />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner