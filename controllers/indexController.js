


/*
*/
function homepage (req,res) {
  res.render('homepage',{
      user: "Giovanni",
  })
}

exports.homepage = homepage;
