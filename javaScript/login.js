const ulElement = document.querySelector("ul");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    console.log(users);
    for (const user of users) {
      const liElement = document.createElement("li");
      liElement.innerText = user.name;
      ulElement.appendChild(liElement);
    }
  });
