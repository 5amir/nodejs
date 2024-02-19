const http = require('http');
const fs = require('fs');
const uuid = require("uuid");

const serveur = http.createServer((requete,response) =>{
    console.log(uuid.v4());
    
  // definition de l'en-tete
  response.setHeader("Content-type","text/html");


 //definition de la reponse selon la demande du client
let fichier = ""

  if (requete.url === "/acceuil") {
    fichier = "./IHM/acceuil.html";
  }else if (requete.url === "/profil") {
    fichier = "./IHM/profil.html";
  }else {
    fichier = "./IHM/erreur.html";
  }

  //finalisation de la demande a envoyer
  fs.readFile(fichier, (erreur,donnee)=>{
    if (erreur) {
        console.log(erreur);
    }else{
        
        response.end(donnee);
    }
  })
 
})

serveur.listen(3001,"localhost", ()=>{
    console.log("Pret a efectuer les requetes au port 3001");
});