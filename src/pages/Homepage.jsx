import React from 'react'
import Herosection from '../components/Herosection'
import Searchform from '../components/Searchform'
import MealBox from '../components/MealBox'




const Homepage = () => {
  return (
    <div>
      <Herosection/>
      <Searchform/>
      <MealBox/>
    </div>
  )
}

export default Homepage