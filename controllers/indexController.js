var pug = require('pug');


/*
*/
function homepage (req,res) {
  res.render('homepage.pug',{
      title: "Appasti - Homepage",
  })
}

exports.homepage = homepage;
