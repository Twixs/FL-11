import { resContainer } from "./index";

function lost(contRound, bot, user) {
  const element = document.createElement("p");
  element.innerText = `Round ${contRound}. ${user} vs. ${bot}. You've LOST!`;
  resContainer.appendChild(element);
}

export { lost };
