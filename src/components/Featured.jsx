import React, { useEffect } from 'react'
import CommonHead from './common/CommonHead'
import SingleProducts from './common/SingleProducts'
import Slider from 'react-slick';
import axios from 'axios';

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
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then((res)=>console.log(res))
        .catch((err)=>(console.log(err)))
    }, []);

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