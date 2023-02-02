var express = require('express');
const { createUser, getUsers } = require('../controller/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/create",createUser);



module.exports = router;
