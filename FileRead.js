var http = require('http');
var fileSystem = require('fs');

http.createServer( function (request, response){
    fileSystem.readFile('HelloWorldTextFile.txt',function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    })

    fileSystem.appendFile('HelloWorldTextFile.txt','Something new', function(err)
    {
        if(err)
        {
            throw err;
        }
        console.log('Saved');
    })
}).listen(8080);