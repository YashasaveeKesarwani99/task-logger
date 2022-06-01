import React from 'react'

//importing header section of homepage
import HomeHeader from '../Components/homeHeader'

//importing menu section of homepage
import HomeSections from '../Components/homeSections'

const Home = () => {
  return (
    <div className='home-main rounded-md'>
        <div className='home-main-subContainer'>
            <HomeHeader/>
            <HomeSections/>
        </div>
    </div>
  )
}

export default Home