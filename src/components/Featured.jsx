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
        const fetchData = async () => {
            const options = {
  method: 'GET',
  url: 'https://real-time-amazon-data.p.rapidapi.com/products-by-category',
  params: {
    category_id: '281407',
    page: '1',
    country: 'US',
    sort_by: 'RELEVANCE',
    product_condition: 'ALL',
    is_prime: 'false',
    deals_and_discounts: 'NONE'
  },
  headers: {
    'x-rapidapi-key': '46da0797b8msh29d75c3a1b0bc61p10e3e9jsnad1a851ba009',
    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
        };
  fetchData();
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