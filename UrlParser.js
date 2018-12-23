var http = require('http');
var url = require('url');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(request.url);
    response.write('<br>');
    var requestParameters = url.parse(request.url, true).query;
    var text = 'Value for firstName = '+requestParameters.firstName;
    response.end(text);
}).listen(8080);
