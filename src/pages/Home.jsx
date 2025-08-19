import React from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import LatestProduct from '../components/LatestProduct'
import Services from '../components/Services'
import UniquePro from '../components/UniquePro'
import Trending from '../components/Trending'
import Discount from '../components/Discount'
import TopCategory from '../components/TopCategory'
import NewsLater from '../components/NewsLater'
import Brands from '../components/Brands'
import Blog from '../components/blog'

const Home = () => {
  return (
    <>
      <Banner/>
      <Featured/>
      <LatestProduct/>
      <Services/>
      <UniquePro/>
      <Trending/>
      <Discount/>
      <TopCategory/>
      <NewsLater/>
      <Brands/>
      <Blog/>
    </>
  )
}

export default Home