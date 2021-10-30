let myBook = {
    author: "George Orwell",
    title: "1984",
    pageCount: 326
}

let otherBook = {
    author: "Howard Zinn",
    title: "A Peoples History",
    pageCount: 723
};

const getSummary = function(book) {
    return {
        summary :`${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    
}
let bookSummary = getSummary(myBook);

let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.summary);
console.log(otherBookSummary.pageCountSummary);



//create function that returns object


const tempConversion = function(fah) {
    let cel = (fah - 32) * 5 /9
}