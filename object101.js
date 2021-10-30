let myBook = {
    author: "George Orwell",
    title: "1984",
    pageCount: 326
};


console.log(`${myBook.title} by ${myBook.author}`);


myBook.title = "Animal Farm";
console.log(`${myBook.title} by ${myBook.author}`);


//Challenge area

let person = {
    name: "Andrew",
    age: 27,
    location: "Philadelphia"
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age = ++person.age;

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`); 