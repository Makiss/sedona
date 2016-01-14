var logoHtmlAcademy = document.querySelector(".htmlacademy img");
var onLogoOver = function () {
	logoHtmlAcademy.src = "../sedona/images/htmlacademy-logo-blue.png";
};
var onLogoLeave = function () {
	logoHtmlAcademy.src = "../sedona/images/htmlacademy-logo.png";
};
var onLogoDown = function () {
	logoHtmlAcademy.src = "../sedona/images/htmlacademy-logo-grey.png";
};
logoHtmlAcademy.addEventListener ("mouseover", onLogoOver);
logoHtmlAcademy.addEventListener ("mouseleave", onLogoLeave);
logoHtmlAcademy.addEventListener ("mousedown", onLogoDown);
logoHtmlAcademy.addEventListener ("mouseup", onLogoLeave);