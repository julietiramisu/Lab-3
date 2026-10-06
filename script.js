let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

function showSequenceOne() {
  image1.src = "images/matcha1.jpg";
  image2.src = "images/matcha2.jpg";
  image3.src = "images/hojicha1.jpg";
}

function showSequenceTwo() {
  image1.src = "images/hojicha1.jpg";
  image2.src = "images/matcha1.jpg";
  image3.src = "images/matcha2.jpg";
}

let btn1 = document.getElementById("sequence-one");
btn1.addEventListener("click", showSequenceOne);

let btn2 = document.getElementById("sequence-two");
btn2.addEventListener("click", showSequenceTwo);