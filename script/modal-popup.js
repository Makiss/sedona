var searchHotel = document.querySelector(".btn-search");
var modalPopUp	= document.querySelector(".modal-content");

searchHotel.addEventListener("click", function(event) {
	event.preventDefault();
	modalPopUp.classList.toggle("modal-content-open");
      });

window.addEventListener("keydown", function (event) {
	if(event.keyCode == 27) {
		if(modalPopUp.classList.contains("modal-content-open")) {
			modalPopUp.classList.remove("modal-content-open");
		}
	}
});