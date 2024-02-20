const http = require('http')
http.createServer(function(req, res ){
res.writeHead(200,{'Content-Type':'text/html'})//header
res.end(`<h1> welcome to my server and the first server create by node js (Backend developer)</h1>`) //body
}).listen(8080) //port


// run server = node file name .js

// Res || req في داخلهم بيكون في  header, body
// 200 status = no problem
// 404 status = problem {not found}