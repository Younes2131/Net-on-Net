


/* slidern knapparna bytar slide  */ 


const wrapperElements = document.getElementsByClassName('wrapper');
const clickButton = document.getElementById('click');
const clickButton2 = document.getElementById('click2');


clickButton.addEventListener('click', clicked);
clickButton2.addEventListener('click', clicked2);
let scrollPosition = 0;


wrapperElements[0].addEventListener("scroll", function (event) {
  scrollPosition = wrapperElements[0].scrollLeft;
});


function clicked() {
  scrollPosition += 925;
  wrapperElements[0].scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
  scrollPosition = wrapperElements[0].scrollLeft + 50;
  console.log(wrapperElements[0].scrollLeft);
}


function clicked2() {
  scrollPosition -= 925;
  wrapperElements[0].scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
  scrollPosition = wrapperElements[0].scrollLeft + 50;
  console.log(wrapperElements[0].scrollLeft);
}






/* Logga in funktionerna  */


    document.getElementById("cartButton").addEventListener("click", function() {
        var cart = document.getElementById("shoppingCart");
        if (cart.style.display === "none") {
          cart.style.display = "block";
        } else {
          cart.style.display = "none";
        }
      });
     
     
     
      document.getElementById("loginButton").addEventListener("click", function() {
        var loginForm = document.getElementById("loginForm");
        if (loginForm.style.display === "none") {
          loginForm.style.display = "block";
        } else {
          loginForm.style.display = "none";
        }
      });






      