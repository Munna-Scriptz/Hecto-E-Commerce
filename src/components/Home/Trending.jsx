import React, { useEffect, useState } from 'react'
import CommonHead from '../common/CommonHead'
import SingleProducts from '../common/SingleProducts'
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router';
import clock from '../../assets/images/ClockImg.png'
import desk from '../../assets/images/DeskImg.png'
import product1 from '../../assets/images/BannerImg1.svg'
import product2 from '../../assets/images/BannerImg1.svg'
import product3 from '../../assets/images/BannerImg2.svg'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { CartAllIds } from '../../CartSlice';

const Trending = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
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
    // ---------------Api--------------
    // ------Hooks 
    const [product , setProduct] = useState([])
    // ------Axios 
    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/home-decoration')
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
    }, [dispatch]);

    const handleCart = (e) => {
      const cartIds = JSON.parse(localStorage.getItem('productId')) || [];
      cartIds.push(e);
      localStorage.setItem('productId', JSON.stringify(cartIds));
      
      dispatch(CartAllIds(cartIds));
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
                            {
                                product.map((item, i)=>(
                                    <SingleProducts addToCart={()=>handleCart(item.id)} handleNav={()=>handleNav(item.id)} key={i} proImg={item.thumbnail} proName={item.title} proPrice={item.price} ProDiscount={item.discountPercentage}/>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
            {/* ---------------Discount Product------------- */}
            <div id="DiscountRow" className='mt-[112px]'>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='flex flex-col items-start lg:w-[420px] w-full py-[34px] px-[24px]'>
                        <div>
                            <h2 className='text-BlueText text-[26px] font-josefin font-semibold'>23% off in all products</h2>
                            <Link className='text-brand underline font-lato font-semibold' to={'/shop'}>Shop Now</Link>
                        </div>
                        <img src={clock} alt="Clock" />
                    </div>
                    <div className='flex flex-col items-start lg:w-[420px] w-full py-[34px] px-[24px]'>
                        <div>
                            <h2 className='text-BlueText text-[26px] font-josefin font-semibold'>23% off in all products</h2>
                            <Link className='text-brand underline font-lato font-semibold' to={'/shop'}>Shop Now</Link>
                        </div>
                        <img src={desk} alt="Clock" />
                    </div>
                    <div className='flex flex-col gap-5 lg:w-[420px] w-full py-[34px] px-[24px]'>
                        <div className='flex items-center gap-[30px]'>
                            <img className='w-[84px]' src={product1} alt="image" />
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