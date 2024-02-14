function rolling(){
    const numDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("result");
    const diceImages = document.getElementById("images");
    let values, images;
    values = [];
    images = [];

    let value;
    for(let i = 0; i<numDice;i++)
    {
        value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src = "dice/num${value}.png">`);
    }
    //console.log(...values);
    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(``);
}