var count = 0;

function jackhammer(box)
{
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color)
  box.style["background-color"] = color;
  count = count + 1;
  if (count == 5)
  {
    alert("you win!");
  }
}