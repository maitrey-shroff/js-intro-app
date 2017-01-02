function dayLight(time)
{
  var page = document.getElementById('daylight');
  var box = document.getElementById('timeOfDay');
  if (time === "morning")
  {
    page.style["background-color"] = "yellow";
    box.innerHTML = "Morning";
  }
  else if (time === "afternoon")
  {
    page.style["background-color"] = "orange";
    box.innerHTML = "afternoon";
  }
  else if (time === "evening")
  {
    page.style["background-color"] = "black";
    box.innerHTML = "evening";
  }
}