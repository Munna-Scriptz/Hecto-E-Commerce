import React, { useEffect, useState } from 'react'
import CommonHead from '../common/CommonHead'
import SingleCategory from '../common/SingleCategory'
import Slider from 'react-slick';
import axios from 'axios';

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
   // ---------------Api--------------
    // ------Hooks 
    const [product , setProduct] = useState([])
    // ------Axios 
    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/furniture')
        .then((res)=>(setProduct(res.data.products)))
        .catch((err)=>(console.log(err)))
    }, []);
    console.log(product)
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
                          {
                            product.map((item , i )=>(
                              <SingleCategory proImg={item.images[0]} proName={item.title} ProDesc={item.description} proPrice={item.price}/>
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

export default TopCategory