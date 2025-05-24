class User5 {
  firstName:string
  lastName:string 
  age:number
  email:string 
  location:string
  constructor(firstName:string, lastName:string, age:number, email:string, location:string){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
      this.location  = location;
  }
}

const person5 = new User5 ("Rahul", "Panwar", 27, "rahulp9833@gmail.com", "new Tehri")
console.log(person)