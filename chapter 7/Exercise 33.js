// *7.33 (Culture: Chinese Zodiac) Simplify Listing 3.9 using an array of strings to store 
// the animal names.



let animals = [
    {name:'monkey'},
    {name:'rooster'},
    {name:'dog'},
    {name:'pig'},
    {name:'rat'},
    {name:'ox'},
    {name:'tiger'},
    {name:'rabbit'},
    {name:'dragon'},
    {name:'snake'},
    {name:'horse'},
    {name:'sheep'}
]

let year = prompt("Enter a year:");
let animal = year % 12;

console.log("Year : "+year+"\nAnimal : "+animals[animal].name);
