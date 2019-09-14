const disableButtons = function() {
  let btns = document.querySelectorAll("button");
  btns.forEach(item => {
    item.setAttribute("disabled", "disabled");
  });
};

export { disableButtons };
