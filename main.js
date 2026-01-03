//load the http module
var http * require('http');

//Configure the HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200,{content-type": "text/plain"});
  responnse.end("Hello from Meymmai\n");a
}); 

//listen on localhost
server.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/"); 
