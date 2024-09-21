
// Let:- It cannot use after declareation, It is a block scope

let a;
a=9;
function abc(){
    a=8;
    console.log(a);
}
    abc();
    console.log(a);

// Var:-It can be use before declaration, it is a globle scope
let b;
b=9;
function aabc(){
    var b=8;
    console.log(b);
}
   
   aabc();
    console.log(b);

// Const:- Its value is fixed and we cannot change the value of variable after initializing
// const c=9;
// var c=8;
