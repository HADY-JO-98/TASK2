//----------------TASK1----------------
var x = 1;
function test() {
    console.log(x);
    var x = 5;
    console.log(x);
}
test();
console.log(x);
//----------------Task2----------------
function outer() {
    var a = 10;
    function inner() {
        console.log(a);
        var a = 20;
        console.log(a);
    }
    inner();
}
outer();
// console.log(a);
//----------------TASK3----------------
console.log(foo);
var foo = "Hello";

function sayHi() {
    console.log(foo);
    var foo = "Hi";
    console.log(foo);
}
sayHi();
