"use client"

import { useState, useEffect } from "react";



const fetchMealIdeas = async (ingredient) => {
        const response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        const data = await response.json()
        return data.meals

}

function MealIdeas ({ingredient}) {

    
    const [meals, setMeals] = useState([])

    const loadMealIdeas = async (ingredient) => {
        const cleanedIngredient = ingredient.split(",")[0].trim();
        const returnedMeals = await fetchMealIdeas(cleanedIngredient);
        setMeals(returnedMeals)
    }


    useEffect(() => {

        if (ingredient) { 
            loadMealIdeas(ingredient);
          }
    },[ingredient])



    return (
        <div className="float-right">
            <h1>Meal Ideas</h1>
            {ingredient ? (
                <div>
                    <p>Here are some meal ideas using {ingredient.split(",")[0].trim()}</p>
                    <ul>
                        {meals === null ? <p>No meals found for {ingredient.split(",")[0].trim()} </p> :meals.map(item => <div>
                            <div className="bg-slate-300 m-2 p-2 rounded-lg" id={item.idMeal}>{item.strMeal}</div>
                            
                        </div>)}
                    </ul>
                </div>
               
                ) :<p>Select an item to see meal ideas</p>}
            
        </div>
    )
}

export default MealIdeas;