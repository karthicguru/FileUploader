var http = require("http");

function start(){
    function onRequest(request,response){
        console.log("Request received from Megamind");
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello Megamind.. with Node");
        response.end();  
    }
}

http.createServer(onRequest).listen(8888);
console.log("Come on Megamind you r going good");

exports.start = start;
