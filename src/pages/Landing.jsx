import React, {useState, useEffect} from 'react';
import './Landing.scss';
// import NavBar from '../components/NavBar'; //will want to return navbar
import { useNavigate } from 'react-router-dom';
// import { render } from 'node-sass';
import { Autocomplete, TextField } from '@mui/material';
 

const Landing = ({handleSetRecipeId}) => {
        //dummy data
        const recipeOptions = [
        {idMeal: 1, strMeal: "Pizza"},
        {idMeal: 2, strMeal: "Spaghetti"},
        {idMeal: 3, strMeal: "Mac and Cheese"},
        {idMeal: 4, strMeal: "egg"}
        ];

    //make fetch to api to populate an array of all meal names and meal id
    // const recipeOptions = [];
    // const fetchRecipes = async () => {
    //     try{
    //         const res = await fetch('/api/recipes', {url: 'http://localhost:3000'});
    //         console.log('response from fetch: ', res);
    //         const data = await res.json();
    //         console.log('res.json data', data);
    //         data.meals.map(({idMeal, strMeal}) => {
    //             recipeOptions.push({idMeal: idMeal, strMeal: strMeal})
    //         })
    //     } catch (err) {
    //         console.error('Error fetching recipe options', err);
    //     }
    // }
    // fetchRecipes();
    
    //mealNames is going to be an array of the options in the autocomplete/dropdown menu
    const mealNames = recipeOptions.map(option => option.strMeal);

    // //to find idMeal given searchTerm = strMeal, use this 
    // //hypthetically if searchTerm = Spaghetti
    // const recipeId = recipeOptions.find(element => element.strMeal === searchTerm);
    // // recipeId.idMeal is going to be the id 

    // useEffect(() => {        //tried out wrapping everything in useEffect so it would load after data fetch
        const navigate = useNavigate();
      
        const [searchTerm, setSearchTerm] = useState(mealNames[0]);
        console.log('The search term is: ', searchTerm);
        const recipeObj = recipeOptions.find((element) => 
            //should try inserting conditional if searchTerm is null
            element.strMeal === searchTerm);
        console.log('The recipe object is: ', recipeObj);
        // const recipeId = recipeObj.idMeal;
        // console.log('The recipe id is: ', recipeId);

        // useEffect(() => {    //tried using useEffect to handle rerouting AFTER recipeId is grabbed
        //     const handleNavigate = () => {
        //         navigate(`/recipe/${recipeId}`);
        //       }
        // }, [searchTerm])

        //this chunk is for if we used <form />; ignore if using <Autocomplete /> 
        // const handleSubmit = (event) => {
        //   event.preventDefault();
        //   console.log(`Searching for ${searchTerm}...`);
        // }
          
      
        return(
          <div className="Landing">
              <div id="NavBar'">
                   {/* <NavBar />  */}      {/* component should have 4 buttons that link to Home, Past recipes, Favorite recipes, shopping cart/list */}
              </div>
              <div id="Search Bar">
                <Autocomplete
                    value = {searchTerm}
                    onChange={(event, newValue) => {
                        setSearchTerm(newValue);
                        // handleNavigate();
                    }}
                    disablePortal
                    id="combo-box-demo"
                    options={mealNames}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Search or Select a dish" />}
                />
              </div>
          </div>
      );
    // }, [recipeOptions])
  
};

export default Landing;

//conditional rendering component based on Flag
//   const { flag, setFlag } = useState(0);

//   fetch('/some api', {
//     method: post,
//     headers: {},
//     body: {}
//   })
//   .then((data) => {
//     setFlag(1);
//   })
//   .catch((err) => {

//   })
//   //recipeSuggestion is what pops up when user searches
//   render() {
//     if(flag) {
//     <recipeSuggestion />
//     }
//   }





//form I used in earlier attempt before autocomplete was implemented
/*
                <form onSubmit= { handleSubmit }>
                    <input 
                          type="text" 
                          placeholder="search recipes..."
                          value={searchTerm}
                          onChange={handleSearchChange}
                      />
                      <button type="submit">
                          Search
                      </button>
                </form> 
*/


/* 
add'l resources

https://mui.com/material-ui/react-autocomplete/ //for autocompleting searches


    for dropdown menu: 
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropChange = (event) => {
        setSelectedValue(event.target.value);  
    };

    return(
    <select value={selectedValue} onChange={handleChange}>
        <option value="" >Select an option </option>
        <option value="option1"> Option 1 </option>
        <option value="option2"> Option 2 </option>
        <option value="option3"> Option 3 </option>
    </select>
    )
*/