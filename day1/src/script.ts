//first page

// 2. Declare variables for:
// o username (string)
// o age (number)
// o isLoggedIn (boolean)

let username: string = "Shehab";
let age: number = 23;
let isLoggedIn: boolean = false;

//3. Try assigning invalid types and observe what happens.

//Type 'number' is not assignable to type 'string'.
//username = 23;
//console.log(username);

//4. Create a variable id that can hold either a string or a number.

let id: string | number = 1;
id = "7amada";

//5. Define a variable without specifying its type and see what type TypeScript infers.
//Type 'number' is not assignable to type 'string'.
let address = "maddi";
//address=1234

//6. Write a function greet(name: string, age?: number) that returns a greeting message.
function greet(name: string, age?: number): string {
  return `Hello ${name} your age is ${age}`;
}

//7. Call the function with one and two arguments — what happens?
//the age return undefined if i don't give it
console.log(greet("Shehab", 23));
console.log(greet("Shehab"));

// 8. What is type inference? Give one example in your code.
// the typescript automatically get the input type
// example
let name2 = "Shehab";
console.log(typeof name2); // it will be string
//Type 'number' is not assignable to type 'string'.
//name2=2

//page 2

// 1. Define an interface User with:
// o id (number)
// o name (string)
// o email (optional string)

interface User {
  id: number;
  name: string;
  email?: string;
}

//2. Create an object person with the same structure but without declaring its type.

let person = {
  id: 1,
  name: "Shehab",
};

//3. Assign person to a variable of type User. Does it work?

let user1: User = person;
console.log(user1);

//4. Add an extra property to person — does TypeScript allow it?
//doesn't allow it
//Object literal may only specify known properties, and 'age' does not exist in type '{ id: number; name: string; }'.

// person={
//     id:1,
//     name:"Shehab",
//     age:23
// }

//5. Write a function printUser(u: User) that prints the user’s name and id.
(function printUser(u: User): void {
  console.log(`User name is ${u.name} and id is ${u.id}`);
})(user1);

//6. Extend User into an Admin interface with an array of permissions.

interface Admin extends User {
  permissions: string[];
}

//7. Create an Admin object and print it.
let admin: Admin = {
  id: 1,
  name: "Shehab",
  permissions: ["admin"],
};
console.log(admin);

//8. Explain what “structural typing” means in your own words.

//law 2 object nafs el structure 3amlnalhom = hayt3lo b nafs el type

//page 3

//1. Define an interface Logger with a log(message: string) method.
interface Logger {
  log(message: string): void;
}

//2. Create an abstract class BaseLogger that:
// o Declares an abstract method log(message: string)
// o Has a concrete method printDate() that logs the current date.

abstract class BaseLogger {
  abstract log(message: string): void;
  printDate(): void {
    console.log(new Date());
  }
}

//3. Create a class ConsoleLogger that:
// o Extends BaseLogger
// o Implements Logger
// o Overrides log() to print both date and message

class ConsoleLogger extends BaseLogger implements Logger {
  log(message: string): void {
    this.printDate();
    console.log(message);
  }
}

//4. Instantiate the ConsoleLogger class and call log().

let logger = new ConsoleLogger();
logger.log("log message");

//5. What is the difference between an interface and an abstract class?
//abstract class byb2a feha code 3ady w feha abstract method
//interface byb2a feha method bas msh feha code
