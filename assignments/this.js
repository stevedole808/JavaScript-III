/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this” is a value that when in the global scope is seen as the window/console Object
* 2. Implicit binding is when a function is called by a preceding dot, "this" is the object before the dot.
* 3. New binding is when a constructor function is used, it's known as when the object is created and returned by the constructor function.
* 4. Explicit binding is when the call or apply method is used, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function currentTime(time){
    console.log(this);
    return time;
}
currentTime("10:00pm");

// Principle 2

// code example for Implicit Binding
const myTime = {
    greeting: 'Hi',
    sayHi: function(name){
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};

myTime.sayHi('Steve');

// Principle 3

// code example for New Binding

function MagicJohn(greeter) {
    this.greeting = 'Hi ';
    this.greeter = greeter;
    this.speak = function (){
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

    // const steve = new MagicJohn('Kobe');
    // const kobe = new MagicJohn('Steve');

    // steve.speak();
    // kobe.speak();

// Principle 4

// code example for Explicit Binding
function MagicJohn(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function (){
        console.log(this)
        return `Hello, my name is ${this.name}, and I am ${this.age} years old!`;
    };
}

    const steve = new MagicJohn({name: 'Kobe', age: '18'});
    const kobe = new MagicJohn({name: 'Steve', age: '19'});

steve.speak.call(kobe);
kobe.speak.apply(steve);