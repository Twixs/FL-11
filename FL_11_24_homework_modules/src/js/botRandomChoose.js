const botRandomChoose = function() {
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
};

export { botRandomChoose };
