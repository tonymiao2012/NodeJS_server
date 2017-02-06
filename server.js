/**
 * Created by miaozixiong on 2017/2/6.
 */
var http = require('http');

http.createServer(function (request, response) {
    //Get content from request.
    console.log("In getContent method");
    response.writeHead(200, {
        "Content-Type": "text/plain",
        'Access-Control-Allow-Origin': '*'
    });
    request.on('data', function (chunk) {
        console.log('Go data.');
        console.log(chunk);
    });

    response.end('{"msg": "OK"}');

}).listen(3000);

console.log("Server running at http://172.16.188.91:3000");



