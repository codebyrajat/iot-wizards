let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};
 





const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

<<<<<<< HEAD
sr.reveal('.logo',{delay:120 , origin:'left'});
sr.reveal('.navbar',{delay:120 , origin:'top'});
sr.reveal('.menu-btn',{delay:130 , origin:'right'});
sr.reveal('.home-text span',{delay:120 , origin:'top'});
sr.reveal('.home-text h1',{delay:120 , origin:'left'});
sr.reveal('.home-text p',{delay:120 , origin:'right'});
sr.reveal('.main-btn',{delay:120 , origin:'left'});
sr.reveal('.home-img',{delay:100 , origin:'right'});
sr.reveal('.about-text span',{delay:120 , origin:'left'});
sr.reveal('.about-img',{delay:120 , origin:'left'});
sr.reveal('.about-text h1',{delay:130 , origin:'right'});
sr.reveal('.about-text p',{delay:120 , origin:'right'});
sr.reveal('.why-text span',{delay:120 , origin:'top'});
sr.reveal('.why-text p',{delay:130 , origin:'bottom'});
sr.reveal('.timer',{delay:120 , origin:'top'});
sr.reveal('.container',{delay:120 , origin:'bottom'});


let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
//Format: Date(year, month, day, hour, minute)
//Year is counter from 0 to 11
let endDate = new Date(2024, 3, 5, 9, 59);
//Output value in milliseconds
let endTime = endDate.getTime();
function countdown() {
  let todayDate = new Date();
  //Output value in milliseconds
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  //60sec => 1000 milliseconds
  let oneMin = 60 * 1000;
  //1hr => 60 minutes
  let oneHr = 60 * oneMin;
  //1 day => 24 hours
  let oneDay = 24 * oneHr;
  //Function to format number if it is single digit
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);
  //If end dat is before today date
  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>Countdown had expired!</h1>`;
  }
  //If end date is not before today date
  else {
    //Calculating remaining days, hrs,mins ,secs
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
    //Displaying Valurs
    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}
let i = setInterval(countdown, 1000);
countdown();


// const loginPopup = document.querySelector(".login-popup");
// const close = document.querySelector(".close");


// window.addEventListener("load",function(){

//  showPopup();
//  // setTimeout(function(){
//  //   loginPopup.classList.add("show");
//  // },5000)

// })

// function showPopup(){
//       const timeLimit = 15 // seconds;
//       let i=0;
//       const timer = setInterval(function(){
//        i++;
//        if(i == timeLimit){
//         clearInterval(timer);
//         loginPopup.classList.add("show");
//        } 
//        console.log(i)
//       },1000);
// }


// close.addEventListener("click",function(){
//   loginPopup.classList.remove("show");
// })

=======
sr.reveal('.logo',{delay:180 , origin:'left'});
sr.reveal('.navbar',{delay:200 , origin:'top'});
sr.reveal('.menu-btn',{delay:250 , origin:'right'});
sr.reveal('.home-text span',{delay:300 , origin:'top'});
sr.reveal('.home-text h1',{delay:180 , origin:'left'});
sr.reveal('.home-text p',{delay:190 , origin:'right'});
sr.reveal('.main-btn',{delay:860 , origin:'left'});
sr.reveal('.home-img',{delay:1000 , origin:'right'});
sr.reveal('.about-text span',{delay:200 , origin:'left'});
sr.reveal('.about-img',{delay:300 , origin:'left'});
sr.reveal('.about-text h1',{delay:300 , origin:'right'});
sr.reveal('.about-text p',{delay:300 , origin:'right'});
>>>>>>> b7ae81dc178a6fdbec85023619df22b6828cb8b5
