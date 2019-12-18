console.group("Les monstres");

    class Monstres extends Personnage {
        constructor(nom, sante, force) {
        super(nom, sante, force)
        this.pouvoir = "l'attaque de connard";
        this.kawaii = "les objets pour orienter son attaque PHP !!!";
        this.rnr = "l'attaque Rock'n' Roll";
    }   

    attaquer(){
        return `${this.nom} utilise ${this.pouvoir} pour attaquer !`;
    }
    attaquekawaii(){
        return `${this.nom} utilise ${this.kawaii} et perd  ${this.sante - 1} points de vie  :(`;
    }
    attaquernr() {
        return `${this.nom} lance ${this.rnr} en criant PIm PAM POUM et perd ${this.sante} points de vie et en donnant une dernière veille à Samuel avant de mourir très bêtement...`;
    }
    };

   
    