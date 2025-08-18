import React from 'react'
import CommonHead from './common/CommonHead'
import SingleProducts from './common/SingleProducts'
import Slider from 'react-slick';

const Featured = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2500,
    };
  return (
    <>
    <section id='Featured' className='mt-[130px]'>
        <div className="container">
            <div className="Featured-Row">
                <CommonHead text={'Featured Products'}/>
                {/* ------------Slider---------- */}
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
        </div>
    </section>
    </>
  )
}

export default Featured