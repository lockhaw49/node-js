var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000
http.createServer(function (reg,res){
	var q = url.parse(reg.url,true);
	var filename = "." + q.pathname;
	if (filename == './') {filename = './index';}
	console.log(filename);
	fs.readFile(filename,function(err, data) {
		if (err){
			res.writeHead(404,{'Content-Type':'text/html'});
			return res.end("404 Not Found");
		}

		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		console.log(filename);
		return res.end();
	 });

}).listen(PORT);

console.log("Server is listening on port 8080");