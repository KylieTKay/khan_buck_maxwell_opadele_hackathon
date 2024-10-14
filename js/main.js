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
  // variables

  // functions

  // event listeners
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


