var names = ["Mike", "Noah", "Olive", "Peter", "Ryan"];

names.forEach(itemNames => {
    console.log(`Hi ${itemNames}`);
});

console.log("");

names.forEach(function (itemNames) {
    console.log(`Hi ${itemNames}`);
});
