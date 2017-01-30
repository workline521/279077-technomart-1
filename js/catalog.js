var buy = document.querySelectorAll(".buy");
var cbuyform = document.querySelector(".catalog-modal");
var cexitbuyform = document.querySelector(".catalog-modal-close");

for (var i = 0; i < buy.length; i++) {
    buy[i].addEventListener('click', function (event) {
        event.preventDefault();
        cbuyform.classList.add("show-buy-form");
                });
}
cexitbuyform.addEventListener("click", function(event) {
        event.preventDefault();
	    cbuyform.classList.remove("show-buy-form");
	          
              });

