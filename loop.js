let cars = ["BMW","audia","Toyota","aMarutia","aTata","Alphine","Kia","aBalenoa","Hyundai","Swift"];
let brand = "";
for(let i=0; i < cars.length; i++){
    first = cars[i].slice(0,1);
    last = cars[i].slice(-1);
    
    if(first ==="a" && last ==="a"){
        document.getElementById("demo").innerHTML += cars[i]+ "<br>";
    }
}
    
    

