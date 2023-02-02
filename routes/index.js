var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 return res.json({name:"John"});
});

module.exports = router;

//Aici se fac get si post

//1. https://www.youtube.com/watch?v=pKd0Rpw7O48
//2.  https://www.youtube.com/watch?v=DZBGEVgL2eE
//3. https://www.youtube.com/watch?v=d56mG7DezGs
//4. https://www.youtube.com/watch?v=F_oOtaxb0L8