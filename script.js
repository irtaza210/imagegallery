function show(img) {
  document.getElementById("containerforsmallimage");
  img.src = bigImage.src;
  containerforbigimage.style.display = "block";
}

function close(containerforbigimage) {
  document.getElementById("closebutton");
  containerforbigimage.style.display="none";
}

function move(nextorprevious) {
  currentimage = document.getElementById("containerforbigimage");
  if(nextorprevious == next) {
    if(currentimage = 24) {
      currentimage  =13;
      show(currentimage);
    }
    else {
      currentimage++;
      show(currentimage);
    }
  }
  else if (nextorprevious == previous) {
    if(currentimage = 13) {
      currentimage  =24;
      show(currentimage);
    }
    else {
      currentimage--;
      show(currentimage);
    }
  }
}

document.getElementById("closebutton").onclick = move(containerforbigimage);
document.getElementById("nextorpreviousbutton").onclick = move(nextorprevious);
