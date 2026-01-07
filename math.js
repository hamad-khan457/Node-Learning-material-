 const math = require('./Modules')
//i can make destructuring  matth into  {add , sub} = require("./Modules")

 // if without importing the add function it will return the empth object{} 

//console.log(math(2,5));

// after makin its object 

console.log(math.Addfn(2,5));
console.log(math.SubFn(2,5));
//after destructuring add(2,5) sub(2 ,5)

