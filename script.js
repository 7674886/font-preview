const preview = document.getElementById("preview");
const font = document.getElementById("font");
const size = document.getElementById("size");
const spacing = document.getElementById("spacing");
const line = document.getElementById("line");

font.addEventListener("change", () => {
  preview.style.fontFamily = font.value;
});

size.addEventListener("input", () => {
  preview.style.fontSize = size.value + "px";
});

spacing.addEventListener("input", () => {
  preview.style.letterSpacing = spacing.value + "px";
});

line.addEventListener("input", () => {
  preview.style.lineHeight = line.value;
});
