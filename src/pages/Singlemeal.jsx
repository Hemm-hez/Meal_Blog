import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import ReactPlayer from 'react-player/youtube';

const Singlemeal = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

  const MealData = async ()=>{
    try{
      const res = await fetch(`${url}${id}`);
      const data = await res.json();
      console.log(data);
      setLoading(false)
      if(data.meals){
        const {strArea,
          strCategory,
          strInstructions,
          strMealThumb,
          strMeal,
          strYoutube,
          strTags
        } = data.meals[0]
        setMeal({strArea,
          strCategory,
          strInstructions,
          strMealThumb,
          strMeal,
          strYoutube,
          strTags
        })
      }
      else{
        setMeal()
      }
    }
    catch (error){
      console.log(error);
    }
  }
useEffect(()=>{
 setTimeout(() => {
  MealData()
 }, 2000);
}, [id])
if(loading){
  return<>
  <Loader/>
  </>
}
  return (
    <div className='container mt-2'>
      <div className='meals-decription'>
        <img src={meal.strMealThumb} alt="" />
        <p> <span>Name:</span> {meal.strMeal}</p>
        <p> <span>Tags:</span> {meal.strTags}</p>
        <p> <span>Category:</span> {meal.strCategory}</p>
        <p> <span>Area:</span> {meal.strArea}</p>
        <p> <span>Instructions:</span> {meal.strInstructions}</p>
        <p> <span>Video Instructions:</span></p>
        <div className="video">
          <ReactPlayer width={'100%'} height={'450px'} controls={true} playing={true} url={meal.strYoutube}/>
        </div>
    
      </div>
    </div>
  )
}

export default Singlemeal