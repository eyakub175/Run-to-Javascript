function PassbyReference(obj) {

    // Changing the reference of the object
    obj = {
        a: 10,
        b: 20,
        c: "GEEKSFORGEEKS"
    }
    console.log(`Inside Pass by 
        Reference Function -> obj `);
        
    console.log(obj);
}

let obj = {
    a: 10,
    b: 20

}
console.log(`Updating the object reference -> `)
console.log(`Before calling Pass By 
        Reference Function -> obj`);
console.log(obj);

PassbyReference(obj)
console.log(`After calling Pass By 
        Reference Function -> obj`);
console.log(obj);
