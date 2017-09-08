var str = ""
$('.buttons :not(#equals)').click(function (ev){
  let button = ev.target;
  console.log(ev.target.innerText)
  if (ev.target.innerText === "x") {
    str += "*"
  } else if (ev.target.innerText === "÷") {
    str += "/"
  } else {
    str += button.innerHTML
  }
  $('#screen').append(button.innerHTML);
  if (ev.target.innerText === "C") {
    $('#screen').empty();
    str = "";
  }
})

$('#equals').click(function(ev) {
  console.log(str)
  $('#screen').text(eval(str))
})
