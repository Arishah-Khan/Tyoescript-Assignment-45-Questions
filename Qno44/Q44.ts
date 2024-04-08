// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.


function makeSandwich (item : string[]) {
    console.log(`Making a sandwich with  the following the following items: \n`);

    item.forEach(element => console.log("-" + element));

    console.log("\n Enjoy your tasty sandwich! \n");
}

// Now call the function three items with three different arguments.

makeSandwich(["Grilled Chicken", "Mint Chutney", "lettuce"]);

makeSandwich(["Potatoes", "Flatbread", "Onion", "Egg"]);

makeSandwich(["Cheese", "Butter", "Mayo", "Capsicum","Chicken"]);








