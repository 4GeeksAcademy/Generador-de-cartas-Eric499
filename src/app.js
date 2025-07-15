import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const icons = ["♦", "♥", "♠", "♣"]


function changeCard() {
    const randomNumber = Math.floor(Math.random() * numbers.length)
    const randomIcons = Math.floor(Math.random() * icons.length)

    document.getElementsByClassName("top")[0].textContent = icons[randomIcons]

    document.getElementsByClassName("mid")[0].textContent = numbers[randomNumber]

    document.getElementsByClassName("bottom")[0].textContent = icons[randomIcons]

    if (icons[randomIcons] === "♦" || icons[randomIcons] === "♥") {
        document.getElementsByClassName("top")[0].style.color = "red";
        document.getElementsByClassName("bottom")[0].style.color = "red";
    } else {
        document.getElementsByClassName("top")[0].style.color = "black";
        document.getElementsByClassName("bottom")[0].style.color = "black";
    }
    console.log(numbers[randomNumber], icons[randomIcons])
}
document.getElementById("newCard").addEventListener("click", changeCard);

function updateCardSize() {
    const width = document.getElementById("cardWidth").value;
    const height = document.getElementById("cardHeight").value;
    const card = document.querySelector(".card");
    card.style.width = width + "rem";
    card.style.height = height + "rem";
}

document.getElementById("cardWidth").addEventListener("input", updateCardSize);
document.getElementById("cardHeight").addEventListener("input", updateCardSize);

setInterval(() => {
    changeCard()
    
}, 5000);
};
