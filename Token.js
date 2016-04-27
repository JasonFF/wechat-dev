var http = require ('http'),
    url = require ('url'),
    crypto = require ('crypto');
 
http.createServer (function (req, res ) {
    res.writeHead (200, {
        'Content-Type': 'text/html; charset=UTF-8'
    });
 
    var query = url.parse (req.url, true ).query,
        token = 'jasonff',
        array = [token, query.timestamp, query.nonce],
        key = array.sort ().join (''),
        sha1 = crypto.createHash ('sha1').update (key ).digest ('hex');
 
    if (sha1 == query.signature ) {
        res.write (query.echostr );
    } else {
        res.write ('Error, Token verification failed.'); 
    }
    res.end ();
}).listen ('80');