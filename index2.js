const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');

const app = express();

app.get('/' , (req , res) => {
    return res.end("Home page");
})


app.get('/about' , (req , res) => {
    return res.end("About Page page");
})


app.listen(8000 , ()=>{
    console.log("server started!");
    
})