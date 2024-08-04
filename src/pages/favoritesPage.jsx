import { useState, useEffect } from 'react'

const favoritesPage = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect (() => {

        const fetchFavorites = async () => {
            try{
                const res = await fetch('/api/user/favorites')
                const data = await res.json();
                setFavorites(data.favorites)
            } catch (error) {
                console.error('error fetchFavorites in favoritePage.jsx', error)
            }
        } 
        fetchFavorites();

    }, []) // default an empty array so it only runs once

  return (
    <div className='favorites-page'>
        <h1>
            Favorites
        </h1>
        {favorites.map((recipe) =>  {     
        const ingredients = [];
        for (let i = 1; i <= 10; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`]
            if (ingredient) {
                ingredients.push(`${ingredient} - ${measure}`)
            }
          }

          return (
            <div key = {recipe.idMeal}>
                <div>{recipe.strMeal}</div>
                <ul>
                    {ingredients.map((item, index) => (
                        <li key = {index}> {item} </li>
                    ))}
                </ul>
            </div>
          );
        })}
    
    </div>
  );
};

export default favoritesPage