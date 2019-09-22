const myBody = "body";
$(myBody).css({"padding": "30px" });

const bodyTitle = "#title";
$(bodyTitle).css({"text-align": "center", "margin-top": "0"});

const divAfterHeader = "header + div";
$(divAfterHeader).css({"border" : "4px double green", "padding" : "20px"});

const heading2 = "h2";
$(heading2).css({"color" : "#0c9dc9", "margin-top" : "0"});

const listChildren = ".list > *";
$(listChildren).css({"font-size":"18px"});


$("#list-1 li:hidden").not(".cloned").show();
$("#list-1 li:empty").hide();


$("#list-3 li:even").css("margin-left", "-20px");
$("#list-3 li:first").css("color", "lightgreen");
$("#list-3 li:gt(5)").css("color", "#ccc");

$("ul").parent().show();
$("li").has("em").css("color","red");
$("li:contains('Buratino')").css("font-weight", "bold");

$("p b:only-child()").css("font-size", "34px");
$("p em:last-of-type").css("color", "green");


$("input[name$='age']").css("width","80px");
$("input[name^='my']").css("width","120px");

const checkedBoxes = $("input[type='checkbox']:checked");
console.log(checkedBoxes);

$("img[src*='cat']").show();


$(".mbox").eq(3).css("padding-top","50px");
$("img").first().css({"float":"left", "border": "1px solid red"});