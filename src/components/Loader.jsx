import React from 'react'
import '../assets/load.css'
const Loader = () => {
  return (
  <>
  <div className="loader">
    <span className='loader-dot' style={{"--d":"200ms"}}></span>
    <span className='loader-dot' style={{"--d":"400ms"}}></span>
    <span className='loader-dot' style={{"--d":"600ms"}}></span>
    <span className='loader-dot' style={{"--d":"800ms"}}></span>
    <span className='loader-dot' style={{"--d":"1000ms"}}></span>
  </div>
  </>
  )
}

export default Loader