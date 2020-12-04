/*
PET OBJECT
Create pet object
The object should contain the following properties:

Animal - string
Name - string
Gender - string
Age - integer
Likes - array

*/

let petObject = {
    Animal: "Tiger",
    Name: "Tigger",
    Gender: "Male",
    Age: 52,
    Likes: ["bouncing", "extract of malt", "hanging with his pals" ],
}

// console.log(petObject.Likes[2]);
console.log(`${petObject.Name} likes ${petObject.Likes[2]}`)
