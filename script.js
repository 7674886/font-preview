const text = document.getElementById("text");
const preview = document.getElementById("preview");
const font = document.getElementById("font");

text.addEventListener("input", () => {
  preview.textContent = text.value;
});

font.addEventListener("change", () => {
  preview.style.fontFamily = font.value;
});
