import React from 'react'

//add this page to the landing page ... import recipePage from './recipePage'

const recipePage = ({props}) => {
    //passing prop from landing page / rename props to another as needed for initial and useState

    /* assuming we have the structure of recipe schema 
     recipe = {

     id: 1
     name: 'Mac and Cheese'
     description: 'blah blah blah'
     
     }
    */
  return (
    <div className= "recipe-page">
        {/* adding name and description on page*/}
        <h1> {props.name}</h1>
        <p>{props.description} </p>
    </div>
  )
}

export default recipePage;