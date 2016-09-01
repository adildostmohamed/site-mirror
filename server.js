//require http from node core
var http = require('http');

//set up a server object that we can run
var server = http.createServer();

//specify a port that it should listen on
var port = 8080;

//initialise the server and log to the console
server.listen(port, function(){
  console.log("Huzzah listening on port " + port);
});
