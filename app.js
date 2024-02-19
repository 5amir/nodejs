const express = require("express");
const morgan = require("morgan");
const app = express();

//ressource static
app.use(express.static("public"));

app.use(morgan("dev"));

app.get("/acceuil", (req, res) => {
  res.status(200).sendFile("./IHM/acceuil.html", { root: __dirname });
});

app.get("/profil", (req, res) => {
  res.status(200).sendFile("./IHM/profil.html", { root: __dirname });
});

app.get("/", (req, res) => {
  res.status(200).redirect("/acceuil");
});

app.use((req, res) => {
  res.status(404).sendFile("./IHM/erreur.html", { root: __dirname });
});

app.listen(3001, () => {
  console.log("En attente des requetes au port 3001");
});
//console.log('erreur lors de la création  du serveur');
