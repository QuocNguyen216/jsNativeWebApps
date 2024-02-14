console.log(`Hello`);
//print stuff in the console
console.log(`I like people`);

//popup a window
//window.alert(`warning shit`);


//selecting id
document.getElementById("header1").textContent = `Welcome`;
document.getElementById("para1").textContent = `not mario`;

//variables
//declare and assign
let x;
x = 123;
console.log(x);

let age = 300, price = 10.99, gpa = 4.0;
console.log(`You are ${age} year old`);
console.log(`you are worth $${price}`);
console.log(`Your gpa is ${gpa}`);

//String

let name = "Nigga man";
console.log(`Your name is ${name}`);
console.log(`what are you ${typeof name}`);

//Boolean
let online = true;
console.log(`online is ${online}`);
console.log(`type of online is ${typeof online}`);

// document.getElementById("p1").textContent = `you are ${name}`;
// document.getElementById("p2").textContent = `you are ${age}`;
// document.getElementById("p3").textContent = `you have ${gpa} gpa`;

//exponent is **
console.log(`you have ${gpa**gpa} gpa`);

//you can do
//gpa += gpa <=> gpa = gpa + gpa

//accept user input
//1. easy way:

let user;

//user = window.prompt("what the fuck man?");
//console.log(user);

//2. professional input accepter

document.getElementById("submit").onclick = function(){
    username = document.getElementById("inbox").value;
    console.log(username);
    document.getElementById("para1").textContent = `Your username is: ${username}`;
}

//type conversion Number() String() Boolean()

// let age2 = window.prompt("age nigga?");

// age2 = Number(age2);
// age2+=1;
// console.log(age2);


//use const so that a variable can't be changed once you
//assigned it a valie and it also need to be
//capitalized like: if change then program will crash
//const PI = 3.14

//Math in a built in object that has a lot of properties
//Math.round(x); is rounding a number, floor is rounding down ceil is rouding up
//Math.PI Math.E
//Math.pow(x,y) x^y
//Math.sqrt(x)
//Math.log(x)

//random number generator
//Math.random(); generating a number from 0 to 1;
// to generate from 1 to 100 => Math.floor(Math.random()*100)+1

//if(){}else{}


//Ternary operator
// let age3 = 17;
// let message = age3 >= 18 ? "You are adult":"You are young"
// console.log(message);

// switch(age){
//     case 1:
//         break;
//     case 2:
//         break;
//     default:
//         break;
// }

//String methods:
// let username = "tnguy216";
// console.log(username.charAt(2)); // g
// .indexOf() .length 
// .trim() to trim any white space
// .startsWith() .endsWith() //return a boolean
// .slice(start,end)

//logical operation:
// && || !
// == equality === strict equality compare both datatype and values

//while(){} for(let i = 1; i<= 10; i+=2){}

//function hellobabe(usr,age){} //this has no return
//function add(x,y){ return result;}

//array 
let num = [1,2,3,4,5];
//spread operator ... (unpacking something)
let min = Math.max(...num);
console.log(min);
// we can use join() to join an array into a string
//rest parameter => join everything into an array (only use for function)
//function can accept any number of argument
function open (...foods){
    return foods;
}
console.log(open("dog","cat","fish"));


//callback is a function passed as an argument of another function
hello(goodbye);
function goodbye(){
    console.log("Goodbye");
}
function hello(f1){
    console.log("Hello");    
    f1();
}

//map() accept a function and apply that function into the array
//return a new array

//.filter() accept a call back function and return the true element

//arrow function //a weird way to define a function
const hello1 = (name) => {
    console.log(`Hello ${name}`);
};
hello1("Tuan");

//object is a collection of related properties object = {key:value,function()}
let person = {
    first:"Bob",
    isEm: true,
    hello: function(){console.log("Nigga!")},
}
person.hello();

//constructor
function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const car1 = new Car("honda","mustang",2023,"red");
console.log(car1.year);

//class
class Product{
    constructor(name,price){
        this.price = price;
        this.name = name;
    }
    displayProduct(){
        console.log(this.name+" "+this.price);
    }
}
const p1 = new Product("cock", 20.99);
p1.displayProduct();

//static = keyword that defines properties or method belog to a class rather than
//the object created from that class
//you don't need an object to use the properties or method of that class
class Math1{
    static PI = 3.14;
    static getDia(radius){
        return radius*2;
    }
}
console.log(Math1.PI);
console.log(Math1.getDia(2));

//inheritance = allows a new class to inherit properties and methods of existing 
//class Rabbit extends Animal

//super = keyword is used in classes to call the constructor or access of 
//properties and methods of a parent(superclass)
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
        
    }
    moveBy(speed){
        console.log("it moved at "+ speed);
    }
}
class Rabbit extends Animal{
    constructor(name, age, speed){
        super(name,age); // invoke the constructor of the superclass
        this.speed = speed;
    }
    run(){
        console.log("This rabbit can run");
        super.moveBy(this.speed);
    }
}
const rab = new Rabbit("Bob", 20,20);
rab.run();
//also have getter and setter

//we can use sort(callbackFunction) to sort
//callbackFunction is a boolean function to compare

//shuffling stuffs
//Fisher-Yates:
const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];

shuffle(cards);

console.log(...cards);

function shuffle(cards){
    for(let i = cards.length-1 ; i>0; i--){
        const random = Math.floor(Math.random()*(i+1));
        [cards[i],cards[random]] = [cards[random],cards[i]];
    }
}

//date
const date = new Date();
console.log(date);
//or we can do Data(year,month,day,hour,minute,second,ms)

//setTimeOut() allow you to schedule an execution of a callback function
//setTimeout(callback,delay)


//asynchronous

//error
console.log("Hello");
try{
    console.log("Hello");
}
catch(error){
    console.error(error);
}
finally{
    //do any cleanup
    console.log("This always execute");
}
console.log("end");


const myHeading = document.getElementById("h1");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");
//fruits is an HTML collection (array)
console.log(fruits);
fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "yellow";

//type cast it into an array
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red"
});

const h4Ele = document.getElementsByTagName("h4");
console.log(h4Ele);
for(let h4 of h4Ele){
    h4.style.backgroundColor = "yellow";
}

const liElements = document.getElementsByTagName("li");
for(let liEle of liElements){
    liEle.style.backgroundColor = "green";
}

//query selector only return first element or null
const element = document.querySelector(".fruits");
element.style.backgroundColor = "brown";
//query selector all return a nodelist (array and static) querySelectorAll()

//DOM navigation
//.firstElementChild    .nextElementSibling
//.lastElementChild     .previousElementSibling
//.parentElement   .children

