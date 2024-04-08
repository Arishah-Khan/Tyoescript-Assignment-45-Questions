// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
var Magician = ["Harry Blaine", "Dynamo", "David Copperfield", "Albus Dumbledore"];
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        Magician[i] = "The Great " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
make_great(Magician);
show_magicians(Magician);
