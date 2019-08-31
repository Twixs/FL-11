function botShows() {
  const max = 3;
  let shows = Math.floor(Math.random() * Math.floor(max));
  switch (shows) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    default:
      return "Scissors";
  }
}

function userShows(id) {
  let result;
  if (id === "rock") {
    result = "Rock";
  } else {
    if (id === "paper") {
      result = "Paper";
    } else {
      result = "Scissors";
    }
  }
  return result;
}

export { botShows, userShows };
