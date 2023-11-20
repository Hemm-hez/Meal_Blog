import React from 'react'
import Loader from './Loader'
import { useGlobalContext } from '../hooks/context'
import { Link } from 'react-router-dom';

const MealBox = () => {
    const {loading, mealsAvailable} = useGlobalContext();
    if(loading){
        return(
            <Loader/>
        )
    };
    if (mealsAvailable.length < 1){
        return <h2 className="text-danger text-center my-4">No food Found for your search type..</h2>
    }
   
  return (
  
   <div id='below' className="mealsection">
    {
        mealsAvailable.map((meal)=>{
            const {idMeal,strMealThumb,strMeal,strCategory} = meal;
            return(
                <Link key={idMeal} to={`/meal/${idMeal}`} className='text-decoration-none'>
                <div className="singlemeal">
                    <img src={strMealThumb} alt={strMeal} />
                    <h4 className="text-center fw-bold text-success my-2">{strMeal}</h4>
                    <h6 className='text-center py-2 text-success'>{strCategory}</h6>
                </div>
            </Link>
            )
            
        })
    }
   </div>
  )
}

export default MealBox