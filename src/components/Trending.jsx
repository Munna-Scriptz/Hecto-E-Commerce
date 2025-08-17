import React from 'react'
import CommonHead from './common/CommonHead'
import SingleProducts from './common/SingleProducts'
import Slider from 'react-slick';
import { Link } from 'react-router';
import clock from '../assets/images/ClockImg.png'
import desk from '../assets/images/DeskImg.png'
import product from '../assets/images/ProductImage.png'
import product2 from '../assets/images/BannerImg1.svg'
import product3 from '../assets/images/BannerImg2.svg'

const Trending = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
  return (
    <>
    <section id='Trending' className='mt-[130px]'>
        <div className="container">
            <div id="Trending-Row">
                <CommonHead text={'Trending Products'}/>
                {/* ----------Slider------------ */}
                <div className='mt-[34px]'>
                    <div className="slider-Featured-container">
                        <Slider {...settings}>
                            <SingleProducts/>
                            <SingleProducts/>
                            <SingleProducts/>
                            <SingleProducts/>
                            <SingleProducts/>
                        </Slider>
                    </div>
                </div>
            </div>
            {/* ---------------Discount Product------------- */}
            <div id="DiscountRow" className='mt-[112px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col items-start w-[420px] py-[34px] px-[24px]'>
                        <div>
                            <h2 className='text-BlueText text-[26px] font-josefin font-semibold'>23% off in all products</h2>
                            <Link className='text-brand underline font-lato font-semibold' to={'/'}>Shop Now</Link>
                        </div>
                        <img src={clock} alt="Clock" />
                    </div>
                    <div className='flex flex-col items-start w-[420px] py-[34px] px-[24px]'>
                        <div>
                            <h2 className='text-BlueText text-[26px] font-josefin font-semibold'>23% off in all products</h2>
                            <Link className='text-brand underline font-lato font-semibold' to={'/'}>Shop Now</Link>
                        </div>
                        <img src={desk} alt="Clock" />
                    </div>
                    <div className='flex flex-col gap-5 w-[420px] py-[34px] px-[24px]'>
                        <div className='flex items-center gap-[30px]'>
                            <img className='w-[84px]' src={product} alt="image" />
                            <div>
                                <h2 className='text-base text-BlueText font-josefin font-semibold'>Executive Seat chair</h2>
                                <p className='text-xm text-BlueText font-josefin font-nal line-through'>$32.00</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[30px]'>
                            <img className='w-[84px]' src={product2} alt="image" />
                            <div>
                                <h2 className='text-base text-BlueText font-josefin font-semibold'>Executive Seat chair</h2>
                                <p className='text-xm text-BlueText font-josefin font-nal line-through'>$32.00</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[30px]'>
                            <img className='w-[84px]' src={product3} alt="image" />
                            <div>
                                <h2 className='text-base text-BlueText font-josefin font-semibold'>Executive Seat chair</h2>
                                <p className='text-xm text-BlueText font-josefin font-nal line-through'>$32.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Trending