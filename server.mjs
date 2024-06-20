import{createServer} from 'node:http';
import{unlink, wrteFile


}from 'node:fs';


//Define request handler



//create HTTP Server
const server =createServer ((req,res) => {
console.log(req.url);
if(req.url.includes('create')) {

//create file
writeFile('./abc.html', '<h1>Learning Node.js</h1>', () 
=>{

    console.log(err);

//return response
res.writeHead(200,{'Content-Type': 'text/html'});
res.end('<h1>file added<h1/>');
});

}else{
//Delete
unlink('./index.html' , () =>{

//return response
res.writeHead(200,{'Content-Type': 'text/html'});
res.end('<h1>file added<h1/>');
});
}