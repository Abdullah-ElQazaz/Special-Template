// Change background
let landingPag = document.querySelector('.landing-page');
let arrayImage = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * arrayImage.length)
  landingPag.style.backgroundImage = 'url("imgs/' + arrayImage[randomNumber] + '")';

}, 10000)

// Add class open to setting box

let settingBox = document.querySelector(".setting-box")

function addOoenClass() {
  if (settingBox.classList.contains("open")) {
    settingBox.classList.remove('open')
  } else {
    settingBox.classList.add('open')
  }
}

settingBox.addEventListener("click", addOoenClass);