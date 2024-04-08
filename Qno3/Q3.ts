// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Lowercase:

let my_name1:string = "hAmmAd kHAn";
console.log("Lowercase:",my_name1.toLowerCase());

//Uppercase:

let my_name2:string = "hAmmAd kHAn";
console.log("Uppercase:",my_name2.toUpperCase());

//Titlecase:

let my_name3:string = "hAmmAd kHAn";
console.log("Titlecase:",my_name3.charAt(0).toUpperCase() + my_name3.slice(1,6).toLowerCase() + " " + my_name3.charAt(7).toUpperCase() + my_name3.slice(8,11).toLowerCase());

// or 

// let my_name3:string = "hAmmAd kHAn";
// console.log("Titlecase:",my_name3.slice(0,1).toUpperCase() + my_name3.slice(1,6).toLowerCase() + " " + my_name3.slice(7,8).toUpperCase() + my_name3.slice(8,11).toLowerCase());


