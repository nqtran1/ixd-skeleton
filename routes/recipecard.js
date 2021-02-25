/*
 * GET recipe card page.
 */

var recipeData = require('../recipes.json');
exports.view = function(req, res){
    console.log(recipeData);
    res.render('recipecard', recipeData);
  };