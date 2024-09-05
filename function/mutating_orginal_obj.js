function PassbyReference(obj) {

    // Mutating the original object 
    obj.c = "GEEKSFORGEEKS";
    console.log(`Inside Pass by
        Reference Function -> obj `);
    console.log(obj);
}

let obj = {
    a: 10,
    b: 20

}
console.log(`Mutating the original object -> `)
console.log(`Before calling Pass By
        Reference Function -> obj`);
console.log(obj);

PassbyReference(obj)
console.log(`After calling Pass By 
        Reference Function -> obj`);
console.log(obj);
