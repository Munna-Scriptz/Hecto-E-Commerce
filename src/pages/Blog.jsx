import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import BlogLeft from '../components/blog/BlogLeft'

const Blog = () => {
  return (
    <>
        <BreadCrumb pageName={'Blog'} to={'blog'} />

        <div className="container">
            <div id="Blog-Row">
                {/* --------------------Left Side---------------------- */}
                <BlogLeft />
                {/* --------------------Right Side---------------------- */}
            </div>
        </div>
    </>
  )
}

export default Blog