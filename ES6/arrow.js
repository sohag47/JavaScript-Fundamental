
//! Javascript arrow function 

//? Normal function
function Test(text){
    return text;
}
console.log(Test("Hello Arrow"));

//? normal function keep variable
let normal = function Test2(text){
    return text;
}
console.log(normal("Hello Function"));

//? short function
let short_function = function (text){
    return text;
}
console.log(short_function("Short Function"));

//! Arrow Function
let Arrow_function = (text) => {
    return text;
}
console.log(Arrow_function("Arrow Function"));

//? Arrow function short format [only use when parameter only one]
let arrow_short = text => text;
console.log(arrow_short("Arrow Short function"));