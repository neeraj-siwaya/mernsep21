// class definition or constructor function
var Person = function(name, age, hobbies){
    this.name = name; 
    this.age = age;
    this.hobbies = hobbies;
    /*
    this.display= function(){ // Method
      for(i=0; i< hobbies.length; i++) {
            console.log(hobbies[i]);  
      }   
    }
    
    this.display= function(){ // Method
        this.hobbies.forEach(function(hobby){
                    console.log(this.name+' likes '+hobby);  
        });    
          
      }
      
      this.display= function(){ // Method
        this.hobbies.forEach(function(hobby){
                   //console.log(this.name+' likes '+hobby);  
        },this);    
          
      }
      */
      this.display= function(){ // Method
        this.hobbies.forEach((hobby)=>{
                   console.log(this.name+' likes '+hobby);  
        });    
          
      }
}

var p1 = new Person('A', 25, ['Reading', 'Cycling', 'Watching Movies']);
var p2 = new Person('B', 10, ['Sleeping', 'Eating', 'Singing']);
p1.display();
p2.display();