(function(){
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