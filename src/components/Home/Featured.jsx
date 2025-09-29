import React, { useEffect, useState } from 'react'
import CommonHead from '../common/CommonHead'
import SingleProducts from '../common/SingleProducts'
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { CartAllIds, CartNumbers } from '../../CartSlice';
const Featured = () => {
   const settings = {
    infinite: true,
    slidesToShow: 3,
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
   // ---------------Api--------------
    // ------Hooks 
    const [product , setProduct] = useState([])
    // ------Axios 
    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/furniture')
        .then((res)=>(setProduct(res.data.products)))
        .catch((err)=>(console.log(err)))
    }, []);

    // ---------------------Redirect To Details 
    const navigate = useNavigate()

    const handleNav = (idNo)=>{
      navigate(`/details/${idNo}`)
    }

    // ----------------------------------- Add to cart 
    const dispatch = useDispatch();

    useEffect(() => {
      const ids = JSON.parse(localStorage.getItem('productId')) || [];
      dispatch(CartAllIds(ids));
      dispatch(CartNumbers(ids));
    }, [dispatch]);

    const handleCart = (e) => {
      const cartIds = JSON.parse(localStorage.getItem('productId')) || [];
      cartIds.push(e);
      localStorage.setItem('productId', JSON.stringify(cartIds));
      
      dispatch(CartAllIds(cartIds));
      dispatch(CartNumbers(cartIds));
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
                            {
                                product.map((item , i)=>(
                                    <SingleProducts addToCart={()=>handleCart(item.id)} handleNav={()=> handleNav(item.id)} key={i} proImg={item.images[0]} proName={item.title} ProDesc={item.description} proPrice={item.price}/>
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