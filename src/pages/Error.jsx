import React from 'react'
import errorimg from '../assets/404-err.png'

const Error = () => {
  return (
    <div className='errorpage'>
        <div className="imageerror">
            <img src={errorimg}/>
            <button><a href="/"> Go to Homepage</a></button>
        </div>
    </div>
  )
}

export default Error