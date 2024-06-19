import{createServer} from 'node:http';


//Define request handler



//create HHTTP Server
function requestHandler(req, res){
res.writeHead(200,{'Content-Type': 'text/html'});
res.end('<h1>We have an HTML server<h1/>')};

//listen for incoming request
server.listen(3000, '127.0.0.1', function(){
    console.log('server is running');
});

//normal function vs arrow function
function handleRequest() {}
const handleRequest =() =>{}
