const age = 16;
const monAge = 63;
const monName = "Clave";
const monFirstName = "Jean-Yves";

const StringAge = String(age);
console.log(StringAge);

const toStringAge = monAge.toString();
console.log(toStringAge);

const firstLetter = monName[0];
const lastCharacter = monName[monName.length - 1];
const notCharacter = monFirstName[4];
console.log(firstLetter);
console.log(lastCharacter);
console.log(notCharacter);

const text = `Bonjour, ${monFirstName}. `;
const textDeux = "Bonjour, " + monFirstName + ".";

console.log(text);
console.log(textDeux);

const upperCase = monFirstName.toUpperCase();
console.log(upperCase);

const lowerCase = monFirstName.toLowerCase();
console.log(lowerCase);

const monNomLength = monFirstName.length;
console.log(monNomLength);
