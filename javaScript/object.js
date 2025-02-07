const person = {
  firstName: 'John' ,
  lastName: 'Doe' ,
  age: 30,
  hobbies: ['music', 'travel', 'reading'],
  address: {
    street: '25 rue des clercs',
    town: 'Vienne',
    zipCode: '38200',
    country: 'FR',
  }
}
console.log(person)
console.log(person.hobbies[2], person.address)
console.log(person.address.town)

person.email = 'jyclave@free.fr'
console.log(person.email)

const todos = [
  {
    id: 1,
    text: "Meeting with mentor",
    isCompleted: true

  },
  {
    id: 2,
    text: "Dentist appt",
    isCompleted: true

  },
  {
    id: 3,
    text: "Belle Italia",
    isCompleted: false

  },
];
console.log(todos[1].text) 

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)


 









