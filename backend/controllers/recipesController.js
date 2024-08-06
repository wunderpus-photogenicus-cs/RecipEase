const Recipe = require('../models/recipesData.js');
const axios = require('axios');

const transformDataForDB = (data) => {
    const transformedMeals = [];

    for (let i = 0; i < data.meals.length; i++) {
        const meal = data.meals[i];
        const ingredients = [];

        for (let j = 1; j <= 20; j++) {
            const ingredient = meal[`strIngredient${j}`];
            const measure = meal[`strMeasure${j}`];

            if (ingredient && ingredient.trim() !== "") {
                ingredients.push(measure + ' ' + ingredient);
            }
        }

        const instructions = [];
        const rawInstructions = meal.strInstructions.split('.');
        for (let instruction of rawInstructions) {
            const trimmedInstruction = instruction.trim();
            if (trimmedInstruction) {
                instructions.push(trimmedInstruction);
            }
        }

        const transformedMeal = {
            name: meal.strMeal,
            catagory: meal.strCategory,
            cuisine: meal.strArea,
            picutre: meal.strMealThumb,
            ingredients: ingredients,
            instructions:instructions,
            tags: meal.strTags ?meal.strTags.split(','):[],
            youtubeLink: meal.strYoutube
        };

        transformedMeals.push(transformedMeal);
    }

    return transformedMeals;
};
exports.insertRecipes = async (req, res) => {
    try {
        const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const allMeals = [];

        for (let letter of letters) {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
            if (response.data.meals) {
                allMeals.push(...response.data.meals);
            }
        }

        const transformedData = transformDataForDB({ meals: allMeals });

        //await Recipe.insertMany(transformedData);
        res.status(200).json({ message: 'Recipes inserted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error inserting recipes', error });
    }
};
