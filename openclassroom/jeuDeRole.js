console.group("Les héros");

class Personnage {
    constructor(nom, sante, force,){
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;
    }

decrire() {
    return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'intelligence` ; 
}

travailler() {
    return `${this.nom} travaille paisiblement sur son PC quand soudain...`;
}

reaction() {
    return `${this.nom} utilise ${this.force - 20} de sa force avec son bouclier anti-connards! Il lui en reste ${this.force -(this.force - 20)} `
}
final() {
    return `...${this.nom} hausse les épaules et retourne sur FIGMA...`;
}

};


let lessandra = new Personnage("Lessandra", 150, 25);
let oussama = new Personnage("Oussama", 350, 55);
let michel = new Personnage("Michel", 120, 80);


console.log(lessandra.decrire());
console.log(oussama.decrire());
console.log(michel.decrire());


console.groupEnd();







