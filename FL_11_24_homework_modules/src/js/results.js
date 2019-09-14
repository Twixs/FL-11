import { resContainer } from "./index";
import { win } from "./showWin";
import { lost } from "./showLoss";

const displayResult = function(contRound, bot, user) {
  const rock = "Rock";
  const paper = "Paper";
  const sciss = "Scissors";
  let userWins = false;
  if (user === paper && bot === rock) {
    win(contRound, bot, user);
    userWins = true;
    return userWins;
  } else {
    if (user === rock && bot === paper) {
      lost(contRound, bot, user);
      return userWins;
    } else {
      if (user === sciss && bot === paper) {
        win(contRound, bot, user);
        userWins = true;
        return userWins;
      } else {
        if (user === paper && bot === sciss) {
          lost(contRound, bot, user);
          return userWins;
        } else {
          if (user === rock && bot === sciss) {
            win(contRound, bot, user);
            userWins = true;
            return userWins;
          } else {
            if (user === sciss && bot === rock) {
              lost(contRound, bot, user);
              return userWins;
            } else {
              const element = document.createElement("p");
              element.innerText = `Round ${contRound}. ${user} vs. ${bot}. It's dead heat!`;
              resContainer.appendChild(element);
              return "skip";
            }
          }
        }
      }
    }
  }
};

export { displayResult };
