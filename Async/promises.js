let myPromise = new Promise(function(Myresolve, Myreject){


    Myresolve();
    Myreject();

});

myPromise.then(function(value){
    console.log('Success: ', value);
},
function(error){
    console.log('Error: ', error);
}
)

