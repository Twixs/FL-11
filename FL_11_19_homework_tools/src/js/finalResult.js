import { resContainer } from "./index";

function showFinal(userScore, botScore) {
  if (userScore > botScore) {
    const element = document.createElement("h3");
    element.innerText = `Congratulations! You've WON this game! Follow Reset to play one more game.`;
    resContainer.appendChild(element);
  } else {
    const element = document.createElement("h3");
    element.innerText = `Unfortunately, you've LOST this game. Follow Reset to try again!`;
    resContainer.appendChild(element);
  }
}

export { showFinal };
