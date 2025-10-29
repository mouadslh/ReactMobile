import { PRODUCTS } from "./data/products.js";
import { isExpired } from "./utils/date.js";

// Étape 2 : afficher tous les produits
PRODUCTS.forEach((p) => console.log(p));

// Étape 3 : afficher seulement le nom
PRODUCTS.forEach((p) => console.log(p.name));

// Étape 4 : filtrer les produits expirés
const expired = PRODUCTS.filter((p) => isExpired(p.expiryDate));
console.log("Produits expirés :", expired);

// Étape 5 : calculer la valeur totale du stock
const total = PRODUCTS.reduce(
  (somme, p) => somme + p.price * p.quantity,
  0
);
console.log("Valeur totale du stock :", total, "MAD");

// Étape 6 : filtrer et trier
const promo = PRODUCTS.filter((p) => p.tags.includes("promo"));
console.log("Produits en promo :", promo.map((p) => p.name));

const sorted = [...PRODUCTS].sort((a, b) => a.price - b.price);
console.log("Tri par prix croissant :", sorted.map((p) => p.name));

// Étape 7 : ajouter un nouveau produit (Promise + async/await)
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const addProduct = async (list, newP) => {
  await delay(300);
  const id = Math.max(...list.map((p) => p.id)) + 1;
  return [...list, { id, ...newP }];
};

const newList = await addProduct(PRODUCTS, {
  name: "Savon",
  category: "Hygiène",
  price: 5,
  quantity: 10,
  expiryDate: "2026-01-01",
  tags: ["hygiene"]
});

console.log("Après ajout :", newList.length, "produits");
