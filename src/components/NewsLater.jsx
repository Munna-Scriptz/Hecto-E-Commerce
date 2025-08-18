import React from 'react'
import { Link } from 'react-router'
import NewsLaterBg from '../assets/images/NewslaterBg.png'
import CommonButton from './common/CommonButton'
const NewsLater = () => {
  return (
    <>
    <section id='NewsLater' className='mt-[170px]'>
        <div className="container">
            <div id="NewsLater-Row" className='pt-[174px] pb-[103px] flex flex-col items-center'>
                <h2 className='text-BlueText text-[35px] font-josefin font-bold leading-[155%] text-center w-[574px]'>Get latest Update By Subscribe our Newslater</h2>
                <CommonButton text={'Shop Now'} py={16} px={34}/>
            </div>
        </div>
    </section>
    </>
  )
}

export default NewsLater