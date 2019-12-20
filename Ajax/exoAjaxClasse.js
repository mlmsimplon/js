class Article {
    constructor(nom, type, pays, classement) {
        this.nom = nom;
        this.type = type;
        this.pays = pays;
        this.classement = classement;
        this.afficher()
        // this.etoile()

    }
    afficher(){
        let section = document.getElementById("sec");
        let article = document.createElement("article");
        let div = document.createElement("div");
        this.para = document.createElement('p');
        this.etoile()
       
        article.innerText = this.nom;
        article.style.fontWeight = "bold";
        div.innerText = "Type" + ": " + this.type + " " + "/" + "Pays" + ": " + this.pays;
        
        article.appendChild(this.para);
        this.para.appendChild(div);
        section.appendChild(article);

    }
    etoile() {
        for (let i =0; i< this.classement ; i++) {
            let stars = document.createElement('img')
            stars.src='et.png';
            stars.style.width = "15px";
            stars.style.height = "15px"
            this.para.appendChild(stars)
            console.log(stars)
            }
        

        }
    }   
    //     for (let i =0; i< this.classement; i++) {
        
    // };
