const title = document.querySelector("#myHeading");
title.innerText = "Dan Hatfield";

let imgArr = [
  "./images/view1.jpg",
  "./images/view2.jpg",
  "./images/view3.jpg",
  "./images/view4.jpg",
  "./images/view5.jpg",
  "./images/view6.jpg",
];

let imageContainer = document.getElementById("myImages");

let imageNumber = 0;
imageContainer.setAttribute("src", imgArr[imageNumber]);

imageContainer.onclick = () => {
  changeImage();
};

function changeImage() {
  imageNumber = (imageNumber + 1) % imgArr.length;
  imageContainer.setAttribute("src", imgArr[imageNumber]);
}

setInterval(changeImage, 4000);

let bg = document.querySelector("body");
let colorButtons = document.querySelectorAll(".colPicker");

for (let i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener("click", chgColor);
}

function chgColor(e) {
  let color = e.target.classList[0];
  if (color == "reset") {
    color = "white";
  }
  bg.style = `background-color: ${color}`;
}
