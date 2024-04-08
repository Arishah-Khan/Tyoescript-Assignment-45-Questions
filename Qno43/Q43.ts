// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.


let Magician : string[] = ["Harry Blaine","Dynamo","David Copperfield","Albus Dumbledore"];


function copyArray (magicArray:string[]){

    return[...magicArray]

}

function make_great(magicianArray:string[]) {

    for (let i = 0; i < magicianArray.length; i++) {

        magicianArray[i] ="The Great " +  magicianArray[i];
    }
}

function show_magicians (magicians:string[]) {

    magicians.forEach(magician => {
        console.log(magician);
        
    });
}

const copyMagicianArray = copyArray(Magician);

make_great(copyMagicianArray);


console.log("\n\nThis is Original Array")

show_magicians(Magician);



console.log("\n\nThis is modified copy of the Array")

show_magicians(copyMagicianArray);