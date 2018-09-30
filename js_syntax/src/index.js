// when this in a sample function  this should arrow to global
function baseThisModel() {
    let a = 1111;
    console.log(this.toString());
    console.log(this.a);
}
baseThisModel();
console.log('---------------------------------------------');

function test() {
    var a = 23;
    return function() {
        console.log(this.toString());
        console.log(this.a);
        console.log(a);
    };
}

var testThis = test();
testThis();

console.log('------------------------------------------------');

function arrowThis() {
    let a = 'arrow';
    return () => {
        console.log(this.toString());
        console.log(this.a);
        console.log(a);
    };
}

arrowThis()();
console.log('---------------------------------------------');

var closure = function() {
    let a = 34;
    return function() {
        console.log(this.toString());
        console.log(this.a);
        console.log(a);
    };
};
closure()();
console.log('-----------------------------------------------------');
// ------------------------------------------------------------------------
var module = {
    x: 42,
    getX: function() {
        // console.log(this.toString());
        return this.x;
    }
};
console.log(module.getX());
var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
