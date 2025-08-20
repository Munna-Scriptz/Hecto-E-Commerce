import React from 'react'
import { Link } from 'react-router'
const NewsLater = () => {
  return (
    <>
    <section id='NewsLater' className='mt-[170px]'>
        <div className="container">
            <div id="NewsLater-Row" className='pt-[174px] pb-[103px] flex flex-col items-center'>
                <h2 className='text-BlueText lg:text-[35px] text-[28px] lg:mb-0 mb-10 font-josefin font-bold leading-[155%] text-center lg:w-[574px] w-full'>Get latest Update By Subscribe our Newslater</h2>
                <Link to={'/shop'} className={`relative flex items-center justify-center py-[12px] px-[44px]  overflow-hidden text-white bg-brand group rounded-md w-fit`}>
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-BlueText rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="relative font-josefin text-[16px]">Shop Now</span>
                </Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default NewsLater