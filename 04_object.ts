// *Object*

// Object in typescript is a structured data type that represent collection of properties, in key value pair 

// Method 1
const person : {firstName:string,lastName:string, age:number} = {
  firstName:"rahul",
  lastName:"Panwar",
  age:27,
}

const person2 : {firstName:string,lastName:string, age:number} = {
  firstName:"rahul",
  lastName:"Panwar",
}
//❌ Error: Property 'age' is missing in type '{ firstName: string; lastName: string; }' but required in type '{ firstName: string; lastName: string; age: number; }

//*******************************************************************************************//

// *Type Aliases*
type User = {
  firstName:string,
  lastName:string,
  age:number  
}


const person3 : User = {
    firstName:"rahul",
    lastName:"Panwar", 
    age:27
}


console.log(person3)

function printUserInfo(user:User){
  return `${user.firstName} ${user.lastName} is ${user.age} year old`
}
const res = printUserInfo({firstName:"Rahul", lastName:"Panwar", age:27})
console.log(res)

//*******************************************************************************************//

// *Optional Properties* && *readOnly Property* 

type User2 = {
  firstName:string,
  lastName:string,
  age?:number 
  readonly email:string 
}


const person4 : User2 = {
  firstName:"rahul",
  lastName:"Panwar", 
  email:"rahulp9833@gmail.com"
}

person4.firstName = "Ashish"
person4.email = "Ashish"  //❌ Error: Cannot assign to 'email' because it is a read-only property.

console.log(person4)

//*******************************************************************************************//

// *InterSection Type*

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

// *Union Type*

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

// *Literal Types*

// variable can have only  have one specific value  from a fixed set of allowed values

let num : 1 | 2 | 10
num = 10
num = 3  //❌ Error: Type '3' is not assignable to type '1 | 2 | 10'


let secretePassword : "secreatePassword"
secretePassword =  "secreatePassword"



