import React from 'react'
import CommonHead from './CommonHead'
import SingleCategory from './SingleCategory'
import Slider from 'react-slick';

const TopCategory = () => {
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
    <section id='TopCategory' className='mt-[80px]'>
        <div className="container">
            <div className="TopCategory-Row">
              <CommonHead text={'Top Categories'}/>
              {/* -----------Category Item-------------  */}
              <div className='mt-[42px]'>
                    <div className="slider-Category-container">
                        <Slider {...settings}>
                          <SingleCategory/>
                          <SingleCategory/>
                          <SingleCategory/>
                          <SingleCategory/>
                          <SingleCategory/>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default TopCategory