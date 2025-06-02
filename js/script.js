// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 95,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 80,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 85,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 35,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

// Premiere Pro progress circular bar 
let premiereProgress = document.querySelector(".premiere-pro"),
  premiereValue = document.querySelector(".premiere-pro-progress");

let premiereStartValue = 0,
  premiereEndValue = 85,
  premierespeed = 30;

let progressPremiere = setInterval(() => {
  premiereStartValue++;

  premiereValue.textContent = `${premiereStartValue}%`;
  premiereProgress.style.background = `conic-gradient(#fca61f ${premiereStartValue * 3.6}deg, #ededed 0deg)`;

  if (premiereStartValue == premiereEndValue) {
    clearInterval(progressPremiere);
  }
}, premierespeed);

// After Effects progress circular bar 
let afterEffectsProgress = document.querySelector(".after-effects"),
  afterEffectsValue = document.querySelector(".after-effects-progress");

let afterEffectsStartValue = 0,
  afterEffectsEndValue = 80,
  aespeed = 30;

let progressAE = setInterval(() => {
  afterEffectsStartValue++;

  afterEffectsValue.textContent = `${afterEffectsStartValue}%`;
  afterEffectsProgress.style.background = `conic-gradient(#7d2ae8 ${afterEffectsStartValue * 3.6}deg, #ededed 0deg)`;

  if (afterEffectsStartValue == afterEffectsEndValue) {
    clearInterval(progressAE);
  }
}, aespeed);

// DaVinci Resolve progress circular bar 
let davinciProgress = document.querySelector(".davinci-resolve"),
  davinciValue = document.querySelector(".davinci-resolve-progress");

let davinciStartValue = 0,
  davinciEndValue = 82,
  drspeed = 30;

let progressDavinci = setInterval(() => {
  davinciStartValue++;

  davinciValue.textContent = `${davinciStartValue}%`;
  davinciProgress.style.background = `conic-gradient(#20c997 ${davinciStartValue * 3.6}deg, #ededed 0deg)`;

  if (davinciStartValue == davinciEndValue) {
    clearInterval(progressDavinci);
  }
}, drspeed);

// Photoshop progress circular bar 
let photoshopProgress = document.querySelector(".photoshop"),
  photoshopValue = document.querySelector(".photoshop-progress");

let photoshopStartValue = 0,
  photoshopEndValue = 87,
  psspeed = 30;

let progressPhotoshop = setInterval(() => {
  photoshopStartValue++;

  photoshopValue.textContent = `${photoshopStartValue}%`;
  photoshopProgress.style.background = `conic-gradient(#3f396d ${photoshopStartValue * 3.6}deg, #ededed 0deg)`;

  if (photoshopStartValue == photoshopEndValue) {
    clearInterval(progressPhotoshop);
  }
}, psspeed);

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Handle CV download for better mobile compatibility
document.addEventListener('DOMContentLoaded', function() {
  const downloadLink = document.querySelector('.c-btn.h-btn');
  if (downloadLink) {
    ['touchstart', 'click'].forEach(function(evt) {
      downloadLink.addEventListener(evt, function(e) {
        e.preventDefault();
        const pdfUrl = this.getAttribute('href');
        setTimeout(function() {
          window.location.href = pdfUrl;
        }, 100);
      }, false);
    });
  }
});
