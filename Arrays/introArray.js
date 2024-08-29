/* Creating an Array
Using an array literal is the easiest way to create a JavaScript Array.

Syntax:

const array_name = [item1, item2, ...];       */


const name = ["rafi", "sabbir", "Siyam"];
//You can also create an array and then provide the elements:

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

console.log(cars[0]);

//Convert array to string

console.log(cars.toString());
console.log(typeof cars);

//Accessing the Last Array Element

const fruits = ["Banana", "Orange", "Apple"];
let fruit = fruits[fruits.length-1];
console.log(fruit);


//Looping Array Elements


let flen = fruits.length;
let temp = 0;

for (let i = 0; i <flen; i++){
     
     console.log(fruits[i]);
     
}





