// 1. *Function Parameter Annotations* && *Funtion  return Annotations*

function double(x:number):number{
  return x * x
}

console.log(double(10))

const add = (x:number, y:number):number => x + y

console.log(add(10, 20))
console.log(add(10, 20, 30)) //❌ Error: Expected 2 arguments, but got 3.

//*******************************************************************************************//

// 2. *Default params values*

function greeting(person:string = "Ashish"){
  return  `Hello ${person}`
}

console.log(greeting())

//*******************************************************************************************//

// 3. *Void type* 

// represent the absence of value and it is often used as the return type for functions that do not return a value

function sayHello():void{
  console.log("Hey there")
}

sayHello()

//*******************************************************************************************//
// 4.  *Type Alias For Function*

type MathOperation = (a: number, b?: number) => number;
// b?: number (optional — may be undefined

const add2: MathOperation = (x, y) => {
  // Checks if the second argument y is undefined (i.e., not provided).
  if(typeof y === "undefined") return x
  return x * y
}

add2(2)


// 5. *Rest Parameter Type*

type restPara = (...rest:number[]) => number[]
const func : restPara = (...rest)=>{
  return rest
}
console.log(func(10, 20, 30, 40))



// function add: MyFunc (a, b) {
//   return a + b;
// }
// ❌ Syntax error – you can't use a type alias like this with a named function



