 /* Reklam SLidern Så knappar ändrar bilderna  */

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

/* Product slidern blir for-loopad */
    let products = [
        {
            recommended: true,
            imgSrc: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-128gb-5g-black(1015056)_400216_1_Normal_Large.webp",
            title: "Product 1",
            additionalInfo: "Blablblabla...",
            rating: "★★★★★",
            info: [
                "Blablblabla",
                "Blablblabla...",
                "Blablblabla..."
            ],
            normalPrice: "999 kr",
            reducedPrice: "REA: 899kr"
        },
   
        {
            recommended: true,
            imgSrc: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-128gb-5g-black(1015056)_400216_1_Normal_Large.webp",
            title: "Product 2",
            additionalInfo: "Blablblabla...",
            rating: "★★★★★",
            info: [
                "Blablblabla",
                "Blablblabla...",
                "Blablblabla..."
            ],
            normalPrice: "999 kr",
            reducedPrice: "REA: 899kr"
        },

        {
            recommended: true,
            imgSrc: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-128gb-5g-black(1015056)_400216_1_Normal_Large.webp",
            title: "Product 3",
            additionalInfo: "Blablblabla...",
            rating: "★★★★★",
            info: [
                "Blablblabla",
                "Blablblabla...",
                "Blablblabla..."
            ],
            normalPrice: "999 kr",
            reducedPrice: "REA: 899kr"
        },

        {
            recommended: true,
            imgSrc: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-128gb-5g-black(1015056)_400216_1_Normal_Large.webp",
            title: "Product 4",
            additionalInfo: "Blablblabla...",
            rating: "★★★★★",
            info: [
                "Blablblabla",
                "Blablblabla...",
                "Blablblabla..."
            ],
            normalPrice: "999 kr",
            reducedPrice: "REA: 899kr"
        },

        {
            recommended: true,
            imgSrc: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-128gb-5g-black(1015056)_400216_1_Normal_Large.webp",
            title: "Product 5",
            additionalInfo: "Blablblabla...",
            rating: "★★★★★",
            info: [
                "Blablblabla",
                "Blablblabla...",
                "Blablblabla..."
            ],
            normalPrice: "999 kr",
            reducedPrice: "REA: 899kr"
        },

        {
            recommended: true,
            imgSrc: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-128gb-5g-black(1015056)_400216_1_Normal_Large.webp",
            title: "Product 6",
            additionalInfo: "Blablblabla...",
            rating: "★★★★★",
            info: [
                "Blablblabla",
                "Blablblabla...",
                "Blablblabla..."
            ],
            normalPrice: "999 kr",
            reducedPrice: "REA: 899kr"
        },

        {
            recommended: true,
            imgSrc: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-128gb-5g-black(1015056)_400216_1_Normal_Large.webp",
            title: "Product 7",
            additionalInfo: "Blablblabla...",
            rating: "★★★★★",
            info: [
                "Blablblabla",
                "Blablblabla...",
                "Blablblabla..."
            ],
            normalPrice: "999 kr",
            reducedPrice: "REA: 899kr"
        },

        {
            recommended: true,
            imgSrc: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-128gb-5g-black(1015056)_400216_1_Normal_Large.webp",
            title: "Product 8",
            additionalInfo: "Blablblabla...",
            rating: "★★★★★",
            info: [
                "Blablblabla",
                "Blablblabla...",
                "Blablblabla..."
            ],
            normalPrice: "999 kr",
            reducedPrice: "REA: 899kr"
        },

        {
            recommended: true,
            imgSrc: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-128gb-5g-black(1015056)_400216_1_Normal_Large.webp",
            title: "Product 9",
            additionalInfo: "Blablblabla...",
            rating: "★★★★★",
            info: [
                "Blablblabla",
                "Blablblabla...",
                "Blablblabla..."
            ],
            normalPrice: "999 kr",
            reducedPrice: "REA: 899kr"
        },

        {
            recommended: true,
            imgSrc: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-128gb-5g-black(1015056)_400216_1_Normal_Large.webp",
            title: "Product 10",
            additionalInfo: "Blablblabla...",
            rating: "★★★★★",
            info: [
                "Blablblabla",
                "Blablblabla...",
                "Blablblabla..."
            ],
            normalPrice: "999 kr",
            reducedPrice: "REA: 899kr"
        },

        {
            recommended: true,
            imgSrc: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-128gb-5g-black(1015056)_400216_1_Normal_Large.webp",
            title: "Product 11",
            additionalInfo: "Blablblabla...",
            rating: "★★★★★",
            info: [
                "Blablblabla",
                "Blablblabla...",
                "Blablblabla..."
            ],
            normalPrice: "999 kr",
            reducedPrice: "REA: 899kr"
        },

        {
            recommended: true,
            imgSrc: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-128gb-5g-black(1015056)_400216_1_Normal_Large.webp",
            title: "Product 12",
            additionalInfo: "Blablblabla...",
            rating: "★★★★★",
            info: [
                "Blablblabla",
                "Blablblabla...",
                "Blablblabla..."
            ],
            normalPrice: "999 kr",
            reducedPrice: "REA: 899kr"
        }
    ];

    let slideElement = document.getElementById("slide");
    for (let i = 0; i < 12 && i < products.length; i++) {
        slideElement.innerHTML +=
            `<div class="container-product-slider">
                <div class="products-inner">
                    <ul>
                        <li>
                            <div class="products-inner-box">
                                <div class="${products[i].recommended ? 'recommended-box' : ''}">Rekommenderad</div>
                                <img class="products--img" src="${products[i].imgSrc}" alt="">
                                <h5>${products[i].title}</h5>
                                <p class="additional-info">${products[i].additionalInfo}</p>
                                <div class="product-rating">${products[i].rating}</div>
                                <div class="info">
                                    <p>${products[i].info[0]}</p>
                                    <p>${products[i].info[1]}</p>
                                    <p>${products[i].info[2]}</p>
                                </div>
                                <div class="prices">
                                    <p class="normal-price">${products[i].normalPrice}</p>
                                    <p class="reduced-price">${products[i].reducedPrice}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>`;
    }




