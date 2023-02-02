const User = require('../model/user');

// Create a new user
exports.createUser = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

    //Insert user
  user.save()
    .then(() => {
      res.json({ message: 'User created successfully' });
    })
    .catch(error => {
      res.status(500).json({ error });
    });


//Aici se face businesslogic

};