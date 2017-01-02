var boxes = [];

function three(box)
{
  if (boxes.indexOf(box) === -1)
  {
    boxes.push(box);
  }
  if (boxes.length == 3)
  {
    alert("You win!");
  }
}