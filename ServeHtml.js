var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response){
    var parsedData = url.parse(request.url, true);
    console.log('Received '+parsedData.pathname);
    fs.readFile('.'+parsedData.pathname, function(err, data)
    {
        if(err)
        {
            response.writeHead(404, {'Response-Type': 'text/html'});
        }
        else
        {
            response.writeHead(200, {'Response-Type': 'text/html'});
            response.write(data);
        }
        response.end();
    })

}).listen(8080);