const obj = {
    product: "Mobile",
    price: 20000,
    color: "Blue",
 }

let product = obj.product ?? "Watch";
let brand = obj.brand ?? "Apple";
/* 
let x = 5 || 7 ?? 9; // Syntax Error
let x = (5 || 7) ?? 9; // works */  d