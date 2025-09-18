import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import axios from 'axios'
import SingleProducts from '../common/SingleProducts'


const DetailsRelated = () => {
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
    }
    const [product , setProduct] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then((res)=>setProduct(res.data.products))
        .catch((err)=>console.log(err))
    }, [])

  return (
    <>
        <section id='Related-Products'>
            <div className="container">
                <div id="Related-Products-Row">
                    <h2 className='text-primary text-4xl font-bold mb-[47px]'>Related Products</h2>
                    {/* --------------Cards------------------ */}
                    <div className='slider-Featured-container'>
                        <Slider {...settings}>
                            {
                                product.slice(0,9).map((item , i)=>(
                                    <SingleProducts key={i} proImg={item.images[0]} proName={item.title} ProDesc={item.description} proPrice={item.price}/>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DetailsRelated