const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipesController');

// will insert data into database, make sure to uncomment out the insertmany in the controller
router.post('/insert', recipeController.insertRecipes);

module.exports = router;
