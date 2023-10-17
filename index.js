const ciseau = document.getElementById("ciseau");
const pierre = document.getElementById("pierre");
const feuille = document.getElementById("feuille");
const array = ["Ciseau", "Pierre", "Feuille"];
const choixComputer = document.getElementById("choix-computer");
const monChoix = document.getElementById("votre-choix");
const scoreJoueur = document.querySelector(".score-joueur");
const scoreIa = document.querySelector(".score-ia");
let displayChoixJ = document.querySelector(".img-choix-j");
let displayChoixIa = document.querySelector(".img-choix-i");
let scoreJ = 0;
let scoreI = 0;

function runGame(e) {
  const computerChoise = array[Math.floor(Math.random() * array.length)];

  // Affiche le choix des deux joueurs en img (IA, Joueur)
  //choixComputer.innerHTML = computerChoise;
  //monChoix.innerHTML = e.target.id;

  if (e.target.id == "ciseau") {
    displayChoixJ.src = "images/ciseau.png";
  } else if (e.target.id == "pierre") {
    displayChoixJ.src = "images/rock.png";
  } else if (e.target.id == "feuille") {
    displayChoixJ.src = "images/feuille.png";
  }

  if (computerChoise == "Ciseau") {
    displayChoixIa.src = "images/ciseau.png";
  } else if (computerChoise == "Pierre") {
    displayChoixIa.src = "images/rock.png";
  } else if (computerChoise == "Feuille") {
    displayChoixIa.src = "images/feuille.png";
  }

  // Affiche le resultat
  console.log(e.target.id);
  console.log(computerChoise);

  // Si vous choissisez pierre
  if (e.target.id == "pierre" && computerChoise == "Ciseau") {
    scoreJ++;
    scoreJoueur.innerHTML = "Point" + "<br>" + scoreJ;
    scoreIa.innerHTML = "Point" + "<br>" + scoreI;
  } else if (e.target.id == "pierre" && computerChoise == "Pierre") {
    scoreJoueur.innerHTML = "Point" + "<br>" + scoreJ;
    scoreIa.innerHTML = "Point" + "<br>" + scoreI;
  } else if (e.target.id == "pierre" && computerChoise == "Feuille") {
    scoreI++;
    scoreJoueur.innerHTML = "Point" + "<br>" + scoreJ;
    scoreIa.innerHTML = "Point" + "<br>" + scoreI;
  }

  // Si vous choissisez ciseau
  if (e.target.id == "ciseau" && computerChoise == "Ciseau") {
    scoreJoueur.innerHTML = "Point" + "<br>" + scoreJ;
    scoreIa.innerHTML = "Point" + "<br>" + scoreI;
  } else if (e.target.id == "ciseau" && computerChoise == "Pierre") {
    scoreI++;
    scoreJoueur.innerHTML = "Point" + "<br>" + scoreJ;
    scoreIa.innerHTML = "Point" + "<br>" + scoreI;
  } else if (e.target.id == "ciseau" && computerChoise == "Feuille") {
    scoreJ++;
    scoreJoueur.innerHTML = "Point" + "<br>" + scoreJ;
    scoreIa.innerHTML = "Point" + "<br>" + scoreI;
  }

  // Si vous choissisez Feuille
  if (e.target.id == "feuille" && computerChoise == "Ciseau") {
    scoreI++;
    scoreJoueur.innerHTML = "Point" + "<br>" + scoreJ;
    scoreIa.innerHTML = "Point" + "<br>" + scoreI;
  } else if (e.target.id == "feuille" && computerChoise == "Pierre") {
    scoreJ++;
    scoreJoueur.innerHTML = "Point" + "<br>" + scoreJ;
    scoreIa.innerHTML = "Point" + "<br>" + scoreI;
  } else if (e.target.id == "feuille" && computerChoise == "Feuille") {
    scoreJoueur.innerHTML = "Point" + "<br>" + scoreJ;
    scoreIa.innerHTML = "Point" + "<br>" + scoreI;
  }

  console.log(scoreI);
  console.log(scoreJ);

  if (scoreI == 3) {
    alert("Vous avez perdu");
    scoreI = 0;
    scoreJ = 0;
    scoreJoueur.innerHTML = "Point" + "<br>" + scoreJ;
    scoreIa.innerHTML = "Point" + "<br>" + scoreI;
    displayChoixIa.src = "";
    displayChoixJ.src = "";
  } else if (scoreJ == 3) {
    alert("Vous avez gagner");
    scoreI = 0;
    scoreJ = 0;
    scoreJoueur.innerHTML = "Point" + "<br>" + scoreJ;
    scoreIa.innerHTML = "Point" + "<br>" + scoreI;
    displayChoixIa.src = "";
    displayChoixJ.src = "";
  }
}

ciseau.addEventListener("click", (e) => runGame(e));
pierre.addEventListener("click", (e) => runGame(e));
feuille.addEventListener("click", (e) => runGame(e));
