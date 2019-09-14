import { botRandomChoose } from "./botRandomChoose";
import { userChoose } from "./userChoose";
import { displayResult } from "./results";
import { showFinal } from "./finalResult";
import { disableButtons } from "./disableButtons";
import { resContainer } from "./index";
import { enableButtons } from "./enableButtons";

let contRound = 1;
let userScore = 0;
let botScore = 0;

const render = function(id) {
  let bot = botRandomChoose();
  let user = userChoose(id);
  let userWins;
  const maxWins = 3;
  userWins = displayResult(contRound, bot, user);
  contRound++;
  if (userWins === "skip") {
    userScore = userScore;
  } else {
    if (userWins) {
      userScore++;
      if (userScore === maxWins || botScore === maxWins) {
        showFinal(userScore, botScore);
        disableButtons();
        resetConfig();
      }
    } else {
      botScore++;
      if (userScore === maxWins || botScore === maxWins) {
        showFinal(userScore, botScore);
        disableButtons();
        resetConfig();
      }
    }
  }

  function resetConfig() {
    const reset = document.createElement("div");
    const resetLink = document.createElement("a");
    reset.id = "reset";
    resetLink.href = "#";
    resetLink.innerHTML = "Reset";
    resContainer.appendChild(reset);
    reset.appendChild(resetLink);

    const link = document.getElementById("reset");
    link.onclick = () => {
      const elem = document.getElementById("gameResults");
      contRound = 1;
      userScore = 0;
      botScore = 0;
      enableButtons();
      while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
      }
    };
  }
};

export { render };
