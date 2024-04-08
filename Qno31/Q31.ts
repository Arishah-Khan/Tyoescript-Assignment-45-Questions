// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let user_names: string[] = ["nimra", "admin", "maryam", "misbah", "maheen"];

if (user_names.length === 0) {
    console.log("We need to find some users!")
} else {
    for(let i = 0 ; i < user_names.length ; i ++){
        console.log(user_names[i])
    }
}

user_names = [];
if (user_names.length === 0) {
    console.log("We need to find some users!")
} else {
    for(let i = 0 ; i < user_names.length ; i ++){
        console.log(user_names[i])
    }
}


