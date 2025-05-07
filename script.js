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
navAnimation();
