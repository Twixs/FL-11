function enableButtons() {
  let btns = document.querySelectorAll("button");
  btns.forEach(function(item) {
    item.removeAttribute("disabled");
  });
}

export { enableButtons };
