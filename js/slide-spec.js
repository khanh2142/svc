const specBtn = document.getElementById("spec-open");
const specBtnClose = document.getElementById("spec-close");
const specArea = document.getElementById("spec-area");
const previewDown = document.getElementById("preview-open");
const previewUp = document.getElementById("preview-close");
const previewArea = document.getElementById("preview-area");

specBtn.addEventListener("click", function () {
  specArea.classList.toggle("reveal-area");
  specBtnClose.classList.toggle("spec-hidden");
  specBtn.classList.toggle("spec-hidden");
});

specBtnClose.addEventListener("click", function () {
  specArea.classList.toggle("reveal-area");
  specBtnClose.classList.toggle("spec-hidden");
  specBtn.classList.toggle("spec-hidden");
  window.scrollTo(0, 1000);
});

previewDown.addEventListener("click", function () {
  previewArea.classList.toggle("preview-slide");
  previewDown.classList.toggle("preview-hidden");
  previewUp.classList.toggle("preview-hidden");
});

previewUp.addEventListener("click", function () {
  previewArea.classList.toggle("preview-slide");
  previewDown.classList.toggle("preview-hidden");
  previewUp.classList.toggle("preview-hidden");
  window.scrollTo(0, 1328);
});
