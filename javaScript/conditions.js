const tonAge = 17;

const minor = tonAge < 18;
console.log(minor);

const major = tonAge > 18;
console.log(major);

const yourAge = 19;
if (yourAge < 18 && yourAge > 16) {
  console.log(yourAge);
} else {
  console.log("Your are not under 18");
}

/* la variable est 4 ou inférieure à 4 = true */
const variable = 4;
if (variable || variable < 3) {
  console.log(variable);
} else {
  console.log("La variable n'est pas 4");
}
/* la variable et 4 et inférieure à 4 = false */
const otherVariable = 4;
if (variable && variable < 3) {
  console.log(otherVariable);
} else {
  console.log("La variable n'est pas inférieure à 4");
}

/* la réponse est false */
const yourName = "Maninbergerclave";
const isNameStartWith = yourName[0] === "a";
console.log(isNameStartWith);

const otherName = "ClaveBergerManin";
if (otherName[0] === "C") {
  console.log(otherName);
} else {
  console.log("Other name ne commence pas par la lettre C");
}
const otherNames = "ClaveBergerManin";
if (otherName[0] === "B") {
  console.log(otherNames);
} else {
  console.log("Other names ne commence pas par la lettre C");
}

/* j'affiche le prénom si la longeur est inférieure à 15 OU supérieur
à 12 autrement j'affiche "Votre prénom... */
const firstName = "Jean-Yves";
if (firstName.length < 15 || firstName.length > 12) {
  console.log(firstName);
} else {
  console.log("Votre prénom n'est pas supérieur à 12 ou inférieur à 15");
}

const notNumber = Number("Bonjour");
console.log(Number.isNaN(notNumber));

console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true


