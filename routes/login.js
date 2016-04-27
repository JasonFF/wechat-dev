var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var code = req.query.code;
    res.render('login', { code: code });
});

module.exports = router;
