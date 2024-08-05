//where the mongoose schema goes
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    //what info do we want stored? 
    //
    favRecipe: {type: String, required: true}, //make idMeal a key within this object
    idMeal: {},
    

});

module.exports = mongoose.model('User', user);