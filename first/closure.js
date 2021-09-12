function outer(x){
    var y = 'outer local variable.';
    console.log('outer function is completed, returning an inner function...');
    return function inner(z){
        console.log('X of outer is '+x);
        console.log('Y of outer is '+y);
        console.log('Z of inner is '+z);
    }
}
console.log('Invoking outer function...');
var f = outer('outer parameter');
console.log('Invoking inner function...');
f('inner parameter');