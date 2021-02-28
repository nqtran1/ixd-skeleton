
/*
 * GET instructions in recipecard page.
 */

var recipeData = require('../recipes.json');

exports.view = function(req, res){
  console.log(recipeData);
  res.render('instructions', recipeData);

}
