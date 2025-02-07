// constructor function 
/*function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  
}
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear ();
}
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}
*/
// Class
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);   
  }
  getBirthYear (){
    return this.dob.getFullYear ();
  }
  getFullName (){
    return `${this.firstName} ${this.lastName}`;
  }
}
// Instantiate object

const person1 = new Person('Jean-Yves', 'Clave', '05-24-1961');
const person2 = new Person('Paulette', 'Clave', '09-07-1940');
const person3 = new Person('Robert', 'Clave', '06-12-1939');

const allPersons = [person1, person2, person3]

console.log(person1)
console.log(person1.firstName)
console.log(person2.dob);
console.log(person3.getBirthYear());
console.log(allPersons[1]);
console.log(person3.getBirthYear());



