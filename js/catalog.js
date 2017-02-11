var buy = document.querySelectorAll(".buy");
var cbuyform = document.querySelector(".catalog-modal");
var cexitbuyform = document.querySelector(".catalog-modal-close");

for (var i = 0; i < buy.length; i++) {
    buy[i].addEventListener('click', function (event) {
        event.preventDefault();
        cbuyform.classList.add("show-buy-form");
		cbuyform.classList.remove("fadeout");
                });
}
cexitbuyform.addEventListener("click", function(event) {
        event.preventDefault();
	    cbuyform.classList.remove("show-buy-form");
	    cbuyform.classList.add("fadeout");     
              });

function closeCbuy() {
	cbuyform.classList.remove("fadeout");
}
cbuyform.addEventListener("animationend", closeCbuy, false);

window.addEventListener("keydown", function(event) {
	if ( event.keyCode === 27){
		if(cbuyform.classList.contains("show-buy-form"
		)){
		cbuyform.classList.remove("show-buy-form");
	}
  }
});