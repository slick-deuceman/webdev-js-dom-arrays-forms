const body = document.querySelector("body");

document.getElementById("myHeading").innerHTML = "Dan Hatfield";

const homeButton = document.querySelector("nav ul li");
homeButton.setAttribute("class", "currentPage");

const testButton = document.getElementById("myTestEvent");
// testButton.onclick = () => {
//   console.log("TEST BUTTON CLICKED");
// };
testButton.addEventListener("click", () => {
  console.log("TEST BUTTON CLICKED");
});

// ^^^^ both equally valid

const imgArray = [
  "./images/view1.jpg",
  "./images/view2.jpg",
  "./images/view3.jpg",
  "./images/view4.jpg",
  "./images/view5.jpg",
  "./images/view6.jpg",
];

const imageDisplay = document.getElementById("myImages");

let imageIndex = 0;
imageDisplay.setAttribute("src", imgArray[imageIndex]);

setInterval(changeImage, 4000);
imageDisplay.onclick = () => {
  changeImage();
};

function changeImage() {
  imageIndex = (imageIndex + 1) % imgArray.length;
  imageDisplay.setAttribute("src", imgArray[imageIndex]);
}

let colourButtons = document.querySelectorAll(".colPicker");

for (let i = 0; i < colourButtons.length; i++) {
  colourButtons[i].addEventListener("click", changeColour);
}

function changeColour(e) {
  let colour = e.target.classList[0];

  if (colour == "reset") {
    colour = "white";
  }

  body.style = `background-color: ${colour}`;
}

const url = window.location.href;
const filename = url.split("/").pop();

let navButtons = document.querySelectorAll("nav ul li");
let navLinks = document.querySelectorAll("nav ul li a");
let navFiles = [];
for (let i = 0; i < navLinks.length; i++) {
  navFiles[i] = navLinks[i].href.split("/").pop();
}

function setHighlighted() {
  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].removeAttribute("class");
    if (navFiles[i] == filename) {
      navButtons[i].setAttribute("class", "currentPage");
    }
  }
}
