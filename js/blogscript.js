//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

//Dropdown Menu
function showTrip() {
  
  const divShowTrip = document.getElementById("tripDIV");
  const btnShowTrip = document.getElementById("showTripButton");

  if (divShowTrip.style.display === "none") {
    divShowTrip.style.display = "block";
    btnShowTrip.textContent = "Hide Other Reports";
  } else {
    divShowTrip.style.display = "none";
    btnShowTrip.textContent = "More from this Trip";
  }

}

//Dropdown menu
//when button is selected, show navigation.
function showNav() {

  //NAV variables
  const navShowContents = document.querySelector("nav");
  const btnShowNavigation = document.getElementById("navBtn");

  if (navShowContents.style.display === "block") {
      navShowContents.style.display = "none";
      btnShowNavigation.innerHTML = "Show<br>Menu"; 
      topFunction();      
  } else {
      navShowContents.style.display = "block"
      btnShowNavigation.innerHTML = "Hide<br>Menu";
  }
}

//load lower resolution images
(() => {
  'use strict';
  // Page is loaded
  const objects = document.getElementsByClassName('img');  Array.from(objects).map((item) => {
    // Start loading image
    const img = new Image();
    img.src = item.dataset.src;
    // Once image is loaded replace the src of the HTML element
    img.onload = () => {
      item.classList.remove('asyncImage');
      return item.nodeName === 'IMG' ? 
        item.src = item.dataset.src :        
        item.style.backgroundImage = `url(${item.dataset.src})`;
    };
  });
})();
