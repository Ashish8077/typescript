//  *Function Parameter Annotations* && *Funtion  return Annotations*

function double(x:number):number{
  return x * x
}

console.log(double(10))

const add = (x:number, y:number):number => x + y

console.log(add(10, 20))
console.log(add(10, 20, 30)) //❌ Error: Expected 2 arguments, but got 3.

//*******************************************************************************************//

// *Default params values*

function greeting(person:string = "Ashish"){
  return  `Hello ${person}`
}

console.log(greeting())

//*******************************************************************************************//

// *Void type* 

// represent the absence of value and it is often used as the return type for functions that do not return a value

function sayHello():void{
  console.log("Hey there")
}

sayHello()