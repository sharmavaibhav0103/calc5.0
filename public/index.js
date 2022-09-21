var screen = "";

//autoscroll
const mainDisplay = document.getElementById("res");
const mainDisplayWidth = mainDisplay.scrollWidth;

// const displayOp = document.getElementById('op');
// const displayOpWidth = mainDisplay.scrollWidth;

//audio warning
var audio = document.getElementById('myAudio');

//keyboard events
window.onkeyup = (e) => {
  if (e.key == 0 || e.key == 1)
    key(e.key);
  else audio.play();
};

function operatorFunx() {
  if (screen.indexOf("+") != -1) {
    var numbers = screen.split("+");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var sum = x + y;
    var ans = sum.toString(2);
  } else if (screen.indexOf("-") != -1) {
    var numbers = screen.split("-");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var sub = x - y;
    var ans = sub.toString(2);
  } else if (screen.indexOf("*") != -1) {
    var numbers = screen.split("*");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var mul = x * y;
    var ans = mul.toString(2);
  } else if (screen.indexOf("/") != -1) {
    var numbers = screen.split("/");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var div = x / y;
    var ans = div.toString(2);
  } else if (screen.indexOf("/") != -1) {
    var numbers = screen.split("/");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var rem = x / y;
    var ans = rem.toString(2);
  }
  screen = ans;
  document.getElementById("res").innerHTML = screen;
  document.getElementById("op").innerHTML = screen;
}

function key(c) {
  screen += c;
  document.getElementById("res").innerHTML = screen;
  document.getElementById("op").innerHTML = screen;

  // console.log(screen);

  //autoscroll
  autoscroll();
}

function cl() {
  screen = "0";
  document.getElementById("res").innerHTML = screen;
  document.getElementById("op").innerHTML = screen;
}

function ce() {
  if (screen.length > 0) {
    screen = screen.substring(0, screen.length - 1);

    if (screen == "") screen = "0";
    document.getElementById("res").innerHTML = screen;
    document.getElementById("op").innerHTML = screen;
  }
}

//autoscroll
function autoscroll() {
  if (mainDisplay.scrollLeft !== mainDisplayWidth) {
    mainDisplay.scrollTo(mainDisplay.scrollLeft + 20, 0);
  }
}

//autoscroll for operations display
// function autoscroll(){
//     if (displayOp.scrollLeft !== displayOpWidth) {
//       displayOp.scrollTo(displayOp.scrollLeft + 20, 0);
//     }
// };

//conversions
function bin2dec() {
  document.getElementById("res").innerHTML = parseInt(screen, 2).toString(10);
  document.getElementById("op").innerHTML = parseInt(screen, 2).toString(10);
}
function bin2hex() {
  document.getElementById("res").innerHTML = parseInt(screen, 2).toString(16);
  document.getElementById("op").innerHTML = parseInt(screen, 2).toString(16);
}
function bin2oct() {
  document.getElementById("res").innerHTML = parseInt(screen, 2).toString(8);
  document.getElementById("op").innerHTML = parseInt(screen, 2).toString(8);
}
