// *tuples*

// tuples is a type that represent the fixed number of elements, where each element can have different type

const products : [string, number, boolean] = ["Mobile", 2, true]

const [productName, quantity, inStock] = products

console.log(productName, quantity, inStock)

//*******************************************************************************************//

// *enum*

// An enum is a special "class" that represents a group of constants (unchangeable variables).Enums come in two flavors string and numeric

enum Status {
  Ready = 10,  // starts at 10
  Processing,  // 11
  Done         // 12
}

console.log(Status.Ready);       // 10
console.log(Status.Processing);  // 11
console.log(Status.Done);        // 12



enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

console.log(Direction.Up);    // "UP"
console.log(Direction.Down);  // "DOWN"


let directionUp = Direction.Up
console.log(directionUp)
