
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyD2bcXlpDj46o5BNyFgqjXzLxurECHU8T8",
//     authDomain: "samixtechie.firebaseapp.com",
//     projectId: "samixtechie",
//     storageBucket: "samixtechie.appspot.com",
//     messagingSenderId: "1074232151934",
//     appId: "1:1074232151934:web:56062924201531c25f6d2f",
//     measurementId: "G-CQN1XNBS1K"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);


// script.js


document.getElementById('col').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
});
// Adding event listener to the close button
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '-250px';
});

document.getElementById('col').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.left = '0'; // Simplified this part to only open the sidebar
});
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function nextSlide() {
    // Change the current slide's opacity to 0
    slides[currentSlide].style.opacity = 0;
    // Increment currentSlide index
    currentSlide = (currentSlide + 1) % totalSlides;
    // Change the next slide's opacity to 1
    slides[currentSlide].style.opacity = 1;
}

// Automatically change slide every 2 seconds
setInterval(nextSlide, 2000);

// let currentSlide = 0;
// const slides = document.querySelectorAll('.carousel-slide');
// const totalSlides = slides.length;
// const imagePaths = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

// // Function to load images into carousel slides
// function loadImages() {
//     slides.forEach((slide, index) => {
//         slide.style.backgroundImage = `url(${imagePaths[index]})`;
//     });
// }

// // Function to transition to the next slide
// function nextSlide() {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide + 1) % totalSlides;
//     slides[currentSlide].classList.add('active');
// }

// // Load images and set up the initial state
// loadImages();
// slides[currentSlide].classList.add('active');

// // Automatically change slide every 2 seconds
// setInterval(nextSlide, 2000);


const button = document.getElementById("toggle");
let body = document.getElementById("body");
// let title = document.getElementsById("content");
// var parag = document.getElementsById("mid-info");

button.addEventListener('click', ()=>{
    window.alert("Refresh TO Migrate to Light them");
    button.innerHTML = "clicked";
    document.getElementById("mid-info").style.color = "white";
    body.style.background = "black";
    document.getElementById("content").style.color = "white";
    document.getElementById("quiz-bord").style.background = "black"

});
function change(){
    const newtext = document.getElementById("instruct");
    setTimeout(function(){
        newtext.textContent = " Scroll Down to Begin Quiz"
    }, 4500);
}change();
// Initialize AOS
AOS.init();

