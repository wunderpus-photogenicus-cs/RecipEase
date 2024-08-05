//where the mongoose schema goes
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    //what info do we want stored? 
    userId: {type: Number, required: true},
    favRecipe: {type: String, required: true},
    idMeal: {},
    

});

module.exports = mongoose.model('User', user);