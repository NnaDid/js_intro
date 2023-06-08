let btn = document.querySelector(".test_btn");
btn.onclick = function(){
    alert("Hello I am the second test button on the page");
}

// Variables
var test;             // Variable declaration
    test   = 34;       // vaiable initalization
var ay = "Ayo Ayodeji"; // both declaration and initialization
console.log(ay);
let my_Bro = "Mozillar 2022";
const agE = 13;
const Age = 109;
let dob   = "19/12/2009";

let h = 90;

let new3 = 90;

console.log(test);
test = 98; 
console.log(test);

// DATA TYPES AND STRUCTURES

// Strings
let name1 = "Mr. Christian 156";
let name2 = 'Mr. Peter 90';
let name3 = `Hello I am ${name1} - ${ 230 + 450 }`; // template string
console.log(name3);

let accounBalance = 4568900;
let account       = "98678";

let totalBalance  = 453 + accounBalance + account; // concatenation
let totalBalance2 = accounBalance * account; // concatenation

console.log(typeof accounBalance);
console.log(typeof account);

console.log( totalBalance );
console.log( totalBalance2 );

console.log( name1.toUpperCase() );  //convert to capital letters
console.log( name1.toLowerCase() );  //convert to small letters


let myStory = "    My name is Christian, I am a Fullstack engineer and the author of HOW stuff Works in Javascript      ";

console.log( myStory[0] );      // access the position of a charater in myStory
console.log( myStory.length );  // tell us the number of characters in myStory

let numOfWords = myStory.split(" ");  // split the mystory into substrins or words and return them as array

console.log( numOfWords );  // 
console.log( numOfWords.length );  // find the number of words in the myStory

console.log(myStory);

console.log(myStory.trim());
// let xyy = myStory.trimEnd();
console.log(myStory.trimEnd());  // removes whitespace from the beginning of the string

let conString = myStory.concat("PHP","Java","Python");
console.log(conString);

let testStr = "AHP|LENOVO|HOST|DELL|MAC";
let partTwo = testStr.repeat(3);

console.log(partTwo);

console.log( "*".repeat(6) );
console.log( testStr.charAt(0) );

console.log( testStr.charCodeAt(0) );

console.log( testStr.includes("D") );

console.log( testStr.indexOf("e") );

console.log( testStr.substring() );

console.log( testStr.slice(0, testStr.length-1) )

console.log( testStr ) 



// NUMBERS
let myNum = 45;
let xNum  = "123.78654";

let xConverted  = Number(xNum);
let xConverted2 = parseInt(xNum);
let xConverted3 = parseFloat(xNum);

console.log(xNum, xConverted, xConverted2, xConverted3);

let aprox = Number( xConverted3.toFixed(2) );

console.log(aprox);

let xdiv = 23/0;

console.log( xdiv );


// Udefined
let xtextme;
let nxObj = null;
let myarr = [];
console.log(typeof xtextme);

console.log( nxObj );

console.log(typeof nxObj);
console.log(typeof myarr);





// Data structures
// 1. Array
// 2. Object
// 3. Map
// 4. Set


// Array :
let myArr = [
    "Mr. Christian",
    true,
    764,
    [1,4,5,8,9,0,1]
];

// reading from the array
console.log(myArr[0]);
console.log(myArr[3][1]);


// writing to the array
myArr[0] = 1998;

myArr[4] = "Mr. Godswill";
// myArr[14] = "You know";

// push, unshift, shift, pop,
// slice, splice, length, indexOf,

let newPush = myArr.push(45);
myArr.push("Huwawei","Honkong","Togo","Abidjan");
// Adding items at the begining of the array
myArr.unshift(900,"Hugary","Ohio","Missisippi","Aminu Kano");
console.log(newPush);




// Remove elements from array
let removedItem = myArr.pop();
let shiftedItem = myArr.shift();

console.log( removedItem, shiftedItem );

// Uisng the slice and splice
let firstcopy = myArr.slice(3,9);
let firstcopy2 = myArr.slice(3,-3);
let firstcopy3 = myArr.slice(-3);

console.log( firstcopy , firstcopy2, firstcopy3);


let removedItems = myArr.splice(5,3);

let items2Add = ["Abuja","Ondo",2023];

let removedItems2 = myArr.splice(3,3,...items2Add);

console.log( removedItems2 );
console.log( removedItems );

console.log( myArr );


let ohioIndex = myArr.indexOf("hio");

console.log(ohioIndex);

let filteredNumbers  = myArr.filter( (item)=> typeof item === "number");

let filteredNumbers2 = myArr.filter( function(item){
    return typeof item === "number";
});

console.log(filteredNumbers);
console.log(filteredNumbers2);


// foEach and the map
myArr.forEach( (item,index) => console.log(index , item) );

myArr.map( (item,index) => console.log(index , item) );


let mProductPrices = [23000,90000,65000,125000,165000];

let seelingPriceList = mProductPrices.map( (price) => 0.2*price + price );

console.log(seelingPriceList);

console.log(seelingPriceList.sort((a,b) => a - b) );
// console.log(seelingPriceList.sort((a,b) => b - a) );



















