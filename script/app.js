function DarkAndLightmod(x) {
  var body = document.body;
  var container = document.getElementById("container");
  var nav = document.getElementById("nav");
  var dark = document.getElementsByTagName("dark");
  x.classList.toggle("fa-sun");
  body.classList.toggle("lightMode");
  container.classList.toggle("lightMode");
  nav.classList.toggle("lightMode");
  document.getElementById("audio").play();
}

function load() {
  let message = document.getElementById("LoadingGlow");
  message.style.display = "block";
}

Window.onload = load();

document.addEventListener(
  "click",
  function (event) {
    document.getElementById("audio").play();

    // Ignore clicks that weren't on the toggle button
    if (!event.target.hasAttribute("data-toggle-fullscreen")) return;
  },
  false
);

document.addEventListener(
  "click",
  function (event) {
    document.getElementById("audio").play();

    // Ignore clicks that weren't on the toggle button
    if (!event.target.hasAttribute("data-toggle-fullscreen")) return;

    // If there's an element in fullscreen, exit
    // Otherwise, enter it
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  },
  false
);

function showcode1() {
  document.getElementById("successfulcopy2").className =
    "successfulcopy22 animate__animated animate__slideInDown";
  setTimeout(setAlert, 2000);

  var copyText = document.getElementById("content1").value;
  navigator.clipboard.writeText(copyText);
}

function showcode2() {
  document.getElementById("successfulcopy2").className =
    "successfulcopy22 animate__animated animate__slideInDown";
  setTimeout(setAlert, 2000);

  var copyText = document.getElementById("content1").value;
  navigator.clipboard.writeText(copyText);
}

function showcode3() {
  document.getElementById("successfulcopy2").className =
    "successfulcopy22 animate__animated animate__slideInDown";
  setTimeout(setAlert, 2000);

  var copyText = document.getElementById("content1").value;
  navigator.clipboard.writeText(copyText);
}

function showcode4() {
  document.getElementById("successfulcopy2").className =
    "successfulcopy22 animate__animated animate__slideInDown";
  setTimeout(setAlert, 2000);

  var copyText = document.getElementById("content1").value;
  navigator.clipboard.writeText(copyText);
}

function showcode5() {
  document.getElementById("successfulcopy2").className =
    "successfulcopy22 animate__animated animate__slideInDown";
  setTimeout(setAlert, 2000);

  var copyText = document.getElementById("content1").value;
  navigator.clipboard.writeText(copyText);
}

function showcode6() {
  document.getElementById("successfulcopy2").className =
    "successfulcopy22 animate__animated animate__slideInDown";
  setTimeout(setAlert, 2000);

  var copyText = document.getElementById("content1").value;
  navigator.clipboard.writeText(copyText);
}

function showcode7() {
  document.getElementById("successfulcopy2").className =
    "successfulcopy22 animate__animated animate__slideInDown";
  setTimeout(setAlert, 2000);

  var copyText = document.getElementById("content1").value;
  navigator.clipboard.writeText(copyText);
}

function showcode8() {
  document.getElementById("successfulcopy2").className =
    "successfulcopy22 animate__animated animate__slideInDown";
  setTimeout(setAlert, 2000);

  var copyText = document.getElementById("content1").value;
  navigator.clipboard.writeText(copyText);
}

function showcode9() {
  document.getElementById("successfulcopy2").className =
    "successfulcopy22 animate__animated animate__slideInDown";
  setTimeout(setAlert, 2000);

  var copyText = document.getElementById("content1").value;
  navigator.clipboard.writeText(copyText);
}

function setAlert() {
  document.getElementById("successfulcopy2").className =
    "successfulcopy2 animate__animated animate__slideInDown";
}
