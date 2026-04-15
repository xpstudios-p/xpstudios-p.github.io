// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// CURSOR GLOW
const cursor = document.createElement("div");
cursor.style.position = "fixed";
cursor.style.width = "15px";
cursor.style.height = "15px";
cursor.style.background = "rgba(255,165,0,0.5)";
cursor.style.borderRadius = "50%";
cursor.style.pointerEvents = "none";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
