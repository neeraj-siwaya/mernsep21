var x = 5;
function f1(){
    var y =10;
    console.log("It is f1()...");
    console.log('y: ',y);
    console.log('x: ',x);
}
console.log('We are in global context.');
console.log('Invoking f1()...');
f1();
