import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const AppContext = createContext();
export const useGlobalContext =()=> useContext(AppContext);

export const AppProvider =({children})=>{
    const [loading , setLoading] = useState(true);
    const [mealsAvailable, setMealsAvailable] = useState([])
    const [searchValue, setSearchValue]= useState ("")

    const  url = ' https://www.themealdb.com/api/json/v1/1/search.php?s='

    const FetchedUrl = async()=>{
        try{
            const response = await fetch (`${url} ${searchValue}`)
            const data = await response.json();
            setLoading(false);
            if (data.meals){
                setMealsAvailable(data.meals)
            }
            else{
                setMealsAvailable([])
            }
            
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect (()=>{
      setTimeout(() => {
        FetchedUrl();
      }, 3000);
    }, [searchValue]);

    return(
       <AppContext.Provider value={{loading,mealsAvailable, searchValue,setSearchValue}}>
        {children}
       </AppContext.Provider>
    )
}