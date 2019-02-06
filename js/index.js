function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
}

// Implement the functionality of the 'new' operator as if you had the code:
// var myObj = new MyObject();
// but do not use the 'new' operator.
//
// Start with a simple empty Object literal.
var myObj = {};
function newObj() {
    for (let key in MyObject) {
        myObj[key] = MyObject[key];
        return this;
    }
}

///////////
function maps(x) {
    for (let i = 0; i < x.length; i++) {
        x[i] *= 2;
    }
    return x;
}

function mapsjs(x){
    x.maps(function(items){
        return items*2;
    })
}

////////
let args = [1,56,232,-12,8];
function findSmallestInt(args) {
    let min = args[0];
    for (let i = 1; i<args.length; i++){
        if(min>args[i]){
            min = args[i];
        }
    } 
    return min;
  }
  alert(findSmallestInt(args));
