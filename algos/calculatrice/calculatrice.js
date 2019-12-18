function verification(entree) {
    let seulement_ceci ="0123456789[]()-+*%/.";
    for (let i = 0; i < entree.length; i++)
     if (seulement_ceci.indexOf(entree.charAt(i))<0 ) return false;
    return true;
   }
   
   function resultat() {
     let x = 0;
    if (verification(window.document.calculatrice.affiche.value))
       x = eval(window.document.calculatrice.affiche.value);
     window.document.calculatrice.affiche.value = x;
   }
  
   function ajouter(caracteres) {
     window.document.calculatrice.affiche.value =
     window.document.calculatrice.affiche.value + caracteres;
   }
  
//  test charAt

// let tableau = [1, 2, 3, 4, 5];

function afficher(entrees) {
  //let i = 3;
  // let phrase = "Ma maison est belle";
  let tableau = [1, 2, 3, 4, 5];
  for (let i = 0; i <= 10; i++) 
 
// console.log(i + '=' + tableau.charAt(4));
console.log(i + '=' + tableau[i]);
}
afficher();

//test IndexOf 
