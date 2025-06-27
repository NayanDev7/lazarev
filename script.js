function navAnimation() {
  const nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    document.querySelector("#nav-bottom").style.height = "27vh";
    document.querySelector("#nav-bottom").style.transition = "0.5s ease-in";

    document.querySelector("#nav-bottom").addEventListener("transitionend", function onTransitionEnd() {
       
      if (document.querySelector("#nav-bottom").style.height === "27vh") {
          document.querySelectorAll(".h5").forEach((e) => {
            e.style.display = "block";
          });
        }
      });
  });

  nav.addEventListener("mouseleave", function () {
    console.log("hello");
    document.querySelector("#nav-bottom").style.height = "0";
    document.querySelectorAll(".h5").forEach((e) => {
      e.style.display = "none";
    });
  });
}

function mobileNavToggle() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navBottom = document.querySelector("#nav-bottom");
  
  console.log("Mobile nav elements found:", { navToggle, navLinks, navBottom });
  
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Hamburger clicked!");
      navLinks.classList.toggle("active");
      navToggle.classList.toggle("active");
      
      // Handle nav-bottom visibility
      if (navBottom) {
        if (navLinks.classList.contains("active")) {
          navBottom.style.height = "0";
          navBottom.style.transition = "0.3s ease";
        } else {
          navBottom.style.height = "0";
        }
      }
    });
    
  
    // Close mobile menu when clicking outside
    document.addEventListener("click", function(event) {
      const nav = document.querySelector("nav");
      if (!nav.contains(event.target)) {
        navLinks.classList.remove("active");
        navToggle.classList.remove("active");
        
        // Reset nav-bottom
        if (navBottom) {
          navBottom.style.height = "0";
        }
      }
    });
  } else {
    console.log("Mobile nav elements not found!");
  }
}

function page3VideoAnimation() {
  const page3Center = document.querySelector(".page3-center");

  const page3Video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    page3Video.play();
    page3Video.style.transform = "scaleX(1) scaleY(1)";
    // page3Video.style.transform = "scaleY(1)";
    page3Video.style.opacity = "1";
    page3Video.style.borderRadius = "0";
    page3Video.style.transition = "1s ease-in";
  });

  page3Video.addEventListener("click", function (e) {
    // e.stopPropagation();
    console.log("hello");
    page3Video.pause();
    page3Video.currentTime = 0;
    page3Video.style.transform = "scaleX(0.7) scaleY(0)";
    // page3Video.style.transform = "";
    page3Video.style.opacity = "0";
    page3Video.style.borderRadius = "30px";
    page3Video.style.transition = "1s ease-in";
  });
}

function page7Animation() {
  const page7SecRight = document.querySelector(".sec-right");
  const page7SecRightVideo = document.querySelector(".sec-right video");

  page7SecRight.addEventListener("mouseenter", function () {
    page7SecRightVideo.play();
    page7SecRightVideo.style.opacity = "1";
    page7SecRightVideo.style.zIndex = 1;
  });
  page7SecRightVideo.addEventListener("mouseleave", function () {
    page7SecRightVideo.pause();
    page7SecRightVideo.currentTime = 0;
    page7SecRightVideo.style.opacity = "0";
  });

  // const page7Sec2Right = document.querySelector(".section2");
  const page7Sec2RightVideo = document.querySelector(".section2 video");

  page7Sec2RightVideo.addEventListener("mouseover", function () {
    console.log("h");
    page7Sec2RightVideo.play();
  });

  page7Sec2RightVideo.addEventListener("mouseout", function () {
    page7Sec2RightVideo.pause();
    page7Sec2RightVideo.currentTime = 0;
  });
}

function page8Animation() {
  const page8Cont1Vid = document.querySelector(
    "#page8-container .container1 video"
  );

  page8Cont1Vid.addEventListener("mouseover", function () {
    page8Cont1Vid.play();
    page8Cont1Vid.style.height = "78%";
    page8Cont1Vid.style.marginTop = "30%";
    page8Cont1Vid.style.zIndex = "1";
    page8Cont1Vid.style.transition = "all 0.4s ease-in-out";
  });

  page8Cont1Vid.addEventListener("mouseout", function () {
    page8Cont1Vid.pause();
    page8Cont1Vid.currentTime = 0;
    page8Cont1Vid.style.height = "60%";
    page8Cont1Vid.style.marginTop = "61%";
    page8Cont1Vid.style.zIndex = "0";
    page8Cont1Vid.style.transition = "all 0.4s ease-in-out";
  });

  const page8Cont2Vid = document.querySelector(
    "#page8-container .container2 video"
  );

  page8Cont2Vid.addEventListener("mouseover", function () {
    page8Cont2Vid.play();
    page8Cont2Vid.style.height = "78%";
    page8Cont2Vid.style.marginTop = "30%";
    page8Cont2Vid.style.zIndex = "1";
    page8Cont2Vid.style.transition = "all 0.4s ease-in-out";
  });

  page8Cont2Vid.addEventListener("mouseout", function () {
    page8Cont2Vid.pause();
    page8Cont2Vid.currentTime = 0;
    page8Cont2Vid.style.height = "60%";
    page8Cont2Vid.style.marginTop = "61%";
    page8Cont2Vid.style.zIndex = "0";
    page8Cont2Vid.style.transition = "all 0.4s ease-in-out";
  });
}

navAnimation();

mobileNavToggle();

page3VideoAnimation();

page7Animation();

page8Animation();
