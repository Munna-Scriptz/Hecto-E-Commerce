import React, { useEffect, useState } from 'react'
import CommonHead from '../common/CommonHead'
import SingleProducts from '../common/SingleProducts'
import Slider from 'react-slick';
import axios from 'axios';

const Featured = () => {
   const settings = {
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
    // // ---------------Api--------------
    // // ------Hooks 
    // const [product , setProduct] = useState([])
    // // ------Axios 
    // useEffect(() => {
    //     axios.get('https://api.escuelajs.co/api/v1/products/?categoryId=3')
    //     .then((res)=>(setProduct(res.data)))
    //     .catch((err)=>(console.log(err)))
    // }, []);
    // console.log(product)
     // ---------------Api--------------
    // ------Hooks 
    const [product , setProduct] = useState([])
    // ------Axios 
    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/furniture')
        .then((res)=>(setProduct(res.data.products)))
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
                                    <SingleProducts key={i} proImg={item.images[0]} proName={item.title} ProDesc={item.description} proPrice={item.price}/>
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