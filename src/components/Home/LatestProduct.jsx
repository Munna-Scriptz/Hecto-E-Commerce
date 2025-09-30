import React, { useEffect, useState } from 'react'
import CommonHead from '../common/CommonHead'
import SingleLatestProduct from '../common/SingleLatestProduct'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { CartAllIds } from '../../CartSlice'

const LatestProduct = () => {
    // ---------------Api--------------
    // ------Hooks 
    const [product , setProduct] = useState([])
    // ------Axios 
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((res)=>(setProduct(res.data.products)))
        .catch((err)=>(console.log(err)))
    }, []);

    // -----------Handle pagination
    const [page, setPage] = useState(0);
    const itemsPerPage = 6; 
    const NormalPage = () => {
        setPage(prev => prev - 1);
    };
    const handlePeg = () => {
        setPage(prev => prev + 1);
    };
    const handlePeg2 = () => {
        setPage(prev => prev + 1);
    };
    const handlePeg3 = () => {
        setPage(prev => prev + 1);
    };

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
    <section id='LatestProduct' className='mt-[130px]'>
        <div className="container">
            <div className="LatestProduct-Row">
                {/* ----------Header--------- */}
                <CommonHead text={'Latest Products'}/>
                <div>
                    <ul className='flex items-center justify-center lg:gap-[60px] gap-[15px] mt-2 font-lato lg:text-lg text-sm text-[#151875]'>
                        <li><button onClick={NormalPage} className='hover:text-brand duration-[.3s] cursor-pointer'>New Arrival</button></li>
                        <li><button onClick={handlePeg} className='hover:text-brand duration-[.3s] cursor-pointer'>Best Seller</button></li>
                        <li><button onClick={handlePeg2} className='hover:text-brand duration-[.3s] cursor-pointer'>Featured</button></li>
                        <li><button onClick={handlePeg3} className='hover:text-brand duration-[.3s] cursor-pointer'>Special Offer</button></li>
                    </ul>
                </div>
                {/* ----------Latest Products--------- */}
                <div className='mt-[62px] flex items-center justify-between flex-wrap lg:gap-y-[120px] gap-y-[60px]'>
                    {
                        product.slice(page * itemsPerPage, (page + 1) * itemsPerPage).map((item, i)=>(
                            <SingleLatestProduct handleCart={()=>handleCart(item.id)} handleNav={()=>handleNav(item.id)} key={i} proImage={item.thumbnail} proName={item.title} proPrice={item.price} ProDiscount={item.discountPercentage}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default LatestProduct