import React, {useState, useEffect} from 'react';
import './Landing.scss';
// import NavBar from '../components/NavBar'; //will want to return navbar
import { useNavigate } from 'react-router-dom';
import { render } from 'node-sass';

const Landing = () => {
  const navigate = useNavigate();
    //reroute to page
  const handleNavigateClick = () => {
    // navigate(`/${/*form submission*/}`);
  }
    
  const { flag, setFlag } = useState(0);

  fetch('/some api', {
    method: post,
    headers: {},
    body: {}
  })
  .then((data) => {
    setFlag(1);
  })
  .catch((err) => {

  })
  //recipeSuggestion is what pops up when user searches
  render() {
    if(flag) {
    <recipeSuggestion />
    }
  }



    return(
        <div className="Landing">
            <div id="NavBar'">
                <NavBar />
            </div>
        </div>
    );
};


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