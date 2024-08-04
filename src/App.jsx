import React from "react";
// import router here?
import cartPage from './pages/cartPage'
import favoritesPage from './pages/favoritesPage'
import recipePage from "./pages/recipePage";

const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
{/* 
      <Route path = '/' element = {<Landing />} />
      <Route path = '/cart' element = {<cartPage />} /> 
      <Route path = '/favorites' element = {<favoritesPage />} /> 
      <Route path = '/recipe/:id' element = {<recipePage />} />   */}
      
    </div>
  );
};

export default App;



// inheritance here
/* 
RecipEase
|- dist
|- frontend
|- node_modules
|- server
|- src
  |-pages
    |- Landing.jsx
    |- Landing.scss
    |- recipePage.jsx
  |- App.scss
  |- index.html
  |- index.js
|-.babelrc
|-.package.json
*/
