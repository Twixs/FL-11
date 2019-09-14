import { render } from "./render";

const container = document.createElement("div");
const title = document.createElement("h1");
title.innerText = "Rock, Paper, Scissors";
document.body.appendChild(container);
container.appendChild(title);

const imgContainer = document.createElement("div");
const img = document.createElement("img");
imgContainer.id = "image-container";
img.src = "img/game.gif";
container.appendChild(imgContainer);

const rulesList = document.createElement("ol");
const listElem1 = document.createElement("li");
const listElem2 = document.createElement("li");
const listElem3 = document.createElement("li");
const listElem4 = document.createElement("li");
rulesList.innerHTML = "<h3>Rules:</h3>";
listElem1.innerText = "Scissors beats a paper";
listElem2.innerText = "Paper beats rock";
listElem3.innerText = "Rock beats scissors";
listElem4.innerText = "And we play up to three wins!";
imgContainer.appendChild(rulesList);
rulesList.appendChild(listElem1);
rulesList.appendChild(listElem2);
rulesList.appendChild(listElem3);
rulesList.appendChild(listElem4);

imgContainer.appendChild(img);

const play = document.createElement("h1");
play.innerText = "Let's play!";
container.appendChild(play);

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
const btnsContainer = document.createElement("div");
btnRock.id = "rock";
btnPaper.id = "paper";
btnScissors.id = "scissors";
btnsContainer.id = "game-buttons";
btnRock.innerHTML = "Rock";
btnPaper.innerHTML = "Paper";
btnScissors.innerHTML = "Scissors";
container.appendChild(btnsContainer);
btnsContainer.appendChild(btnRock);
btnsContainer.appendChild(btnPaper);
btnsContainer.appendChild(btnScissors);

const resContainer = document.createElement("div");
resContainer.id = "gameResults";
container.appendChild(resContainer);

const listeners = document.querySelectorAll("button");
listeners.forEach(item => {
  item.addEventListener("click", function() {
    render(item.id);
  });
});

export { resContainer };
