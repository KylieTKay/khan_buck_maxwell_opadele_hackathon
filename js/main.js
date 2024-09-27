(function(){
	"use strict";
	
	console.log("fired");

	let button = document.querySelector("#hamburger");
	let burgerCon = document.querySelector("#burger-con");
	let logoMobile = document.querySelector("#logoMobile");
	let logoDesk = document.querySelector("#logoCon");
  const player = new Plyr('video');
  const playButton = document.querySelector('.plyr__control--overlaid');
	const videoWrapper = document.querySelector('.plyr__video-wrapper');
	const videoControls = document.querySelector('.plyr--video .plyr__controls');
 player;
	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
        logoMobile.classList.toggle("hide");
        logoDesk.classList.toggle("hide");		
			};


      /// reel video js - dev.eo
   function revealVideo(){
    videoWrapper.classList.add('smooth');
    videoControls.classList.add('show-controls');
 };

	button.addEventListener("click", hamburgerMenu, false);
  playButton.addEventListener("click", revealVideo);
		
})();

(function () {
  function doTheShuffle() {
    console.log('doTheShuffle')
    // bindings off
    $('.card-selected').off('click', doTheShuffle)
    // bindings on
    $('.card-selected').on('animationend webkitAnimationEnd', halfDoneTheShuffle)
    // actual logic
    $('#finalist').addClass('doTheShuffle')
  }

  function halfDoneTheShuffle() {
    console.log('halfDoneTheShuffle')

    // bindings off
    $('.card-selected').off('animationend webkitAnimationEnd', halfDoneTheShuffle)

    // mark it as unselected to set the correct z-index
    $('.card-selected').removeClass('card-selected').addClass('card-unselected')

    // wait until the next animation ends
    $('.card-unselected').on('animationend webkitAnimationEnd', doneTheShuffle)
  }

  function doneTheShuffle() {
    console.log('doneTheShuffle')

    var unselectedCard, newSelectedCard

    // bindings off
    $('.card-unselected').off('animationend webkitAnimationEnd', doneTheShuffle)

    // shuffle the cards in the DOM
    $('#finalist').removeClass('doTheShuffle')
    unselectedCard = $('.card-unselected').remove().removeClass('card-unselected')
    $('.cardShuffle').prepend(unselectedCard)

    // mark the top card as selected
    newSelectedCard = $('.cardShuffle .card').last()
    newSelectedCard.addClass('card-selected')

    // bindings on
    $('.card-selected').on('click', doTheShuffle)
  }

  // Initial binding
  $('.card-selected').on('click', doTheShuffle)

 
})();
