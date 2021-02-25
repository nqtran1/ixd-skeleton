
/*
 * GET messaging page.
 */

//var friendData = require('../friends.json');

exports.view = function(req, res){
  //console.log(friendData);
  res.render('message', {
    "friends" : [
      {
        "person" : "Gordon R.",
        "title" : "Ziti Pasta",
        "image" : "http://www.gimmesomeoven.com/wp-content/uploads/2018/11/Chicken-Alfredo-Baked-Ziti-Recipe-9.jpg",
        "descrip" : "Ziti pasta, full of vegetables."
      },
          {
        "person" : "Rachael R.",
        "title" : "Xiao Long Bao",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/8/89/Xiao_Long_Bao_at_Nanxiang_Mantou_Dian_1.jpg",
        "descrip" : "I learned to make this from my host family."
          },
          {
            "person" : "Adam R.",
        "title" : "Tomato Soup",
        "image" : "http://www.onceuponarecipeblog.com/wp-content/uploads/2013/01/DSC_0617-1024x680.jpg",
        "descrip" : "Good for a cold winter afternoon."
      }
    ]
  });

};