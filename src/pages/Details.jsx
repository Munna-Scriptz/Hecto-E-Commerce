import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import ProductSlide from "product-slide";
import "product-slide/style.css";
import proImg from '../assets/images/ProductImage.png'
import { FaRegHeart, FaStar } from 'react-icons/fa';
import DetailsText from '../components/Details/DetailsText';
import DetailsRelated from '../components/Details/DetailsRelated';
import Brands from '../components/Home/Brands';
const Details = () => {


    const images = [
        proImg,
        proImg,
        proImg,
    ];

  return (
    <>
        <BreadCrumb pageName={'Product Details'} to={'details'}/>
        {/* -------------------Product Details */}
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div className='w-[700px]'>
                    <ProductSlide images={images} settings={{ direction: "vertical", zoom: true, thumbnailPosition: "left", transitionDuration: 300,}}/>
                </div>
                <div className='w-[560px]'>
                    <h2 className='text-primary text-4xl font-semibold mb-3 font-josefin'>PlayWood arm chair</h2>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-1 text-[#FFC416] text-[10px]'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className='text-primary font-josefin'>(54)</p>
                    </div>
                    {/* ---------Price  */}
                    <div className='flex items-center gap-4.5'>
                        <p className='text-primary font-josefin mt-3'>$32.00</p>
                        <p className='text-brand line-through font-josefin mt-3'>$52.00</p>
                    </div>
                    {/* ------------Details  */}
                    <p className='text-subText font-josefin leading-[29px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                    {/* ------------Add to Card  */}
                    <div className='flex items-center gap-[20px] mt-[34px]'>
                        <p className='text-primary font-josefin'>Add To cart</p>
                        <div className='w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-brand hover:text-white text-brand cursor-pointer duration-300'>
                            <FaRegHeart />
                        </div>
                    </div>
                    {/* ------------Category  */}
                    <p className='text-primary font-josefin mt-4'>Categories : Furniture</p>
                    <p className='text-primary font-josefin mt-4'>Tags : Furniture</p>
                </div>
            </div>
        </div>
        {/* -------------------Product Texts */}
        <DetailsText/>
        {/* -------------------Related Products */}
        <div className='mt-[240px]'>
            <DetailsRelated/>
        </div>
        {/* -------------------Brands */}
        <Brands/>
    </>
  )
}

export default Details