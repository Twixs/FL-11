import { resContainer } from "./index";

const lost = function(contRound, bot, user) {
  const element = document.createElement("p");
  element.innerText = `Round ${contRound}. ${user} vs. ${bot}. You've LOST!`;
  resContainer.appendChild(element);
};
export { lost };
