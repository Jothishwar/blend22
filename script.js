const navSlide=()=>{
	const burger=document.querySelector('.burger');
	const nav=document.querySelector('.nav-links');
	const navLinks=document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		navLinks.forEach((link,index)=>{
			//console.log(index/7+2s);
			if (link.style.animation) {
				link.style.animation='';
			} else{
				link.style.animation=`navLinkFade 0.5s ease forwards ${index/ 7 + 0.3}s`;
			}
		});
		burger.classList.toggle('toggle')
	});
}

navSlide();

//---------------timeline------------------------------------------
(function () {
  "use strict";

  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();