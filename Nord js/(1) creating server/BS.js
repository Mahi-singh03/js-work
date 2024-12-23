const http = require('http')

http.createServer((req,res)=>{
    res.write("hi");
    res.end(); // respone shold be ended with this

}).listen(5500)



// the http model is used to handle the http requests and response 