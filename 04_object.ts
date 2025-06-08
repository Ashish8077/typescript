// 1. *Object*

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

// 2. *Type Aliases*
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

// 3. *Optional Properties* && *readOnly Property* 

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
