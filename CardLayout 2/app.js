const staffSlider = document.querySelector(".staff");
const staff = document.querySelectorAll(".staff .staff");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let i = 1;
const size = staff[0].clientWidth;

staffSlider.style.transform = "translateX(" + -size * i + "px)";

next.addEventListener("click", () => {
  if (i >= staff.length - 1) return;
  staffSlider.style.transition = `transform 0.4s ease-in-out`;
  i++;
  staffSlider.style.transform = "translateX(" + -size * i + "px)";
});

prev.addEventListener("click", () => {
  if (i <= 0) return;
  staffSlider.style.transition = `transform 0.4s ease-in-out`;
  i--;
  staffSlider.style.transform = "translateX(" + -size * i + "px)";
});

staffSlider.addEventListener("transitionend", () => {
  if (staff[i].id === "lastStaff") {
    staffSlider.style.transition = `none`;
    i = staff.length - 2;
    staffSlider.style.transform = "translateX(" + -size * i + "px)";
  }
  if (staff[i].id === "firstStaff") {
    staffSlider.style.transition = `none`;
    i = staff.length - i;
    staffSlider.style.transform = "translateX(" + -size * i + "px)";
  }
});
