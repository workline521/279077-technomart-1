"use strict";
var i;
var showmap = document.querySelector(".map");
var popup = document.querySelector(".modal-content-map");
var close = popup.querySelector(".modal-content-close");

var mail = document.querySelector(".lost");
var mailform = document.querySelector(".modal-mail");
var closemail = mailform.querySelector(".modal-content-close");

var buy = document.querySelectorAll(".buy");
var buyform = document.querySelector(".modal-content");
var exitbuyform = buyform.querySelector(".modal-content-close");

var delivery = document.querySelector(".delivery-service");
var dslide = document.querySelector(".delivery-slide");

var guarantee = document.querySelector(".guarantee-service");
var gslide = document.querySelector(".guarantee-slide");

var credit = document.querySelector(".credit-service");
var cslide = document.querySelector(".credit-slide");

window.onload = function (event) {
	delivery.classList.add("show-d");
};
guarantee.addEventListener("click", function (event) {
	event.preventDefault();
	dslide.classList.add("close-delivery");
	gslide.classList.add("show-guarantee");
	cslide.classList.remove("show-credit");
	guarantee.classList.add("show-g");
	credit.classList.remove("show-c");
	delivery.classList.remove("show-d");
});
delivery.addEventListener("click", function (event) {
	event.preventDefault();
	gslide.classList.remove("show-guarantee");
	dslide.classList.remove("close-delivery");
	cslide.classList.remove("show-credit");
	delivery.classList.add("show-d");
	guarantee.classList.remove("show-g");
	credit.classList.remove("show-c");
});
credit.addEventListener("click", function (event) {
	event.preventDefault();
	dslide.classList.add("close-delivery");
	gslide.classList.remove("show-guarantee");
	cslide.classList.add("show-credit");
	guarantee.classList.remove("show-g");
	credit.classList.add("show-c");
	delivery.classList.remove("show-d");
});


showmap.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("show-map");
	popup.classList.remove("fadeout");
});
close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("show-map");
	popup.classList.add("fadeout");
});
function closeMap() {
	popup.classList.remove("fadeout");
}
popup.addEventListener("animationend", closeMap, false);

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("show-map"
		         )) {
		    popup.classList.remove("show-map");
	    }
    }
});



mail.addEventListener("click", function (event) {
	event.preventDefault();
	mailform.classList.add("show-mail");
	mailform.classList.remove("fadeout");
});
closemail.addEventListener("click", function (event) {
	event.preventDefault();
	mailform.classList.remove("show-mail");
	mailform.classList.add("fadeout");
});
function closeMail() {
	mailform.classList.remove("fadeout");
}
mailform.addEventListener("animationend", closeMail, false);

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (mailform.classList.contains("show-mail"
		         )) {
		    mailform.classList.remove("show-mail");
	    }
    }
});



for (i = 0; i < buy.length; i++) {
	buy[i].addEventListener('click', function (event) {
		event.preventDefault();
		buyform.classList.add("show-buy-form");
		buyform.classList.remove("fadeout");
	});
}
exitbuyform.addEventListener("click", function (event) {
	event.preventDefault();
	buyform.classList.remove("show-buy-form");
	buyform.classList.add("fadeout");
});

function closeBuy() {
	buyform.classList.remove("fadeout");
}
buyform.addEventListener("animationend", closeBuy, false);

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (buyform.classList.contains("show-buy-form"
		        )) {
		    buyform.classList.remove("show-buy-form");
	    }
    }
});









