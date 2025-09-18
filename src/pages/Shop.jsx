import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import ShopHeader from '../components/shop/ShopHeader'
import SingleShopProduct from '../components/common/SingleShopProduct'
import Brands from '../components/Home/Brands'
import axios from 'axios'

const Shop = () => {
  const [product , setProducts] = useState([])


  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>setProducts(res.data.products))
    .catch((err)=>console.log(err))
  } , [])

  return (
    <>
      <div className="container">
        <BreadCrumb pageName={'Shop'} to={'shop'}/>
        <ShopHeader/>


        <div className="mt-[144px]">
          <div className='flex items-center gap-[53px] flex-wrap'>
            {
              product.map((item , i)=>(
                <SingleShopProduct proImage={item.thumbnail} proName={item.title} proPrice={item.price} key={i}/>
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