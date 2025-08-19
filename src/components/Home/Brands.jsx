import React from 'react'
import brand from '../../assets/images/BrandsImage.png'
const Brands = () => {
  return (
    <>
    <section id='Brands' className='mt-[96px]'>
        <div className="container">
            <div id="Brands-Row" className='flex items-center justify-center'>
                <img src={brand} alt="Image" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Brands