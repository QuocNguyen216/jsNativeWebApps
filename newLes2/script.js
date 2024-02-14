//JSON 
const names = ["bob","tim","brad","jim"];

const person = {
    "name":"bob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["fuck","sleep","walk"]
}

const people = [{   
    "name":"bob",
    "age": 30,
    "isEmployed": true
},
{
    "name":"tim",
    "age": 24,
    "isEmployed": false
},
{
    "name":"brad",
    "age": 20,
    "isEmployed": true
},
{
    "name":"jim",
    "age": 17,
    "isEmployed": false
}]

//stringify() converts a JS object to a JSON string
const jsonString = JSON.stringify(names);
console.log(jsonString);

const jsonString1 = JSON.stringify(person);
console.log(jsonString1);

const jsonString2 = JSON.stringify(people);
console.log(jsonString2);

//parse() 
const JSONnames = `["bob","tim","brad","jim"]`;

const JSONperson = `{"name":"bob","age": 30,"isEmployed": true,"hobbies": ["fuck","sleep","walk"]}`;

const JSONpeople = `[{"name":"bob","age": 30,"isEmployed": true},
                    {"name":"tim","age": 24,"isEmployed": false},
                    {"name":"brad","age": 20,"isEmployed": true},
                    {"name":"jim","age": 17,"isEmployed": false}]`;

const parseData = JSON.parse(JSONpeople);
console.log(parseData);

fetch("people.json")
    .then(response => response.json())
    .then(value => value.forEach(val => console.log(val.isEmployed)));