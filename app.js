function numbers() {
  var a = document.getElementById("inumbers").value;
  var b = document.getElementById("h1");

  var formattedNumber = "";
  for (var i = 0; i < a.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedNumber += "  "; // Dodaj spację co 4 cyfry
    }
    formattedNumber += a[i];
  }

  b.innerHTML = formattedNumber;
}

function names() {
  var c = document.getElementById("names").value;
  var d = document.getElementById("h2");

  d.innerHTML = c;
}

function date() {
  var e = document.getElementById("data").value;
  var f = document.getElementById("h3");
  e = e.replace(/-/g, "/");
  f.innerHTML = e;
}

function background() {
  document.getElementById("karta").style.backgroundImage =
    "url(https://wykop.pl/cdn/c3201142/comment_lCCETisKK5crkpfEFg8o8cnUaJGSSdWY.jpg)";
  document.getElementById("karta").style.transition = "0.1s";
  document.getElementById("info").style.backgroundColor = "purple";
  document.getElementById("menu").style.backgroundColor = "rgb(56, 42, 42)";
  document.getElementById("h1").style.color = "white";
  document.getElementById("h2").style.color = "white";
  document.getElementById("h3").style.color = "white";
  document.getElementById("logo").style.color = "white";
}
function background1() {
  document.getElementById("karta").style.backgroundImage =
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo2fPC1FD2Mn1wMIUsmfxayr1-nrKqdH7RQ&usqp=CAU)";
  document.getElementById("karta").style.transition = "0.1s";
  document.getElementById("info").style.backgroundColor = "grey";
  document.getElementById("menu").style.backgroundColor = "lightgrey";
  document.getElementById("h1").style.color = "darkblue";
  document.getElementById("h2").style.color = "darkblue";
  document.getElementById("h3").style.color = "darkblue";
  document.getElementById("logo").style.color = "darkblue";
}
function background2() {
  document.getElementById("karta").style.backgroundImage =
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NVH8P-nREd5-tIuSXleL6UD-TpxcsM8xiQ&usqp=CAU)";
  document.getElementById("karta").style.transition = "0.1s";
  document.getElementById("info").style.backgroundColor = "aqua";
  document.getElementById("menu").style.backgroundColor = " rgb(56, 42, 42)";
  document.getElementById("h1").style.color = "aqua";
  document.getElementById("h2").style.color = "aqua";
  document.getElementById("h3").style.color = "aqua";
  document.getElementById("logo").style.color = "aqua";
}

/* Store the element in el */
let el = document.getElementById("karta");

/* Get the height and width of the element */
const height = el.clientHeight;
const width = el.clientWidth;

/*
 * Add a listener for mousemove event
 * Which will trigger function 'handleMove'
 * On mousemove
 */
el.addEventListener("mousemove", handleMove);

/* Define function a */
function handleMove(e) {
  /*
   * Get position of mouse cursor
   * With respect to the element
   * On mouseover
   */
  /* Store the x position */
  const xVal = e.layerX;
  /* Store the y position */
  const yVal = e.layerY;

  /*
   * Calculate rotation valuee along the Y-axis
   * Here the multiplier 20 is to
   * Control the rotation
   * You can change the value and see the results
   */
  const yRotation = 20 * ((xVal - width / 2) / width);

  /* Calculate the rotation along the X-axis */
  const xRotation = -20 * ((yVal - height / 2) / height);

  /* Generate string for CSS transform property */
  const string =
    "perspective(500px) scale(1.1) rotateX(" +
    xRotation +
    "deg) rotateY(" +
    yRotation +
    "deg)";

  /* Apply the calculated transformation */
  el.style.transform = string;
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener("mouseout", function () {
  el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
});

/* Add listener for mousedown event, to simulate click */
el.addEventListener("mousedown", function () {
  el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
});

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener("mouseup", function () {
  el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
});
