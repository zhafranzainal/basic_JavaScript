/*
Steve tops up his Steam wallet for $50, three times a month.
Every purchase, he gets a $2 discount.
Calculate his total purchases.
*/

const monthlyPurchases = 3;
const purchaseAmount = 50;
const discountPerPurchase = 2;

// Calculate total purchases without discount
const totalPurchasesWithoutDiscount = monthlyPurchases * purchaseAmount;

// Calculate total discount received
const totalDiscount = monthlyPurchases * discountPerPurchase;

// Calculate total purchases with discount
const totalPurchasesWithDiscount = totalPurchasesWithoutDiscount - totalDiscount;

console.log("Total purchases: $" + totalPurchasesWithDiscount);