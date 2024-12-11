//Option which using prompt from WS console
import promptSync from 'prompt-sync';

const prompt = promptSync();

console.log("Option which using prompt from WS console\n");
let num1 = prompt("Enter the number: ");
let num2 = prompt("Enter the degree number: ");
function powPromptsFromWSConsole() {
    return Math.pow(num1, num2);
}

console.log("The result of powering " + num1 + " to " + num2 + " degree is " + powPromptsFromWSConsole());


//Option which using constant numbers

console.log("\n~~~~~~~~~~~~~~~~~~~\nOption which using constant numbers\n");
const num3 = 2;
console.log("The first constant number: " + num3)
const num4 = 5;
console.log("The second constant number: " + num4)
function powOfConstNumbers(){
    return Math.pow(num3,num4);
}
console.log("The result of powering " + num3 + " to " + num4 + " degree is " + powOfConstNumbers());

//Option which using random numbers
console.log("\n~~~~~~~~~~~~~~~~~~~\nOption which using constant numbers\n");
const num5 = Math.floor(Math.random() * 10);
console.log("The first random number: " + num5);
const num6 = Math.floor(Math.random() * 10);
console.log("The second random number: " + num6);
function powOfRandomNumbers(){
    return Math.pow(num5, num6);
}
console.log("The result of powering " + num5 + " to " + num6 + " degree is " + powOfRandomNumbers());

// //Option which using js functions in browser
// console.log("\n~~~~~~~~~~~~~~~~~~~\nOption for using js function in browser to get numbers for powering\n");
// function powFunctionInBrowserConsole(){
//     let num7 = prompt("Enter the  number");
//     console.log(num7);
//     let num8 = prompt("Enter the degree");
//     console.log(num8);
//
//     console.log(Math.pow(num7,num8));
//
// }
// console.log("The result of powering " + num7 + " to " + num8 + " degree is " + powFunctionInBrowserConsole());
// powFunctionInBrowserConsole();