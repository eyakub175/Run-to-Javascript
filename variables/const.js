/* Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope */

//Cannot be Reassigned

/* const pi = 3.14;
pi =3 */ //this will give an error



// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

console.log(cars);
