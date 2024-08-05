//middleware functions go here
// const Recipe = require('./models/recipesData');
// const fetch = require('node-fetch'); // Import node-fetch
// import fetch from 'node-fetch';


let recipeController = {};

recipeController.getAllRecipes = async (req, res, next) => {
    try {
        const urls = []; // will hold 26 fetch urls
        for (let n = 0; n <= 25; n++) { // loop from a to z, create fetch urls to grab all dishes starting with each letter in the alphabet
            chr = String.fromCharCode(97 + n);
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${chr}`;
            urls.push(url);
        }

        // map over all urls and complete all fetch req. using Promise.all
        const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));
        const results = await Promise.all(fetchPromises);

        const allRecipes = results.flatMap(response => response.meals || []); // converts array of nested json objects into array of unnested json objects
        console.log('Total recipes obtained: ', allRecipes.length);
        res.locals.data = allRecipes;
        return next();
    } catch (err) {
        return next({
            log: `Error in recipeController.getRecipe: ${err}`,
            status: 500,
            message: { err: 'Was not able to find recipe' }
        });
    }

    //     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${chr}`)
    //     .then((data) => {return data.json()})
    //     .then((data) => {
    //         console.log('hello')
    //         results.push(data)
    //     })
    //     .catch(error => {
    //     return next({
    //         log: `Error in recipeController.getRecipe: ${error}`,
    //         status: 500,
    //         message: { err: 'Was not able to find recipe' }
    //     });
    // });
    // await console.log(results);
    // res.locals.allRecipes = await results;
    // return await next();
    // const results = [];
    // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${chr}`)
    // .then((data) => {return data.json()})
    // .then((data) => {
    //     res.locals.allRecipes = data;
    //     return next();
    // })
    // .catch(error => {
    //     return next({
    //         log: `Error in recipeController.getRecipe: ${error}`,
    //         status: 500,
    //         message: { err: 'Was not able to find recipe' }
    //     });
    // });
}

module.exports = recipeController;