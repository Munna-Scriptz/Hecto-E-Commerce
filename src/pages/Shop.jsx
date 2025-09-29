import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import ShopHeader from '../components/shop/ShopHeader'
import SingleShopProduct from '../components/common/SingleShopProduct'
import Brands from '../components/Home/Brands'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { CartAllIds } from '../CartSlice';
const Shop = () => {
  const [product , setProducts] = useState([])


  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>setProducts(res.data.products))
    .catch((err)=>console.log(err))
  } , [])
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
      <BreadCrumb pageName={'Shop'} to={'shop'}/>
      <div className="container">
        <ShopHeader/>


        <div className="mt-[64px]">
          <div className='flex items-center gap-[53px] flex-wrap'>
            {
              product.map((item , i)=>(
                <SingleShopProduct handleCart={()=>handleCart(item.id)} handleNav={()=>handleNav(item.id)} proImage={item.thumbnail} proName={item.title} proPrice={item.price} key={i}/>
              ))
            }
        </div>
        </div>



        <Brands/>
      </div>
    </>
  )
}

export default Shop