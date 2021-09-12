// lets assume that display() is a third party library function
// which displays the name of an object which is defined in a
// different context

function display() {
    console.log(this.name);
    console.log(arguments);
}

var p1 = {
    name: 'A'
}

var p2 = {
    name: 'B'
}

var arr1 =['one','two','three'];
var arr2 =['X','Y','Z'];
console.log('call output:')
display.call(p1, arr1[0],arr1[1],arr1[2]);
display.call(p2,arr2[0],arr2[1],arr2[2]);

function call(context, arg1, arg2, ...){
    // this of current function will be set to the context
    // current function is invoked by passing individual arguments.
}

function apply(context, args){
    // this of current function will be set to the context
    // current function is invoked by passing arguments array.
}

function bind(context, args){
    // A new function is created by binding the given context and arguemts 
    // to the current function.
    // new function is returned.
}
console.log('apply output:')
display.apply(p1, arr1);
display.apply(p2,arr2);


function invoker(f){
    setTimeout(()=>{
        f();
    }, 2000);
    
}
var p1callback = display.bind(p1, arr2);
var p2callback = display.bind(p2, arr1);
console.log('Bind output:');
invoker(p1callback);
invoker(p2callback);
