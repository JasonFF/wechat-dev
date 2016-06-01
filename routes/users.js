var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var sha1 = require('sha1');
/* GET users listing. */
router.get('/', function(req, res, next) {
	var appid = 'wx9bf16c912ddec096';
	var secret = '6841a50bd9b6e99c77d0e052e5e5eb2a';
	var aturl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appid+'&secret='+secret;
	var access_token;
	fetch(aturl).then(function(res){
		return res.json()
	}).then(function(json){
		access_token = json.access_token;
		var ticketurl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+access_token+'&type=jsapi'
		//https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi
		var jsticket;
		fetch(ticketurl).then(function(res){
			return res.json()
		}).then(function(json){
			jsticket = json.ticket;
			console.log(req.originalUrl)
			var string1 = 'jsapi_ticket='+jsticket+'&noncestr=Wm3WZYTPz0wzccnW&timestamp=1414587457&url=http://www.frombottomto.top'+req.originalUrl;
			var shaticket = sha1(string1)
			res.send(shaticket)
		})
		
	})
	//https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
});

module.exports = router;
