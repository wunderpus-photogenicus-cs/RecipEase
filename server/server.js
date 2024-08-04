/**
 Date: 8/3/2024
 Coauthors: Peter Larcheveque and Erin Lee
 Description: File to centralize routes for internal server
 */

const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

//require in controllers and models;
const recipesController = require('./controllers/recipesController');
const userController = require('./controllers/userController');

const userDB = require('./models/userData');
const recipesDB = require('./models/recipesData');


/**
 * handle parsing request body
 */
app.use(express.json());

/**
 * require routers
 */
const recipeaseRouter = express.Router();
app.use('/recipease', recipeaseRouter);
/**
 * handle requests for static files
 */

/**
 * define route handlers
 */
// Get recipe from the database
recipeaseRouter.get('/')
/**
 * configure express global error handler
 */
app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
    const defaultErr = {
        log: '',
        status: 500,
        message: { err: '' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
/**
 * start server
 */
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;