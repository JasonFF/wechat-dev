var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var code = req.query.code;
    var appid = 'wx9bf16c912ddec096';
    var secret = '6841a50bd9b6e99c77d0e052e5e5eb2a';
    var url = ' https://api.weixin.qq.com/sns/oauth2/access_token?appid='+appid+'&secret='+secret+'&code='+code+'&grant_type=authorization_code '
    res.redirect(url);
});

module.exports = router;
