import React, { useEffect, useState } from 'react'
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
    // ---------------Api--------------
    // ------Hooks 
    const [product , setProduct] = useState([])
    // ------Axios 
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products/?categoryId=3')
        .then((res)=>(setProduct(res.data)))
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
                            {
                                product.map((item , i)=>(
                                    <SingleProducts proImg={item.images[0]} proName={item.title} ProDesc={item.description} proPrice={item.price}/>
                                ))
                            }
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