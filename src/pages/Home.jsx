import React from 'react'
import Banner from '../components/Home/Banner'
import Featured from '../components/Home/Featured'
import LatestProduct from '../components/Home/LatestProduct'
import Services from '../components/Home/Services'
import UniquePro from '../components/Home/UniquePro'
import Trending from '../components/Home/Trending'
import Discount from '../components/Home/Discount'
import TopCategory from '../components/Home/TopCategory'
import NewsLater from '../components/Home/NewsLater'
import Brands from '../components/Home/Brands'
import Blog from '../components/Home/Blog'

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