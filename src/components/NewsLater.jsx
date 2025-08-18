import React from 'react'
import { Link } from 'react-router'
import NewsLaterBg from '../assets/images/NewslaterBg.png'
const NewsLater = () => {
  return (
    <>
    <section id='NewsLater' className='mt-[170px]'>
        <div className="container">
            <div id="NewsLater-Row" className='pt-[174px] pb-[103px] flex flex-col items-center'>
                <h2 className='text-BlueText text-[35px] font-josefin font-bold leading-[155%] text-center w-[574px]'>Get latest Update By Subscribe our Newslater</h2>
                <Link className='py-[16px] px-[34px] text-white font-josefin text-[17px] bg-brand mt-[44px]' to={'/'}>Shop Now</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default NewsLater