//     function reqListener () {
//         console.log(this.responseText);
//         }
  
//         let oReq = new XMLHttpRequest();
//         oReq.onload = reqListener;
//         oReq.open("get", "exoAjax.json", true);
//         oReq.send();

//         let s = document.getElementById("sec");

//     function article(e) {
//       let p = document.createElement('p');
//       p.innerText = oReq["nom"];

//       s.appendChild(p);
//   }
       

    // let xxhr = new XMLHttpRequest()

    //     xxhr.addEventListener('load', ()=>{
    //         let response = JSON.parse(xxhr.response)
    //     })
    //     xxhr.open("GET", 'datas/data.php')        
    //     xxhr.send()
    
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', '/exoAjax.json');
    xhr.responseType = 'json';

        xhr.addEventListener('load', function() {
            let reponseJson = this.response;
            // console.log(reponseJson);
            reponseJson.forEach(element => {
                let myArticle = new Article(element.nom, element.type, element.pays, element.classement);
                console.log(myArticle);
                
                // article.afficher();
            });
        });

        xhr.send();


        
        // let requeteXhr = new XMLHttpRequest();

        //     requeteXhr.onreadystatechange = function (){
        //         console.log(this.responseText)
        //         if (requeteXhr.readyState === 4){
        //             let response = JSON.parse(this.response)
        //             console.log(response)
        //             let m = new Article(response)
                    
        //             for(let i = 0; i < response.length; i++){

        //                             m.donneesjson(i)

        //                         console.log(m.newArticle)
        //                         section.appendChild(m.newArticle)
        //                     }

        //     // let newArticle = document.createElement('article')
        //     // newArticle.textContent = response.newArticle 
        //     }

        // }   

        
        // requeteXhr.open('GET', "exoAjax.json", true);
        // requeteXhr.send()


// //   article();



//         // class Requete{
//         //     constructor(data){
//         //         this.datas = data
//         //     }

//         //     ajax(){
//         //         this.xhr = new XMLHttpRequest()

//         //         this.xhr.onreadystatechange = () => {
//         //             if(this.xhr.status === 4){
//         //                 this.donnee = this.xhr.response
//         //                 getData(this.donee)
//         //             }
//         //         }
                
//         //         this.xhr.open("GET", this.datas, true)
//         //         this.xhr.send()
//         //     }

//         //     getData(data){
//         //         for(data.length){
//         //             retu rn data 

//         //         }
//         //     }
//         // }

        // let maReq = new Requete("data.json")
        // maReq.getData()
        // let maReq2 = new Requete("doto.json")
