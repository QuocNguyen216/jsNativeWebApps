//Step 1: Create the element
// const newH1 = document.createElement("h1");
//Step 2: Add attributes
// newH1.textContent = "Hello world";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";
//Step 3: Append element to dom
//add at begining
//document.body.prepend(newH1);
//add at the end
// document.getElementById("box1").append(newH1);

//insert in between box1 and box2
// const box3 = document.getElementById("box3");
// document.body.insertBefore(newH1,box3);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[4])
//Remove

//evenListener = Listen for specific events 
//.addEventListener(event,anonymous function);
//event: "click" "mouseover"(hovering) 
//"mouseout" (stop hovering) ""

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
const myBox = document.getElementById("mybox");
const moveAmount = 10;
let x = 0;
let y = 0;

function keydown(event){
    // console.log(event.key);d
    myBox.textContent = "💀Q💀";
    myBox.style.background = "grey";
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -=moveAmount;
                break;
            case "ArrowDown":
                y +=moveAmount;
                break;
            case "ArrowRight":
                x +=moveAmount;
                break;   
            case "ArrowLeft":
                x -=moveAmount;
                break;    
        }
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
};

function keyup(event){
    myBox.textContent = "😍Q😍";
    myBox.style.background = "bisque";
};

const mybut = document.getElementById("mybut");
const myImg = document.getElementById("myimg");
console.log(myImg);
mybut.addEventListener("click", display)

function display(event){
    if(mybut.textContent === "Hide"){
        mybut.textContent ="Show";
        myImg.style.visibility = "hidden";
    }
    else{
        myImg.style.visibility = "visible";
        mybut.textContent ="Hide";
    }
}

//callback hell
function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 Done")
        callback();
    },2000);
    return new Promise((resolve,reject) => {} )
}
function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 Done");
        callback();
},3000);
}

function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 Done");
        callback();
    },1000);
}

function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 Done");
        callback();
},1500);
}

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("Done");
//             })
//         })
//     })
// });

// promise
function tasks1(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Task 1 Done");
            // you can reject and it won't be do the next task
            // reject("Task 1 Done");
        },2000);
    });
}
function tasks2(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Task 2 Done")
        },2000);
    });
}

function tasks3(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Task 3 Done")
        },2000);
    });
}

function tasks4(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Task 4 Done")
        },2000);
    });
}

// tasks1().then(value => {console.log(value); return tasks2()})
// .then(value => {console.log(value); return tasks3()})
// .then(value => {console.log(value); return tasks4()})
// .then(value => {console.log(value); console.log("Done");});


//async and await
//await must be used in an async function

async function doChores(){
    const task1Res = await tasks1();
    console.log(task1Res);

    const task2Res = await tasks2();
    console.log(task2Res);
    
    const task3Res = await tasks3();
    console.log(task3Res);

    const task4Res = await tasks4();
    console.log(task4Res);

    console.log("Done");
}
doChores();
