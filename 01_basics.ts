// 1.🧠 *Annotations*

// Annotations are used to specified data type of a variable, parameter, function return value and other types of value

let firstName : string = "rahul"
let age : number = 28
let isStudent : boolean  = false

firstName = 22 //❌ Error: Type 'number' is not assignable to type 'string'

console.log({firstName, age, isStudent})

//*******************************************************************************************//


// 2.🧠 *Type Inference*

// Type Interface is a feature of javascript the allows the  compiler to automatically determine the type of variable base on it's value  when you declare a variable without explicitly specifying it's type typescript will try to infer the type base on the value you assign to it 


let tech =  "typescript"
let favNumber = 1
let isHard = true

//*******************************************************************************************//

// 3.🧠 *Any Type*

//Disable TypeScript’s type checking and allow variables to hold any data type

let technology : any = "Javascript"
technology = true

//*******************************************************************************************//

// 4.🧠 *never Type*

// The never keyword is used to indicate that a function will not return anything or that a variable can never have a value.

// A function that always throws an error or never finishes has return type 'never'.

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

