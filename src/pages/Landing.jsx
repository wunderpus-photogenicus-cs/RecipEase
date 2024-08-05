import React, {useState, useEffect} from 'react';
import './Landing.scss';
import NavBar from '../components/NavBar'; //will want to return navbar
import { useNavigate } from 'react-router-dom';
import { render } from 'node-sass';


const Landing = ({handleSetRecipeId}) => {
    //make fetch to api to populate an array of all meal names and meal id
    const recipeOptions = [];
    const fetchRecipes = async () => {
        try{
            const res = await fetch('/api/recipes');
            const data = await res.json();
            data.meals.map(({idMeal, strMeal}) => {
                recipeOptions.push({idMeal: idMeal, strMeal: strMeal})
            })
        } catch (err) {
            console.error('Error fetching recipe options', err);
        }
    }
    fetchRecipes();

    useEffect(() => {
        const navigate = useNavigate();

        const [searchUrl, setSearchUrl] = useState('');
          //reroute to page
        const handleNavigateClick = () => {
          navigate(`/recipe/${searchUrl}`);
        }
      
        const [searchTerm, setSearchTerm] = useState('');
      
        const handleSearchChange = (event) => {
          setSearchTerm(event.target.value);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log(`Searching for ${searchTerm}...`);
        }
          
      
        return(
          <div className="Landing">
              <div id="NavBar'">
                   <NavBar /> 
              </div>
              <div id="Search Bar">
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
              </div>
          </div>
      );
    }, [])
  
};

export default Landing;
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




/* 
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


/* 
add'l resources

https://mui.com/material-ui/react-autocomplete/ //for autocompleting searches

*/

/*
//this goes in App.jsx

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