 // exo 1 ++//

 function choixUser(){
    let choix = prompt("Combien de ticket vous avez ?")
   
    if(choix > 0 ){
        manege(choix)
    }


    // if(choix === 0 ){
    //    break
    // }else{
    //     manege(choix)
    // }

}
choixUser();
function manege(ticket){
    while(ticket>= 1){
        for(let i = 0; i<=10; i++){
        console.log("C'est le tour numéro " + i)
        }
        ticket = ticket -1
    }
  if(ticket === 0){
    choixUser()
  }
}


let mL = 1 
function work () {
if (mL == 1) {
console.log ("Loupé !")
} 
else {
console.log("Réussi !")
}
}
work ();










console.log("Le manège démarre");
let nombre = 1;
const partie = "C'est le tour ";
while (nombre <=10) {
    //1
    // console.log(partie + nombre);
    // console.log("56" + nombre);
    // console.log(56 + nombre);

    //2
    let message = "C'est le tour " + nombre;
    console.log(message);

    //3
    //console.log("C'est le tour " + nombre);
    nombre++;
}
console.log("Le manège s'arrête");

console.log("Tables");
let i = 1;
let resultats = nombre*i;
for (i=0; i<=10; i++){
    console.log(nombre*i);
}



let message = prompt("2 * 3 ?");

if (message == 6) {
 alert("Bonne réponse!");
}
else {
    alert("Réessayez!")
}
    let a = 1 
    let tables = a;
    for (a=0; a<60; a++) {
        console.log(tables)
    }

    function getelem(tablede6){
   let elem = document.getElementById("doc")}
    if (message = 6){
        console.log("Table de 6");
    }


let ccc = document.querySelector(".doc")

console.log(ccc);

ccc.innerHTML = "<h1>manège</h1>"

let y = 1 ;
for (y = 0; y<=100; y++){

if ((y % 5===0) && (y % 3===0)) {
    console.log ("FIZZBUZZ")
}
else if ((y % 3===0)) {
    console.log ("FIZZ");
}

else if (y % 5===0){
console.log ("BUZZ")
}

else {
 console.log (y);
}
}