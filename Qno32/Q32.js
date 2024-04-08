"use strict";
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["ALI", "HAMZA", "RAYAN", "AHMED", "ALIYAN"];
let new_users = ["Zainab", "Malaika", "Ahmed", "Anamta", "Aliyan"];
for (let new_user of new_users) {
    let isAvailable = true;
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            console.log(`Username "${new_user}" has already been taken, please choose a different username. `);
            isAvailable = false;
            break;
        }
    }
    if (isAvailable) {
        console.log(`Username "${new_user}" is available.`);
    }
}
