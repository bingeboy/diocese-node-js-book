//Read write Stream long form

http.createServer(function(request, response){
    response.writeHead(200)
    request.on('data', function(chunk) {
        response.write(chunk);
    })

    request.on('end', function() {
        response(end)
    })

}).listen(8888);

//or

http.createServer(function(request, response){
    response.writeHead(200)
    request.pipe(response);
}).listen(8888);

// Above will steam to server.


