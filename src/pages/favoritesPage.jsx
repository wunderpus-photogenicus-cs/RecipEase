import { useState, useEffect } from 'react'

const favoritesPage = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect (() => {
        // getting 'favorites' from logic from landing page and store in local storage
        const localFavorites = localStorage.getItem('favorites');

        // if favorites exist and not null||undefined , parse the data 
        if (localFavorites) setFavorites(JSON.parse(localFavorites))

    }, []) // default an empty array so it only runs once

  return (
    <div className='favorites-page'>
        <h1>
            Favorites
        </h1>
        {/* mapping favorite recipe with key = id, label and ingredients from 
        the dummy database and display in a div */}
        {favorites.map((recipe) => (
            <div key = {recipe.id}>
                <div>{recipe.label}</div>
                <div>{recipe.ingredients}</div>
            </div>
        ))}
    
    </div>
  )
}

export default favoritesPage