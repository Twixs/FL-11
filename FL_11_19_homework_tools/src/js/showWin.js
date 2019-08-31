import { resContainer } from "./index";

function win(contRound, bot, user) {
  const element = document.createElement("p");
  element.innerText = `Round ${contRound}. ${user} vs. ${bot}. You've WON!`;
  resContainer.appendChild(element);
}

export { win };
