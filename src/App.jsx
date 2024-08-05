import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import router here?
import Landing from './pages/Landing.jsx';
import cartPage from './pages/cartPage';
import favoritesPage from './pages/favoritesPage';
import recipePage from "./pages/recipePage";


const App = () => {
    const [recipeId, setRecipeId] = useState('');

    const handleSetRecipeId = (recipeInput) => {
    //not sure if I need to use regex to remove spaces/special chars
        setRecipeId(recipeInput);
    };

    const id = recipeId;
  return (
    <div>
      <h1>Hello React</h1>
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Landing handleSetRecipeId={handleSetRecipeId} />} />
                <Route path = '/cart' element = {<cartPage />} /> 
                <Route path = '/favorites' element = {<favoritesPage />} /> 
                <Route path = '/recipe/:id' element = {<recipePage />} /> 
            </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


/*
const [recipeUrl, setRecipeUrl] = useState('');

const handleSetRecipeUrl = (recipeInput) => {
    //not sure if I need to use regex to remove spaces/special chars
    setRecipeUrl(recipeInput);
};

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Landing />} />
                <Route path='/:recipeUrl' element= {<recipePage recipeUrl = {recipeUrl} />}/>
                <Route path='/favorites' element= {<favoritesPage />} />
                <Route path='/cart' element= {<cartPage />} />
                </Routes>
        </BrowserRouter>
    );
};
*/
