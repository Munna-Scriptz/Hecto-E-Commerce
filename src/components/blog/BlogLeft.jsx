import React from 'react'
import blogImg1 from '../../assets/images/blogPage1.png'
import blogImg2 from '../../assets/images/blogPage2.png'
import blogImg3 from '../../assets/images/blogPage3.png'
import { FaFacebookF, FaPenNib, FaRegCalendarAlt, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const BlogLeft = () => {
  return (
    <>
        <div className='lg:w-[860px] w-full'>
            {/* ---------------- BLog 1  */}
            <article>
                <img src={blogImg1} alt="Blog Img" />
                <div className='mt-[19px] flex items-center gap-[29px]'>
                    <p className='text-[14px] text-BlueText font-josefin flex items-center gap-2'><FaPenNib className='text-brand'/>Surf Auxion</p>
                    <p className='text-[14px] text-BlueText font-josefin flex items-center gap-2'><FaRegCalendarAlt className='text-[#FFA454]'/>Aug 09 2020</p>
                </div>
                <h2 className='text-BlueText lg:text-[30px] text-2xl font-josefin font-bold mt-[28px] mb-6'>Mauris at orci non vulputate diam tincidunt nec.</h2>
                <p className='text-subText lg:text-base text-sm font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                <p className='text-subText lg:text-base text-sm font-lato leading-[26px] mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                {/* Quote  */}
                <h2 className='text-subText font-josefin md:text-[18px] text-sm mt-14 md:leading-[40px] leading-[25px] px-6 border-l-2 border-brand'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”</h2>
            </article>

            {/* ---------------- Blogs  */}
            <article className='mt-12'>
                {/* blog images  */}
                <div className='flex flex-wrap gap-y-8 items-center justify-between'>
                    <img src={blogImg3} alt="Blog image" />
                    <img src={blogImg2} alt="Blog image" />
                </div>
                <p className='text-subText lg:text-base text-sm font-lato mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                <p className='text-subText lg:text-base text-sm font-lato mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam </p>
            </article>

            {/* ----------Social links  */}
            <div className='mt-[60px] flex items-center justify-center gap-3'>
                <div className='w-[25px] h-[25px] text-white flex items-center justify-center rounded-full bg-[#5625DF] cursor-pointer'><FaFacebookF /></div>
                <div className='w-[25px] h-[25px] text-white flex items-center justify-center rounded-full bg-[#FF27B7] cursor-pointer'><RiInstagramFill /></div>
                <div className='w-[25px] h-[25px] text-white flex items-center justify-center rounded-full bg-[#37DAF3] cursor-pointer'><FaTwitter /></div>
            </div>
        </div>
    </>
  )
}

export default BlogLeft