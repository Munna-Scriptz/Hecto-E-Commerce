import React from 'react'
import { Link } from 'react-router'
import BannerImage1 from '../../assets/images/BannerImg1.svg'
import BannerImage2 from '../../assets/images/BannerImg2.svg'
import BannerImage3 from '../../assets/images/BannerImg3.svg'

import LightDeco from '../../assets/images/LightBannerDec.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Banner = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3500,
            responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
    };
  return (
    <>
    <section id='Banner' className='bg-[#F2F0FF] md:mt-[19px] py-[36px]'>
        <div className="container">
            <div className="Banner-Row relative">
                {/* -------------Slider------------- */}
                <div className="slider-Banner-container">
                    <div className='absolute top-[-36px] left-[-190px] lg:block hidden'><img src={LightDeco} alt="DecoImage" /></div>
                    <Slider {...settings}>
                        <div>
                            <div className='flex lg:flex-row flex-col-reverse items-center justify-between'>
                                <div id="bannerText">
                                    <h2 className='text-brand font-bold font-lato mb-3 lg:text-base text-sm'>Best Furniture For Your Castle....</h2>
                                    <h1 className='text-black lg:text-[53px] text-[26px] font-bold font-josefin tracking-[1.5%] lg:w-[644px] w-full'>New Furniture Collection Trends in 2020</h1>
                                    <p className='text-subText font-bold font-lato lg:leading-[28px] text-sm mt-3 lg:w-[559px] w-full lg:mb-[43px] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <Link to={'/shop'} className={`relative flex items-center justify-center md:py-[14px] py-[10px] md:px-[48px] px-[40px]  overflow-hidden text-white bg-brand group rounded-md w-fit`}>
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-BlueText rounded-full group-hover:w-56 group-hover:h-56"></span>
                                        <span className="relative font-josefin text-[16px]">Shop Now</span>
                                    </Link>
                                </div>
                                <div className='lg:mb-0 mb-[30px]'>
                                    <img src={BannerImage1} alt="Banner Image" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex lg:flex-row flex-col-reverse items-center justify-between'>
                                <div id="bannerText">
                                    <h2 className='text-brand font-bold font-lato mb-3 lg:text-base text-sm'>Best Furniture For Your Castle....</h2>
                                    <h1 className='text-black lg:text-[53px] text-[26px] font-bold font-josefin tracking-[1.5%] lg:w-[644px] w-full'>New Furniture Collection Trends in 2020</h1>
                                    <p className='text-subText font-bold font-lato lg:leading-[28px] text-sm mt-3 lg:w-[559px] w-full lg:mb-[43px] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <Link to={'/shop'} className={`relative flex items-center justify-center md:py-[14px] py-[10px] md:px-[48px] px-[40px]  overflow-hidden text-white bg-brand group rounded-md w-fit`}>
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-BlueText rounded-full group-hover:w-56 group-hover:h-56"></span>
                                        <span className="relative font-josefin text-[16px]">Shop Now</span>
                                    </Link>
                                </div>
                                <div className='lg:mb-0 mb-[30px]'>
                                    <img src={BannerImage2} alt="Banner Image" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex lg:flex-row flex-col-reverse items-center justify-between'>
                                <div id="bannerText">
                                    <h2 className='text-brand font-bold font-lato mb-3 lg:text-base text-sm'>Best Furniture For Your Castle....</h2>
                                    <h1 className='text-black lg:text-[53px] text-[26px] font-bold font-josefin tracking-[1.5%] lg:w-[644px] w-full'>New Furniture Collection Trends in 2020</h1>
                                    <p className='text-subText font-bold font-lato lg:leading-[28px] text-sm mt-3 lg:w-[559px] w-full lg:mb-[43px] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <Link to={'/shop'} className={`relative flex items-center justify-center md:py-[14px] py-[10px] md:px-[48px] px-[40px]  overflow-hidden text-white bg-brand group rounded-md w-fit`}>
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-BlueText rounded-full group-hover:w-56 group-hover:h-56"></span>
                                        <span className="relative font-josefin text-[16px]">Shop Now</span>
                                    </Link>
                                </div>
                                <div className='lg:mb-0 mb-[30px]'>
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