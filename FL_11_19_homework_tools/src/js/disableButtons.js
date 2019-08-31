function disableButtons() {
  let btns = document.querySelectorAll("button");
  btns.forEach(function(item) {
    item.setAttribute("disabled", "disabled");
  });
}

export { disableButtons };
