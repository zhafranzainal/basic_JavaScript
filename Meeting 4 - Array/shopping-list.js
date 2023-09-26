// 1. Save Mrs. Gojo’s monthly shopping list in an Array
var shoppingList = [
    "Wheat Bread",
    "Pasta",
    "Tomato Ketchup",
    "Low-fat Yogurt",
    "Butter"
];

// 2. Wheat bread is the most important list to buy
var importantToBuy = shoppingList[0];

// 3. Mrs. Gojo wants to buy Soy Milk instead of Low-fat Yogurt
shoppingList[3] = "Soy Milk";

// 4. Use the length method to determine how long the array is
var listLength = shoppingList.length;

console.log("Mrs. Gojo's Updated Shopping List: \n" + shoppingList);
console.log("\nThe most important item to buy : " + importantToBuy);
console.log("Length of the shopping list    : " + listLength);