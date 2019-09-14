const userChoose = function(id) {
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
};

export { userChoose };
