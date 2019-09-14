const enableButtons = function() {
  let btns = document.querySelectorAll("button");
  btns.forEach(item => {
    item.removeAttribute("disabled");
  });
};

export { enableButtons };
