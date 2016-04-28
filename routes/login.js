var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/', function(req, res, next) {
    var code = req.query.code;
    var appid = 'wx9bf16c912ddec096';
    var secret = '6841a50bd9b6e99c77d0e052e5e5eb2a';
    var url = ' https://api.weixin.qq.com/sns/oauth2/access_token?appid='+appid+'&secret='+secret+'&code='+code+'&grant_type=authorization_code ';

    //获取code后，请求以下链接获取access_token：  https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code 
    // fetch(url).then(function(res){
    //     return res.json()
    // }).then(function(json){
    //     console.log(json)
    // });
    //res.send('***appid***: '+appid+'\n ***code***: '+code+'\n ***secret***: '+secret+'\n ***url***: '+url)
    res.render('login',{appid: appid,code: code,secret:secret,url:url})
    // res.redirect(url);
});

module.exports = router;
