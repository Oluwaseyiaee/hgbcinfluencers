//------------------------------------- Sidebar---------------------------------
function toggleSidebar() {
  let list = document.querySelector("ul");
  let menuButton = document.getElementById("menuButton");

  if (menuButton.getAttribute("data-name") === "menu") {
    menuButton.setAttribute("data-name", "close");
    list.classList.add("left-[0px]");
    list.classList.add("opacity-100");
  } else {
    menuButton.setAttribute("data-name", "menu");
    list.classList.remove("left-[0px]");
    list.classList.remove("opacity-100");
  }
}

document.getElementById("menuButton").addEventListener("click", toggleSidebar);



//-------------------------Navbar on scroll----------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   var scrollStart = 0;
//   var nav = document.querySelector(".nav-section");
//   var offset = navbarElement.getBoundingClientRect();

//   document.onscroll = function (e) {
//       scrollStart = e.target.scrollingElement.scrollTop;
//       if (scrollStart > offset.top) {
//           nav.classList.add("bg-primary-100 w-full fixed");
//       } else {
//           nav.classList.add("bg-transparent");
//       }
//   };
// });



//----------------------------AOS Initialization-------------------------------
AOS.init();

//------------------------------- Carousel display for word of the day -------------------------------


$('.quote',).slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

      
//--------------------------------Scroll to Top----------------------------------

const moveUp = document.querySelector('#moveUp');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if (window.scrollY > 120){
        moveUp.style.display = "flex"
    } else{
        moveUp.style.display = "none"
    }
}

moveUp.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


//--------------------------------Read More Expansion----------------------------------
function readMoreText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var button = document.getElementById("button");

    if (dots.classList.contains("hidden")) {
        // Show the dots
        dots.classList.remove("hidden");

        // Hide the more text
        moreText.classList.add("hidden");

        // change text of the button
        button.innerHTML = "Read more <i class='bx bx-right-arrow-alt ml-3 text-xl font-bold'></i>";
    } else {
        // Hide the dots
        dots.classList.add("hidden");

        // hide the more text
        moreText.classList.remove("hidden");

        // change text of the button
        button.innerHTML = "Read less <i class='bx bx-up-arrow-alt ml-3 text-xl font-bold'></i>";
    }
}




