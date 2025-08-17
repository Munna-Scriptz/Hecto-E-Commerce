import React from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import LatestProduct from '../components/LatestProduct'
import Services from '../components/Services'
import UniquePro from '../components/UniquePro'

const Home = () => {
  return (
    <>
        <Banner/>
        <Featured/>
        <LatestProduct/>
        <Services/>
        <UniquePro/>
    </>
  )
}

export default Home