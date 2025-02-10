/*const produits = [
  { nom: 'Pomme', prix: 1.5 },
  { nom: 'Banane', prix: 2.0 },
  { nom: 'Orange', prix: 2.5 },
  { nom: 'Mangue', prix: 5.0 }
];

//Utilise une boucle for pour afficher chaque produit et son prix.
for (let i = 0; i < produits.length; i++) {
  console.log(produits[i]);
};

//Utilise forEach pour augmenter chaque prix de 10% et afficher les nouveaux prix.
produits.forEach(produit => {
  const nouveauPrix = (produit.prix * 1.10).toFixed(2);
  console.log(`Nouveau prix de ${produit.nom} : ${nouveauPrix}`);
});

//Utilise map pour créer un nouveau tableau contenant uniquement les noms des produits.
const nomsProduits = produits.map(produit => produit.nom);
console.log(nomsProduits); 

const prixProduits = produits.map(produit => produit.prix);
console.log(prixProduits);

//Utilise filter pour obtenir les produits dont le prix est supérieur à 2 euros.
const produitsFiltres = produits.filter(produit => produit.prix >= 2);
console.log(produitsFiltres);
*/

/*const destinations = ["Bali", "Vietnam", "Laos", "Malaisie"];
destinations.pop();
destinations.push("Hong Kong");
console.log(destinations.length);
const destinationsTriees = destinations.map(dest => dest.toUpperCase()).sort();

console.log(destinationsTriees);*/

const voyages = [
  {ville:'Denpasar', pays:'Bali'},
  {ville:'Hanoi', pays: 'Vietnam'},
  {ville: 'Kuala Lumpur', pays: 'Malaisie'},
  {ville: 'Ventiane', pays:'Laos'}
];

const nomPays = voyages.map(voyage => voyage.pays);
console.log(nomPays);
const nomVille = voyages.map(voyage => voyage.ville).sort();
console.log(nomVille);










