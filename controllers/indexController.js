


/**
 * This function renders the Homepage of ApPasti Web Application
 * @return user the logged user or empty in case of a new user
 **/
function homepage (req,res) {
  res.render('homepage',{
      user: "Giovanni",
  })
}

exports.homepage = homepage;
