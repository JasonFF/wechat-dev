var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var appid = 'wx9bf16c912ddec096';
    var redirect_uri = "http%3A%2F%2Fwww.frombottomto.top/login";
    var scope = 'snsapi_userinfo';//两种方式
    var state = 'STATE';//非必须


    var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appid+'&redirect_uri='+redirect_uri+'&response_type=code&scope='+scope+'&state='+state+'#wechat_redirect';

    res.redirect(url);
});

module.exports = router;

//https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9bf16c912ddec096&redirect_uri=http%3A%2F%2Fwww.frombottomto.top/login&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
