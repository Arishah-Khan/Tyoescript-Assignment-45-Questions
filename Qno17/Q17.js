"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
console.log("Regrettably,I have limited space for guests,and I can only invite two guests.");
let guestList = ["Kiran", "Ajwa", "Tasmiya", "Zimal", "Samahir", "Laiba"];
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, you are not invited to the dinner`);
}
console.log(`\nDear ${guestList[0]} and ${guestList[1]}, You are still invited to the dinner.\n`);
console.log("Final List");
console.log(guestList);
guestList.splice(0, 2);
console.log(guestList);
