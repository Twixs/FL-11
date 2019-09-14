import { resContainer } from "./index";

const win = function(contRound, bot, user) {
  const element = document.createElement("p");
  element.innerText = `Round ${contRound}. ${user} vs. ${bot}. You've WON!`;
  resContainer.appendChild(element);
};

export { win };
