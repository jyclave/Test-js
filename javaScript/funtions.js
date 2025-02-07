function read(bookName) {
  console.log(`Je lis ${bookName}`)
}
function run(distance = 10, speed = 10) {
  console.log(`Je cours ${distance}km à ${speed}km/h`)
}


const showWarningMessage = (title, message = "Attention") => {
  console.log(title)
  console.log(message)
}

function calculatePercentage(value, total) {
  return (value / total) * 100;
}

let a = 100;
let b = 50;

let percentage = calculatePercentage(b, a);

console.log("Le pourcentage est: " + calculatePercentage)


function calculateTotal(unitPrice, quantity) {
  return unitPrice * quantity;
}

function applyDiscount(totalAmount, quantity) {
  if (quantity > 4) {
      return totalAmount - (totalAmount * 10 / 100);
  }
  return totalAmount;
}

function addShippingFees(totalAmount) {
  if (totalAmount < 100) {
      return totalAmount + 5;
  }
  return totalAmount;
}

let unitPrice = 20;
let quantity = 5;

let totalAmount = calculateTotal(unitPrice, quantity);
totalAmount = applyDiscount(totalAmount, quantity);
totalAmount = addShippingFees(totalAmount);

console.log("Montant final à payer : €" + totalAmount);


function add(a, b) {

  const result = a + b;

  return result;
}//        │
//     ┌───┘
//     │
const result = add(1, 2);
console.log(result); // 3

console.log(add(add(3,5), add(10,5)))

  