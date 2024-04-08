// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.


let guestList:string[] = ["Kiran","Ajwa","Tasmiya","Zimal","Samahir","Laiba"];

let canNotAttend = guestList.shift();
console.log(`Sorry, ${canNotAttend}! can't make it, for Dinner.`);

let newGuest = guestList.splice(0,0,"Ayesha");

guestList.map((items) => 
console.log(`\"Dear ${items}!, you are invited for dinner this weekend.\"`));


// OR  

// let guests:string[] = ["Nimal","Hammad","Yasir","Shifa","Maheen"];

// let cantInvited:string = "Yasir";
// console.log("Sorry " + cantInvited + " " + "can't make it for dinner.");

// let newinvited:string = "Amna";
// guests[guests.indexOf(cantInvited)] = newinvited;

// guests.map((items) => (console.log(`\"Dear ${items}, you are invited for dinner this weekends.\"`)))

