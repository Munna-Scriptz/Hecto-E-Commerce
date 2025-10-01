import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import ProductSlide from "product-slide";
import "product-slide/style.css";
import { FaRegHeart, FaStar } from 'react-icons/fa';
import DetailsText from '../components/Details/DetailsText';
import DetailsRelated from '../components/Details/DetailsRelated';
import Brands from '../components/Home/Brands';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { CartAllIds } from '../CartSlice';
import { Bounce, toast } from 'react-toastify';
import Loading from '../components/common/Loading';


const Details = () => {
    // ---------------------Api Work-------------------------
    const [loader , setLoader] = useState(false)
    const [product , setProduct] = useState([])
    const params = useParams()

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${params.productID}`)
        .then((res)=>(setProduct(res.data) , setLoader(true)))
        .catch((err)=>console.log(err))
    }, [params])

    // ---------------------Images-------------------------
    const images = [
        product.thumbnail,
        product.thumbnail,
        product.thumbnail,
    ];

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

      toast.success('Cart Added !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
    };
  return (
    <>
        <BreadCrumb pageName={'Product Details'} to={'details'}/>
        <Loading turnOff={loader}/>

        {/* -------------------Product Details */}
        <div className='container'>
            <div className='flex lg:flex-row flex-col items-center justify-between'>
                <div className='lg:w-[650px] w-full lg:block hidden'>
                    <ProductSlide thumbnailClassName='w-[160px]' images={images} settings={{ direction: "vertical", zoom: true, thumbnailPosition: "left", transitionDuration: 300,}}/>
                </div>
                <div className='w-full lg:hidden mb-[60px]'>
                    <ProductSlide thumbnailClassName='w-[80px]' images={images} settings={{ direction: "horizontal", zoom: true, thumbnailPosition: "bottom", transitionDuration: 300,}}/>
                </div>
                <div className='lg:w-[560px] w-full'>
                    <h2 className='text-primary md:text-4xl text-[22px] font-semibold mb-3 font-josefin'>{product.title}</h2>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-1 text-[#FFC416] text-[10px]'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className='text-primary font-josefin'>({product.rating})</p>
                    </div>
                    {/* ---------Price  */}
                    <div className='flex items-center gap-4.5'>
                        <p className='text-primary font-josefin mt-3'>${product.price}</p>
                        <p className='text-brand line-through font-josefin mt-3'>$52.00</p>
                    </div>
                    {/* ------------Details  */}
                    <p className='text-subText md:text-base text-sm font-josefin md:leading-[29px] mt-3'>{product.description}</p>
                    {/* ------------Add to Card  */}
                    <div className='flex items-center md;gap-[20px] gap-[10px] md:mt-[34px] mt-[16px]'>
                        <p className='text-primary font-josefin'>Add To cart</p>
                        <div onClick={()=>handleCart(product.id)} className='w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-brand hover:text-white text-brand cursor-pointer duration-300'>
                            <FaRegHeart />
                        </div>
                    </div>
                    {/* ------------Category  */}
                    <p className='text-primary font-josefin mt-4'>Categories : {product.category}</p>
                    <p className='text-primary font-josefin mt-4'>Tags : {product.tags}</p>
                </div>
            </div>
        </div>




        {/* -------------------Product Texts */}
        <DetailsText/>
        {/* -------------------Related Products */}
        <div className='lg:mt-[240px] mt-[80px]'>
            <DetailsRelated/>
        </div>
        {/* -------------------Brands */}
        <Brands/>
    </>
  )
}

export default Details