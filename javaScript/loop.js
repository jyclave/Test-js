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

// to loop through an array

for(let todo of todos){
  console.log(todo.id)
  console.log(todo.text)
}

// forEach, map, filter
todos.forEach(function (todo) {
  console.log(todo.text)
});
// map
const todoText = todos.map(function(todo) {
  return todo.text;
  
})
console.log(todoText);

// filter
  const completed = todos.filter(function(todo) {
    return todo.isCompleted === true;

  });
  console.log(completed);

// filter + map
const isCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text; 
});
console.log(isCompleted);


// For loop
for(let i = 0; i <=10; i++) {
  console.log(`For loop number: ${i}`)
}
// While loop
let i = 0;
while(i < 10) {
  console.log(`While loop number: ${i}`)
  i++
}


