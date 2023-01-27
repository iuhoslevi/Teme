document.getElementById("year").innerHTML = new Date().getFullYear();
let i = 0;
let text = "Welcome to my portfolio";
let speed = 90;

let typeWriter = () => {
  if (i < text.length) {
    document.getElementById("homeH1").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};
window.onload = function () {
  typeWriter();
};
