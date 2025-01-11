
//! function without parameter
// function demo(){
//     console.log("function without parmaters");
// }
// demo();

//!function with paramaters
// function userDetails(name, age, city){
//     console.log(name);
//     console.log(age);
//     console.log(city);

// }
// userDetails("Vaishali", 20, "Armoor");
//! anonymous function
// function(){
//     console.log("Anonymous function");
// }
// ();
//?cannot be executed independently

// ! function expression
// let x = function(){
//     console.log("function expression is executing");

// } //;
// x();
// x();
// x();

//! IIFE Immediate Invoke Function Expression
// (function(){
//     console.log("IIFE");
// })();
//! only we can execute one time

//!Arrow function
//explicit and implicit functions are possible
// function demo(){
//      console.log("Hello");
// }
// demo();

// let x =()=> //_
//     console.log("Arrow function"); //{}
// x();
// x();

// let x =a=> //_
//   console.log(a); //{}
// x(5);

// let x =(a ,b)=> //_
//      console.log(a+b); //{}
//  x(5,5);

// let x =(a ,b)=> //_
//      console.log(a+b); //{}
//  x();

// let x =_=>console.log("hi");
// console.log("hello");
// console.log("Bye");
// x();

// let x =_=>{console.log("hi");
// console.log("hello");
// console.log("Bye");}
// x();

//! return keyword
//returning either expressions,variables or values.
//In other functions only explicit is possible
// function demo(a,b){
//     console.log("hello");
//     console.log("Good morning");
//     return a+b; //! explicit function
//     console.log("ello");
//     console.log("bye"); //! terminates if we write any statements after return keyword
// };
// let x = demo(5,5);
// console.log(x);

// let y = (a,b) => a+b; //!implicit return
// let a = y(10,20); 
// console.log(a); 

// let z = (a,b) => {return a+b}; //! explicit return
// let b = z(10,100); 
// console.log(b);

//! Higher order function (hof)
//! is a func which accepts another func as a argument
//! a callBack func is a func which is passed as a argument for another func
function hof(a){
    return a(); //! return keyword is not a printing statement
};
//let x = hof("Vaishali");
//let x = hof(true);
//let x = hof([1,2,3,4,5]);
// let x = hof(function(){return "Hello i am a callback function"});
// console.log(x);

// function parent(callback){ //! HOF
//     return callback;
// }
// let x = parent(add(5,5));
//  console.log(x);
// function add(a,b){ //!callback
//     return a+b
// }
//console.log(add(5,5));

//! closure
// var a = 100;
// let b = "hi";
// function x(){
//     var user = "Vaishali";
//     let company = "google";
//     const sal = 1234567890;
//     console.log(user);
//     console.log(company);
//     console.log(sal);
//     console.log(a,b);
// };
// x();
