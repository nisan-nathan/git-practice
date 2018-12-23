var http = require('http');

var date = require('./MyFirstModule')

http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write(request.url);
    response.end('Hello World! The current date and time is '+date.myDateTime());

}).listen(8080);