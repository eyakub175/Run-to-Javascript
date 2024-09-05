
function passbyRefer(obj){
    let temp = obj.a;
    obj.a = obj.b;
    obj.b = temp;

    console.log('Inside pass by reference function: a = ${obj.a} b = ${obj.b}');
}

let obj ={a:1,b:2};


console.log('Before pass by reference fucntion: a=${obj.a} b=${obj.b}');

passbyRefer(obj);

console.log('After pass by reference function: a=${obj.a} b=${obj.b}');