/* SÖk fältet */

    const searchInput = document.getElementById("search--input");
    const searchResultsContainer = document.getElementById("searchResults");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
    
        renderSearchResults(filteredProducts);
    });
    
  
    function renderSearchResults(results) {
       
        searchResultsContainer.innerHTML = "";
    
        if (results.length > 0) {
            results.forEach(product => {
                const resultItem = document.createElement("div");
                resultItem.classList.add("search-result-item");
                resultItem.textContent = product.title;
                searchResultsContainer.appendChild(resultItem);
            });
            searchResultsContainer.style.display = "block"; 
        } else {
            searchResultsContainer.style.display = "none";
        }
    }
    
    document.addEventListener("click", function(event) {
        if (!searchResultsContainer.contains(event.target) && event.target !== searchInput) {
            searchResultsContainer.style.display = "none";
        }
    });
    






   /* Kundvagnen */
   document.getElementById("cartButton").addEventListener("click", function() {
    console.log("Button clicked"); 
    var cart = document.getElementById("shoppingCart");
    if (cart.style.display !== "block") {
        cart.style.display = "block";
    } else {
        cart.style.display = "none";
    }
});



 /*LOGGA IN */
    
document.getElementById("loginButton").addEventListener("click", function() {
var loginForm = document.getElementById("loginForm");
if (loginForm.style.display === "none") {
loginForm.style.display = "block";
} else {
loginForm.style.display = "none";
    }
});






const dropdownMenu = document.getElementById('surfplatta-dropdown');
const overlay = document.getElementById('overlay');

document.getElementById('surfplatta-link').addEventListener('click', function(event) {
  event.preventDefault(); 
  toggleDropdown();
});
function toggleDropdown() {
  dropdownMenu.classList.toggle('show');
  overlay.classList.toggle('show');
}

/* för att stänga dropdown-menyn*/
function closeDropdowns() {
  dropdownMenu.classList.remove('show');
  overlay.classList.remove('show');
}
overlay.addEventListener('click', closeDropdowns);
/* Stänger dropdown-menyn om man klickar utanför den*/
window.addEventListener('click', function(event) {
  if (!event.target.matches('.main--navlink')) {
    closeDropdowns();
  }
});

/*Stängning för dator och surfplatta */
const closeDropdownButton = document.getElementById('close-dropdown');
closeDropdownButton.addEventListener('click', closeDropdowns);




