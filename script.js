function navAnimation() {
  const nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    document.querySelector("#nav-bottom").style.height = "27vh";
    document.querySelector("#nav-bottom").style.transition = "0.5s ease-in";
    setTimeout(() => {
      document.querySelectorAll(".h5").forEach((e) => {
        e.style.display = "block";
      });
    }, 600);
  });
  nav.addEventListener("mouseleave", function () {
    console.log("hello");
    document.querySelector("#nav-bottom").style.height = "0";
    document.querySelectorAll(".h5").forEach((e) => {
      e.style.display = "none";
    });
  });
}

function page3VideoAnimation(){
    const page3Center = document.querySelector(".page3-center");

const page3Video = document.querySelector("#page3 video");

page3Center.addEventListener("click" , function(){
    page3Video.play();
    page3Video.style.transform = "scaleX(1) scaleY(1)";
    // page3Video.style.transform = "scaleY(1)";
    page3Video.style.opacity = "1";
    page3Video.style.borderRadius = "0";
    page3Video.style.transition = "1s ease-in";
})

page3Video.addEventListener("click",function(e){
    // e.stopPropagation();  
    console.log("hello");
    page3Video.pause();
    page3Video.style.transform = "scaleX(0.7) scaleY(0)";
    // page3Video.style.transform = "";
    page3Video.style.opacity = "0";
    page3Video.style.borderRadius = "30px";
    page3Video.style.transition = "1s ease-in";
})
}

// navAnimation();
page3VideoAnimation();


const page5Container = document.querySelector("")