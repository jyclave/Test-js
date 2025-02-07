const age = 20;
const statut = age >= 18 ? "majeur" : "mineur";
console.log(statut)

function isValidPhoneNumber(phoneNumber) {
  for (let i = 0; i < phoneNumber.length; i++) {
      if (isNaN(parseInt(phoneNumber[i]))) {
          return false;
      }
  }
  return true;
}
console.log(isValidPhoneNumber("1234567890"));
console.log(isValidPhoneNumber("123-456-7890"));
console.log(isValidPhoneNumber("12a3456789"));
