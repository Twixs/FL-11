const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
const $delete = $("button.item-remove");
const $item = $(".item-text");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

function addDelClass() {
  $(".item button").addClass("item-remove");
  $(".item-remove").bind( "click", function () {
    $(this).parent().remove()
  });
}

function bindCompliteTask(){
  $(".item span").bind( "click", function () {
    $(this).css({"font-style":"italic","text-decoration":"line-through"});
  });
}

$add.on('click', function(e){
  const temp = $input.val();
  if(temp === ''){
    return
  }
  const newChild = `<li class="item"><span class="item-text">${temp}</span><button>Remove</button></li>`;
  $list.append(newChild);
  addDelClass();
  bindCompliteTask();
  e.preventDefault();
});

$delete.click(function(){
  $(this).parent().remove();
})

$item.on('click', function(){
  $(this).css({"font-style":"italic","text-decoration":"line-through"})
})