var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var code = req.query.code;
    res.send('code:'+code);
});

module.exports = router;
