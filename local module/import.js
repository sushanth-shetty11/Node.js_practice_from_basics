//!when there is only one function

// let data = require('./export');
// console.log(data(10,20));

//!when there are multiple function

// let data = require('./export');
// console.log(data.add(10,20));
// console.log(data.sub(10,10));
//* with alternative names
// let data = require('./export');
// console.log(data.addition(10,20));
// console.log(data.subtraction(10,10));
//*without variable name
// let {addition,subtraction} = require('./export');
// console.log(addition(10,20));
// console.log(subtraction(10,10));

//*
let {add,sub,mul,div,mod}= require('./export');
console.log((add(100,10)));
console.log((sub(100,10)));
console.log((mul(100,10)));
console.log((div(100,10)));
console.log((mod(100,10)));

