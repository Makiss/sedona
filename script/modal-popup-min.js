var searchHotel=document.querySelector(".btn-search"),modalPopUp=document.querySelector(".modal-content");searchHotel.addEventListener("click",function(e){e.preventDefault(),modalPopUp.classList.toggle("modal-content-open")}),window.addEventListener("keydown",function(e){27==e.keyCode&&modalPopUp.classList.contains("modal-content-open")&&modalPopUp.classList.remove("modal-content-open")});