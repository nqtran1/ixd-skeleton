/*
 * GET recipe card page.
 */

var msgData = require('../messages.json');
exports.view = function(req, res){
    console.log(msgData);
    res.render('recipecard', msgData);
  };