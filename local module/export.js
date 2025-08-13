//!when there is only one function

// let add = (a,b) => a+b;
// module.exports = add

//!when there are multiple function

// let add = (a,b) => a+b;
// let sub = (a,b) => a-b;
// module.exports = {add,sub};
//*we can also give alternative names for the function
// module.exports = {addition:add, subtraction:sub};
//*or
// module.exports.addition=add;
// module.exports.subtraction=sub;

//!exporting directly

exports.add=(a,b)=>a+b;
exports.sub=(a,b)=>a-b;
exports.mul=(a,b)=>a*b;
exports.div=(a,b)=>a/b;
exports.mod=(a,b)=>a%b;


