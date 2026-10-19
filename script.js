let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

function showSequenceOne() {
  image1.src = "images/makeup.jpg";
  image2.src = "images/hair.jpg";
  image3.src = "images/outfit.jpg";
}

function showSequenceTwo() {
  image1.src = "images/outfit.jpg";
  image2.src = "images/makeup.jpg";
  image3.src = "images/hair.jpg";
}

let btn1 = document.getElementById("sequence-one");
btn1.addEventListener("click", showSequenceOne);

let btn2 = document.getElementById("sequence-two");
btn2.addEventListener("click", showSequenceTwo);

function changeImage1() {
  let number = Math.floor(Math.random() * 3) + 1;
  image1.src = "images/image" + number + ".jpg";
}
//Math.random() returns a random floating point number between 0 (inclusive) and 1 (exclusive).
//Math.floor() rounds a number down to the nearest integer.
//Each function generates a random number between 1 and 3 (inclusive) and changes the source of the image to a new image based on that random number when the image is clicked.

function changeImage2() {
  let number = Math.floor(Math.random() * 3) + 1;
  image2.src = "images/image" + number + ".jpg";
}

function changeImage3() {
  let number = Math.floor(Math.random() * 3) + 1;
  image3.src = "images/image" + number + ".jpg";
}

image1.addEventListener("click", changeImage1);
image2.addEventListener("click", changeImage2);
image3.addEventListener("click", changeImage3);