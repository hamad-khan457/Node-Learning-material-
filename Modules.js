function add(a , b){
    return  a + b ;
}
function subtract(a , b){
    return  a - b ;
}

//module.exports = add;
//module.exports = subtract; // now it owerite  the add module

//inorder to return multiple modules we use the objects 

module.exports = {
    Addfn : add,
    SubFn : subtract,
}


//another way of export are arrow function multiple exports

exports.add = (a ,b)=>{
    a + b;
} // this will show as anynomous function because of no name

exports.sub = (a , b) =>{
    a - b;
}

//another way is  module.exports = {add , sub};