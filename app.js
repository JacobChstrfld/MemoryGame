const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

let audio = new Audio('sound.wav');

var d1 = document.getElementById("1");
var d2 = document.getElementById("2");
var d3 = document.getElementById("3");
var d4 = document.getElementById("4");
var d5 = document.getElementById("5");
var d6 = document.getElementById("6");
var d7 = document.getElementById("7");
var d8 = document.getElementById("8");
var d9 = document.getElementById("9");
var d0 = document.getElementById("0");
var retry = document.getElementById("retry");

var ret = 99;
let levelString = "Level: 0";
let n = false;
let playing = false;
var levelReached = 0;


//Display default level on page load
window.onload = function () {

  document.getElementById("levelField").innerHTML = levelString;

  document.getElementById("form").onsubmit = function () {
    event.preventDefault();
    var sequence = document.getElementById("sequence").value.split('');
    console.log(sequence[0]);
    document.getElementById("form").reset();
    game(sequence);

  };

}


async function game(sequence) {
  playing = true;
  levelReached = 0;

  for (var i = 0; i < sequence.length; i++) {
    levelString = "Level: " + (i + 1);
    document.getElementById("levelField").innerHTML = levelString;
    levelReached++;

    await playSeq(sequence, i);
    ret = await input(sequence, i);

    if (ret == 0) {
      await sleep(100);
      window.location.replace("http://127.0.0.1:5500/fail.html");
      playing = false;
      n = false;
      document.getElementById("levelReached").innerHTML = "Level: " + levelReached;
      levelReached = 0;
      break;
    }if(i == sequence.length - 1){
      n = false;
      await sleep(100);
      location.reload();
    }
    
    n = false;
  }
  playing = false;
}

async function playSeq(sequ, i) {
  for (var j = 0; j <= i; j++) {
    document.getElementById(sequ[j]).style.backgroundColor = "lightblue";
    await sleep(200);
    document.getElementById(sequ[j]).style.backgroundColor = null;
    await sleep(200);
  }
  return (1);
}

async function input(seq, end) {
  var dgt = seq[0];
  var cur = 0;
  while (true) {
    while (n === false) await timeout(50);
    if (n != dgt) return (0);
    else if (cur == end) return (1);
    else {
      cur++;
      dgt = seq[cur];
      n = false;
      await sleep(1);
    }
  }

}


d1.addEventListener('click', function (event) {
  audio.play();
  if (playing == true) n = 1;
});
d2.addEventListener('click', function (event) {
  audio.play();
  if (playing == true) n = 2;
});
d3.addEventListener('click', function (event) {
  audio.play();
  if (playing == true) n = 3;
});
d4.addEventListener('click', function (event) {
  audio.play();
  if (playing == true) n = 4;
});
d5.addEventListener('click', function (event) {
  audio.play();
  if (playing == true) n = 5;
});
d6.addEventListener('click', function (event) {
  audio.play();
  if (playing == true) n = 6;
});
d7.addEventListener('click', function (event) {
  audio.play();
  if (playing == true) n = 7;
});
d8.addEventListener('click', function (event) {
  audio.play();
  if (playing == true) n = 8;
});
d9.addEventListener('click', function (event) {
  audio.play();
  if (playing == true) n = 9;
});
d0.addEventListener('click', function (event) {
  audio.play();
  if (playing == true) n = 0;
});

/*retry.addEventListener('click', function (event) {
  window.location.replace("http://127.0.0.1:5500/index.html");
});*/

function retryButton(){
  window.location.replace("http://127.0.0.1:5500/index.html");
}


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);



//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const timeout = async ms => new Promise(res => setTimeout(res, ms));

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
