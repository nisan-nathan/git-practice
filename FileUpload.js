var http = require('http');

http.createServer(function(request,response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  response.write('<input type="file" name="filetoupload"><br>');
  response.write('<input type="submit">');
  response.write('</form>');
  return response.end();
}).listen(8080);