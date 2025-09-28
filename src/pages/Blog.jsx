import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import BlogLeft from '../components/blog/BlogLeft'
import BlogRight from '../components/blog/BlogRight'

const Blog = () => {
  return (
    <>
        <BreadCrumb pageName={'Blog'} to={'blog'} />

        <div className="container">
            <div id="Blog-Row" className='flex gap-[30px]'>
                {/* --------------------Left Side---------------------- */}
                <BlogLeft />
                {/* --------------------Right Side---------------------- */}
                <BlogRight />
            </div>
        </div>
    </>
  )
}

export default Blog