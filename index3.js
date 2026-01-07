const http = require("http");
const fs = require("fs");


const myserver = http.createServer((req ,res) =>{
    const log = `${Date.now()} :${req.url} New Request Received`
    fs.appendFile("log.txt",log , (err , data) => {
        switch(req.url){
            case '/': res.end("Home Page")
            break
            case '/about' : res.end("i am Hamd Khan")
            break
            default : res.end("404 not found")
        }
    } )  
});


myserver.listen(8000 , ()=>{
    console.log("server started");
    
})