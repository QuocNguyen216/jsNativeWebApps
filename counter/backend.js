const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");
const incBtn = document.getElementById("inc");
const counter = document.getElementById("counter");
let count = 0;

const cb1 = document.getElementById("sub");

const pew = document.getElementById("rd1");
const bob = document.getElementById("rd2");
const pen = document.getElementById("rd3");

const rp1 = document.getElementById("subscribe");
const rp2 = document.getElementById("who");


const submit = document.getElementById("submit");

submit.onclick = function(){
    if(cb1.checked){
        rp1.textContent = `Yes, you are subscribed`;
        if(rd1.checked)
        {
            rp2.textContent = `You sub pewdiepie`;
        }
        else if(rd2.checked)
        {
            rp2.textContent = `You sub bob`;
        }
        else if (rd3.checked)
        {
            rp2.textContent = `You sub penny`;
        }
        else{
            rp2.textContent = `You sub no-one`;
        }
    }
    else{
        rp1.textContent = `No, you are NOT subscribed`;
        rp2.textContent = ``;
    }


}

incBtn.onclick = function(){
    count++;
    counter.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    counter.textContent = count;
}

decBtn.onclick = function(){
    count--;
    counter.textContent = count;
}



