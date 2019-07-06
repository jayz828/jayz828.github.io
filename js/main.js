
	// Functionality for hamburger menu

var hamburger = document.getElementById('hamburger');

// hamburger.addEventListener("click", function(){alert('test'); });

hamburger.addEventListener("click", openMenu);


	// variables for menu use
	var header = document.getElementById('main');
	var hamburgerMenu = document.getElementById('hamburger-main-menu');
	var menuState = "";

function openMenu(){
	

	// header.style.height = "500px"

	// alert('test');
	// console.log();

	

	if ((menuState == "") || (menuState == "closed")){
		menuState = "open";
		hamburgerMenu.style.display = "block";
		header.style.height = "300px";

	}
	else {
		// alert('test');
		menuState = "closed";
		hamburgerMenu.style.display = "none";
		header.style.height = "100px";
	}


}

// var testBtn = document.getElementById('test-btn');

// testBtn.addEventListener('click', executeCode);


// function executeCode(){

// 	// alert('test');
// 	var aboutDiv = document.getElementById('about');

// 	aboutDiv.setAttribute('style', 'visibility: hidden');

// }