import React from 'react'
import { useRef } from 'react';
import { useGlobalContext } from '../hooks/context'

const Searchform = () => {
  const {searchValue, setSearchValue}= useGlobalContext();

  const searchSubmit= (e)=>{
    e.preventDefault
  }
  const searchInput =()=>{
    setSearchValue(searchContainer.current.value)
  }
  const searchContainer = useRef();
  return (
    <div>
      <h4 className='text-center fw-bold text-success my-3'>Search for Your Favorite Meals</h4>
      <div className="search-large bg-opacity-10">
        <input type="text" 
        id='search' 
        placeholder='Search our Our Food Store'
        ref={searchContainer} 
        onChange={searchInput}/>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Searchform