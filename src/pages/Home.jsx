import React from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import LatestProduct from '../components/LatestProduct'
import Services from '../components/Services'
import UniquePro from '../components/UniquePro'
import Trending from '../components/Trending'
import Discount from '../components/Discount'

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
    </>
  )
}

export default Home