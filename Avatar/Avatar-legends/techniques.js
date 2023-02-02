import Universal from './techniques.json'

const techinqueToggler = document.querySelector(".togglerTech");

let test = Universal;

var techinqueTitle = "";
var approach = "";
var desc = "";
techinqueToggler.addEventListener("click", displayTech);

function displayTech() {
    var tilteCard = '<div class="containter-fluid">' +
    '<h2>Title</h2>' +
    '<p>Approach</p>';

  document.getElementById("techList").innerHTML = tilteCard;
}




