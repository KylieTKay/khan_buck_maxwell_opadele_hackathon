// Header
(function () {
	"use strict";
	
	console.log("fired");

	let button = document.querySelector("#hamburger");
	let burgerCon = document.querySelector("#burger-con");
	let logoMobile = document.querySelector("#logoMobile");
	let logoDesk = document.querySelector("#logoCon");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
        logoMobile.classList.toggle("hide");
        logoDesk.classList.toggle("hide");		
			};



	button.addEventListener("click", hamburgerMenu, false);
		
})();

// hero backgroung animation  - AMARI 
(function () {
  // Variables
  let numbers = document.querySelector('.numbers'); // Select the numbers container
  let numString = numbers.textContent;              // Get the text content of the numbers container
  let splitNum = numString.split("");               // Split the text into individual characters
  let spanContent = "";                             // Initialize an empty string to store the HTML content
  
  // Function to wrap each number in a <span>
  function wrapNumbers() {
      for (let i = 0; i < splitNum.length; i++) {
          spanContent += "<span>" + splitNum[i] + "</span>";
      }
      numbers.innerHTML = spanContent; // Insert the HTML content back into the numbers container
  }
  
  // Event Listener
  document.addEventListener('DOMContentLoaded', wrapNumbers); // Run the function when the DOM is fully loaded
  
  
  
  
  // first script please oragnise whoever is looking at this for the falling stars background
  
  // Variables
  let intervalDuration = 200;  // Interval for creating new stars
  let starLifetime = 5000;     // How long each star stays on the screen
  
  // Function to create falling stars
  function lines() {
    let sizeW = Math.random() * 12;           // Random size for each star
    let duration = Math.random() * 3;         // Random animation duration for each star
    let e = document.createElement('div');    // Create a new div for the star
    e.setAttribute('class', 'circle');        // Assign the 'circle' class to the div

    // Find the container with the class 'star-container'
    let container = document.querySelector('.star-container');
    
    container.appendChild(e);                 // Add the star to the star-container
  
    // Set the styles for the star (width, height, position, and animation duration)
    e.style.width = 2 + sizeW + 'px'; 
    e.style.height = 2 + sizeW + 'px'; 
    e.style.left = Math.random() * innerWidth + 'px'; 
    e.style.animationDuration = 2 + duration + 's';
  
    // Remove the star after it completes its animation (after 5 seconds)
    setTimeout(function () {
        container.removeChild(e);  // Remove the star from the star-container
    }, starLifetime);
  }
  
  // Event Listener
  setInterval(lines, intervalDuration); // Continuously create stars every 200ms
  
  })();


// video player
(function () {
  // variables
  const player = new Plyr('video');
  const playButton = document.querySelector('.plyr__control--overlaid');
	const videoWrapper = document.querySelector('.plyr__video-wrapper');
	const videoControls = document.querySelector('.plyr--video .plyr__controls');
  const pauseAction = document.querySelector('.plyr__controls__item ')
  // functions
  /// reel video js - dev.eo
   player;

   function revealVideo(){
    videoWrapper.classList.add('smooth');
    videoControls.classList.add('show-controls');
    console.log("play icon enabled");
 };
 function undoSmooth(){
  videoWrapper.classList.toggle('smooth');
  videoControls.classList.toggle('show-controls');
  console.log("pause icon enabled");
};

  // event listeners
    playButton.addEventListener("click", revealVideo);
    pauseAction.addEventListener("click", undoSmooth);

})();

// student gallery array
(function () {
  // variables

  // functions

  // event listeners
})();

// dev.eo
// card flip
// card shuffle
(function () {
  // variables
  const finalOne = document.querySelector('.finalist1');
  const finalTwo = document.querySelector('.finalist2');
  const finalThree = document.querySelector('.finalist3');

  // Functions
function swap1(){
  finalOne.classList.add('flip1');
  finalTwo.classList.remove('flip2');
  finalThree.classList.remove('flip3');
  console.log("finalist One Called");
}

function swap2(){
  finalOne.classList.remove('flip1');
  finalTwo.classList.add('flip2');
  finalThree.classList.remove('flip3');
  console.log("finalist two Called");
}

function swap3(){
  finalOne.classList.remove('flip1');
  finalTwo.classList.remove('flip2');
  finalThree.classList.add('flip3');
  console.log("finalist Three Called");
}

  // Events
  finalOne.addEventListener("click", swap1);
  finalTwo.addEventListener('click', swap2);
  finalThree.addEventListener('click', swap3);

})();


// testimonial array
(function () {
  // variables

  // functions

  // event listeners
})();


