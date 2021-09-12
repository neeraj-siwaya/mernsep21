
// class definition or constructor function
var Person = function(name, age){
    this.name = name; 
    this.age = age;
    this.display= function(){ // Method
        console.log(this.name+' is '+this.age+' years old.'); // In case of method, this always represents the current object.
    }
}

var p1 = new Person('A', 25);
var p2 = new Person('B', 10);

p1.display(); // Method call
p2.display(); // Method call

// object defintion
var emp = {
    name : 'Hari',
    display: function() {
        console.log("Welcome, ",this.name);
    }
}
emp.display();