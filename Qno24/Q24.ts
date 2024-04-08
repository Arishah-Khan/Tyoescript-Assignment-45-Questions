// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let animal_1:string = "Cat";
let animal_2:string = "CAT";


// Test 1: Equality with string 

console.log("Testing Equality with strings:")
console.log(animal_1 === animal_2);  // False

// Test 2: Inequality with string 

console.log("Testing Inequality with strings:")
console.log( animal_1 !== animal_2);  // True

// Test 3: Tests using the lower case function

console.log("Tests using the lower case function:");

let fruits:string = "Mango";

console.log(fruits.toLowerCase() === "mango");

// Test 4: Numericals Tests

let age1:number = 19;
let age2:number = 20;

console.log("Tests with Numericals value");

// Equality 

console.log( age1 === age2);

// Inequality

console.log( age1 !== age2);

// Greater Than

console.log( age1 > age2);

// Less Than

console.log( age1 < age2);

// Greater Than or Equal to

console.log( age1 >= age2);

// Less than or Equal to

console.log( age1 <= age2);

// Test 5:  Tests using "and" and "or" operators:

console.log("Tests using 'and' and 'or' operators");


let isEvening:boolean = true;
let isSunny :boolean = false;

console.log(isEvening && isSunny);

console.log(isEvening || isSunny);


// Test 6 : Test whether an item is in a array

let cities:string[] = ["Karachi","Lahore","Islamabad","Quetta"]

console.log(`Is "Lahore" in cities:`);

console.log(cities.includes("Lahore"));

// Test 7 : Test whether an item is not in a array

console.log(`is "Peshawar" not in cities:`);

console.log(cities.includes("Peshawar"));








