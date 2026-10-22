let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

let captions = {
  "makeup1.jpg": "You will have a flawless makeup base!",
  "hair1.jpg": "You're gonna have a full blown!",
  "outfit1.jpg": "Your outfit ATE!",
};

function setImage(image, source) {
  image.src = source;
  image.nextElementSibling.textContent = captions[source.split("/").pop()] || "";
}

function showSequenceOne() {
  setImage(image1, "images/makeup1.jpg");
  setImage(image2, "images/hair1.jpg");
  setImage(image3, "images/outfit1.jpg");
}

function showSequenceTwo() {
  setImage(image1, "images/outfit1.jpg");
  setImage(image2, "images/makeup1.jpg");
  setImage(image3, "images/hair1.jpg");
}

let btn1 = document.getElementById("sequence-one");
btn1.addEventListener("click", showSequenceOne);

let btn2 = document.getElementById("sequence-two");
btn2.addEventListener("click", showSequenceTwo);

function changeImage1() {
  let number = Math.floor(Math.random() * 3) + 1;
  setImage(image1, "images/image" + number + ".jpg");
}
//Math.random() returns a random floating point number between 0 (inclusive) and 1 (exclusive).
//Math.floor() rounds a number down to the nearest integer.
//Each function generates a random number between 1 and 3 (inclusive) and changes the source of the image to a new image based on that random number when the image is clicked.

function changeImage2() {
  let number = Math.floor(Math.random() * 3) + 1;
  setImage(image2, "images/image" + number + ".jpg");
}

function changeImage3() {
  let number = Math.floor(Math.random() * 3) + 1;
  setImage(image3, "images/image" + number + ".jpg");
}

image1.addEventListener("click", changeImage1);
image2.addEventListener("click", changeImage2);
image3.addEventListener("click", changeImage3);