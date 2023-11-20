import React from 'react'
import green from '../assets/grin_food.jpg'

const Herosection = () => {
  return (
    <div className='background_in' style={{ backgroundImage: `url(${green})`}}>
    <div className="in_back text-start mx-3">
    <h1>Healthy Foods</h1>
      <h1 className='fw-light fs-1 text-dark'>Explore different meals</h1>
      <button><a href="#below"className='text-decoration-none text-light'>See More below</a></button>
    </div>
    </div>
  )
}

export default Herosection