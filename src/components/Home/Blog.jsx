import React from 'react'
import CommonHead from '../common/CommonHead'
import SingleBlogCard from '../common/SingleBlogCard'
import blogImg from '../../assets/images/blogImg1.png'
import blogImg2 from '../../assets/images/blogImg2.png'
import blogImg3 from '../../assets/images/blogImg3.png'

const Blog = () => {
  return (
    <>
    <section id='Blog' className='mt-[96px]'>
        <div className="container">
            <div id="Blog-Row">
                <CommonHead text={'Latest Blog'}/>
                {/* --------Blog Cart--------- */}
                <div className='mt-[66px] flex lg:flex-row flex-col items-center justify-between'>
                    <SingleBlogCard img={blogImg} publisher={'SaberAli'} date={'21 August,2020'} heading={'Top essential Trends in 2021'} details={'More off this less hello salade lied much over tightly circa horse taped mighty'}/>
                    <SingleBlogCard img={blogImg2} publisher={'SaberAli'} date={'21 August,2020'} heading={'Top essential Trends in 2021'} details={'More off this less hello salade lied much over tightly circa horse taped mighty'}/>
                    <SingleBlogCard img={blogImg3} publisher={'SaberAli'} date={'21 August,2020'} heading={'Top essential Trends in 2021'} details={'More off this less hello salade lied much over tightly circa horse taped mighty'}/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog