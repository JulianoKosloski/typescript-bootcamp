// -------------------------------BASICS---------------------------------

let message: string = "Hello, World!";
console.log(message);

let isError: boolean = true;
let myErr: number = 404;
if(isError) {
    console.error(`Error number ${myErr}`);
}

let chaos: any = "I'm chaos!"; //any allows any type to be used
console.log(chaos);
chaos = 666;
console.log(chaos);
chaos = true;
console.log(chaos);

let destruction: unknown = "I'm milder!"; //unknown is a bit safer since it needs casting to change types
let dayIDie: undefined;
let vaccuum: null;

// -------------------------------ARRAYS, TUPLES, OBJECTS---------------------------------

const animals: string[] = [];
animals.push('giraffe');
animals.push('platypus');
animals.push('bear');

const friends: readonly string[] = ["Bob", "Dylan", "Johnny", "Cash"]; //readonly blocks array change
// friends.push('Squarepants'); ---> doesn't exist since friends are readonly

let secret:  [number, boolean, string];
secret = [31, true, "Solve the secret with these clues!"];

let book: { author: string, genre: string, noOfPages: number, year: number, isGood?: boolean};
//isGood uses ? and is an optional property

book = {
    author: "Barnabe Barnabas",
    genre: "Horror",
    noOfPages: 679,
    year: 1992,
}

console.log(`Author: ${book.author}, Genre: ${book.genre}, noOfPages: ${book.noOfPages}, Year: ${book.year}`);

let phoneNumbers: {[index: string]: number} //properties are not defined but must take a string
phoneNumbers = {"John": 345, "Mary": 689}

// -------------------------------ENUMS---------------------------------

//enums are a list of constants (number or string)

enum Estado {
    Novo, //each item can also be initialized with numbers or strings
    Seminovo,
    Usado
}

enum ErrorList {
    notFound = 404,
    cantReach = 300,
    notExist = 500
}

let myEstado = Estado.Novo;
console.log(myEstado); //prints 0, since "novo" is the first item in the enum

let myNewError = ErrorList.notFound;
console.log(myNewError); //prints 404

// -------------------------------TYPE ALIASES, UNION TYPES AND INTERFACES---------------------------------

type constructionYear = number;
type houseSize = number;
type howManyBathrooms = number;

let myHouse: {
    year: constructionYear,
    size: houseSize,
    bathrooms: howManyBathrooms
}

myHouse = {
    year: 1947,
    size: 87,
    bathrooms: 3
}

// yet it's easier to use interfaces for objects (like defining them outside of a class)

interface Fish {
    name: string,
    coldWater: boolean,
    size: string,
}

interface Shark extends Fish { 
    teeth: number,
    dangerous: boolean
}

const fish1: Fish = {
    name: "Pirarucu",
    coldWater: false,
    size: "Very large" 
};

const fish2: Fish = {
    name: "Tilapia",
    coldWater: true,
    size: "Small" 
};

console.log(
    `The ${fish2.name} is ${fish2.size} when compared to the ${fish1.name}, which is ${fish1.size}`
)

let secretCode: number | string; 
//union types can be used to avoid errors, but type-specific methods need to be carefully used, such as String's toUpperCase()