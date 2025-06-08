// 1. *Annotations*

// Annotations are used to specified data type of a variable, parameter, function return value and other types of value

let firstName : string = "rahul"
let age : number = 28
let isStudent : boolean  = false

firstName = 22 //❌ Error: Type 'number' is not assignable to type 'string'

console.log({firstName, age, isStudent})

//*******************************************************************************************//


// 2. *Type Inference*

// Type Interface is a feature of javascript the allows the  compiler to automatically determine the type of variable base on it's value  when you declare a variable without explicitly specifying it's type typescript will try to infer the type base on the value you assign to it 


let tech =  "typescript"
let favNumber = 1
let isHard = true

//*******************************************************************************************//

// 3. *Any Type*

//Disable TypeScript’s type checking and allow variables to hold any data type

let technology : any = "Javascript"
technology = true

//*******************************************************************************************//

// 4. *never Type*

// The never keyword is used to indicate that a function will not return anything or that a variable can never have a value.

// A function that always throws an error or never finishes has return type 'never'.

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}


//*******************************************************************************************//

// 5. *InterSection Type*

type UserInfo = {
  firstName:string,
  lastName:string,
  age:number
 }
 
 type accountDetails = {
   email:string,
   password:string,
 }
 
 type User3 = UserInfo & accountDetails
 
 
 const someone : User3 = {
   firstName:"Gautam",
   lastName:"kunwar",
   age:23,
   email:"gautamkunwar@gmail.com",
   password:"gautam@123"
 }
 
 
 //*******************************************************************************************//

 // 6. *Union Type*

// A union type allows a variable to hold values of multiple types, one at a time


let value : number | string

value = 23
value = "Ashish"
value = false   //❌ Error: Type 'boolean' is not assignable to type 'string | number'

type UserInfo2 = {
  firstName:string,
  lastName:string,
  age:number
 }
 
 type accountDetails2 = {
   email:string,
   password:string,
 }

 type User4 = UserInfo2 | accountDetails2

const someone2 : User4 = {
  email:"gautamkunwar@gmail.com",
  password:"gautam@123"
}


const items: (string | number)[] = ["fruits", 20]

const items2: (string | number)[] = ["fruits", 20, true]

//❌ Error: Type 'boolean' is not assignable to type 'string | number'


//*******************************************************************************************//

// 7. *Literal Types*

// variable can have only  have one specific value  from a fixed set of allowed values

let num : 1 | 2 | 10
num = 10
num = 3  //❌ Error: Type '3' is not assignable to type '1 | 2 | 10'


let secretePassword : "secreatePassword"
secretePassword =  "secreatePassword"



