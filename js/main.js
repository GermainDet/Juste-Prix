// Déclaration des variables
let start = 0;
let end = 100;
let vie = 10;

// Déclaration des constantes
const juste = document.querySelector("#juste");
const message = document.querySelector(".message");
const tentative = document.querySelector("#tentative");
const target = document.getElementById("essaie");
const vies = document.querySelector(".vies");
const fethi = document.querySelector(".fethi");

const valeur = getRandomInt(start, end);

// Indice Fizz Buzz, fethi franchement c'est quoi ça ça sert à rien
if (valeur % 3 == 0 && valeur % 5 == 0) {
  fethi.textContent = "FizzBuzz";
} else if (valeur % 3 == 0) {
  fethi.textContent = "Fizz";
} else if (valeur % 5 == 0) {
  fethi.textContent = "Buzz";
} else {
  fethi.textContent = "";
}

target.onclick = tenta;
chargervie();
console.log(valeur);

//Fonction de génération d'une valeur aléatoire entière entre les bornes (source internet)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//Fonction de génération du visuel de la vie (j'ai galéré)
function chargervie() {
  for (let i = vie; i > 0; i--) {
    let newimage = document.createElement("img");
    newimage.classList.add("coeur");
    newimage.src = "images/coeur.png";
    vies.appendChild(newimage);
  }
}

//Fonction de comparaison des valeurs, avec indicateur et décrémant de la vie (logique ok)
function tenta() {
  if (isNaN(tentative.value) == true) {
    alert(`Si tu remet du texte dans le champ je vais m'énerver`);
  } else if (tentative.value === "") {
    message.innerHTML = "C'est quoi nonante huit ?";
  } else if (vie < -10) {
    message.innerHTML = `Tu forces`;
    setTimeout(function MyFunc() {document.location.reload(true);}, 5000);
  } else if (vie < -5) {
    message.innerHTML = `Qu'est ce que t'as pas compris ? T'as perdu. PER-DU`;
    vie--;
    setTimeout(function MyFunc() {document.location.reload(true);}, 20000);
  } else if (vie >= 1) {
    if (tentative.value < valeur) {
      message.innerHTML = "C'est plus!";
      tentative.value = "";
      document.querySelector(".vies").innerHTML = "";
      vie--;
      chargervie();
    } else if (tentative.value > valeur) {
      message.innerHTML = "C'est moins!";
      tentative.value = "";
      document.querySelector(".vies").innerHTML = "";
      vie--;
      chargervie();
    } else if (tentative.value == valeur) {
      message.innerHTML = "C'est gagné!";
      tentative.value = "";
      document.getElementById("tentative").disabled = true;
      tentative.placeholder = "Bravo";
      setTimeout(function MyFunc() {document.location.reload(true);}, 10000);
    }
  } else {
    message.innerHTML = `C'est Perdu! La réponse était ${valeur} `;
    vie--;
    setTimeout(function MyFunc() {document.location.reload(true);}, 20000);
  }
}
