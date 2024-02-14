//fetch default is GET
// fetch("https://dragonball-api.com/api/characters/1")
// .then(response =>{
//     if(!response.ok)
//     {
//         throw new Error("404");
//     }
//     return response.json()
// })
// .then(data => console.log(data.name))
// .catch(error => console.error(error));


async function fetchData(){
    try{
        const id = document.getElementById("dbID").value;

        //console.log(`https://dragonball-api.com/api/characters?page=1&limit=1&name=${id}`);
        const response = await fetch(`https://dragonball-api.com/api/characters?page=1&limit=1&name=${id}`);
        console.log(JSON.stringify(response));
        if(!response.ok){
            throw new Error("Couldnt fetch data");
        }

        //.json turn this into a JScript object
        const data = await response.json();
        const imgEle = document.getElementById("dbSprite");
        console.log(JSON.stringify(data));
        if(JSON.stringify(data) === "[]" ||id ==="" ){
            imgEle.style.display = "none";
            document.getElementById("errors").textContent = "Wrong name";
            throw new Error("Wrong name");
        }
        else{
            const dbSprite = data[0].image;
            imgEle.src = dbSprite;
            imgEle.style.display = "block";
            document.getElementById("errors").textContent = "Success";
        }
    }
    catch(error){
        console.error(error);
    }
}
