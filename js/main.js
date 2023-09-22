// chick local storage

let mainColors = localStorage.getItem('color-option');

if (mainColors !== null) {
  document.documentElement.style.setProperty('--main-color', mainColors)
  document.querySelectorAll('.color-list li').forEach(ele => {
    ele.classList.remove('active')
    if (ele.dataset.color === mainColors) {
      ele.classList.add('active')
    }
  })
}


// Change background
let landingPag = document.querySelector('.landing-page');
let arrayImage = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * arrayImage.length)
  landingPag.style.backgroundImage = 'url("imgs/' + arrayImage[randomNumber] + '")';

}, 10000)

// Add class open to setting box
let settingBox = document.querySelector(".setting-box")
let icon = document.querySelector(".fa-gear")

// // by me
// function addOoenClass() {
//   if (settingBox.classList.contains("open")) {
//     settingBox.classList.remove('open')
//     icon.classList.remove('fa-spin')
//   } else {
//     settingBox.classList.add('open')
//     icon.classList.add('fa-spin')
//   }

// }
// settingBox.addEventListener("click", addOoenClass);

// by Elzero
icon.onclick = function () {
  this.classList.toggle('fa-spin');
  settingBox.classList.toggle('open')
}

// Switch Colors

let colorList = document.querySelectorAll('.color-list li');

colorList.forEach((el) => {
  el.addEventListener("click", (e) => {
    // set colr on root
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
    // set color on local storage
    localStorage.setItem('color-option', e.target.dataset.color);
    // remove class active from all lis
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove('active')
    })
    // add class active on curent element
    e.target.classList.add('active')
  })
})