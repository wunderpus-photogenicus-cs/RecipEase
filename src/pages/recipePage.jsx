import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'

//add this page to the landing page ... import recipePage from './recipePage'

const recipePage = () => {
  
  const {id} = useParams(); // using id from url <recipe/:id>
  const [recipe, setRecipe] = useState(null);

  useEffect (() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch('/api/recipes/${id}')
  
        const data = await response.json();
        setRecipe(data.recipe);
      }
  
      catch (error) {
        console.error('Error fetching in recipePage.jsx', error)
      }
    };

    fetchRecipe();
  },[id])

  return (
    <div className= "recipe-page">
        
        <h1> {recipe.strMeal}</h1>
        <p>{recipe.strInstructions} </p>
        <h2> Ingredients: </h2>
        <ul> 
          {(() => {
            const ingredient  = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            if (ingredient) {
              ingredient.push(<li key = {i}> {ingredient} {measure}</li>)
            }
          }
          )}

        </ul>
    </div>
  )
}

export default recipePage;