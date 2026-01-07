const { error } = require("console");
const fs = require("fs");


//Async

//fs.writeFile("./test.txt" , "Hello world Async" , (error) => {})

//sync

//fs.writeFileSync("./test.txt" , "Hello world Async")

//sync
// const result =  fs.readFileSync("./contacts.txt" ,"utf-8" );
// console.log(result);

//Async
//  fs.readFile("./contacts.txt" ,"utf-8",(error , result) => {

//     if(error){
//         console.log("error");
        
//     }
//     else{
//         console.log(result);
        
//     }

//  } )


 //sync will return somethings but asynchoros did not  async will always have an error argument


 // By append file we can write thigs after the already written file without regenerating the new file

 fs.appendFileSync("./contacts.txt" , "new Text");


 fs.cpSync("./contacts.txt", "./copied.txt") // create a new file and copy the contents to at

 fs.unlink("/contacts.txt") // unlink and delete it

 fs.statSync("./contacts.txt") //shows statistics

 fs.mkdirSync("my-docs") // creat folder

 //sync .. bloking
 //async .. non blocking