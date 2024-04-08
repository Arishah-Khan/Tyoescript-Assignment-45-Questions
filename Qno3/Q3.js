"use strict";
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Lowercase:
let my_name1 = "hAmmAd kHAn";
console.log(my_name1.toLowerCase());
//Uppercase:
let my_name2 = "hAmmAd kHAn";
console.log(my_name2.toUpperCase());
//Titlecase:
let my_name3 = "hAmmAd kHAn";
console.log(my_name3.charAt(0).toUpperCase() + my_name3.slice(1, 6).toLowerCase() + " " + my_name3.charAt(7).toUpperCase() + my_name3.slice(8, 11).toLowerCase());
