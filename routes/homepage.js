/*
 * GET home page.
 */
  
var displaynames = require('../home.json');

exports.view = function(req, res){
  console.log(displaynames);
  res.render('homepage', displaynames);

}