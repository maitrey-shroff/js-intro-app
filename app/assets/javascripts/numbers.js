var nextNumber = 1;
var lastNumber = 10;

function clickNumber(number, box)
{
  box.style["background-color"] = "black";
  if (number === nextNumber)
  {
    nextNumber++;

    if (number === lastNumber)
    {
      alert("You Win!");
    }
  } 
  else 
  {
    nextNumber = 1;
  }
}