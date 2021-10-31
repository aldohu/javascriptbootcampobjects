let name = "Andrew Mead";

console.log(name.length);

//upercase
console.log(name.toUpperCase());

//lower case 
console.log(name.toLowerCase());

//includes method

console.log(name.includes("ba"));

//trim  

console.log(name.trim()  );

//challenge

const validPassword = function(pass) {
    return pass.length >8 && !pass.includes("password")
    
}

console.log(validPassword("asdfp"));
console.log(validPassword("abc123!@#$%^&"));
console.log(validPassword("asdfppassword"));