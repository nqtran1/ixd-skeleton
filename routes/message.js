
/*
 * GET messaging page.
 */

var recipeData = require('../recipes.json');

exports.view = function(req, res){
  console.log(recipeData);
  res.render('message', recipeData);

}