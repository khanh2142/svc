const specBtn = document.getElementById("spec-open");
const specBtnClose = document.getElementById("spec-close");
const specArea = document.getElementById("spec-area");
let checkSpec = true;

specBtn.addEventListener("click", function () {
  specArea.classList.toggle("reveal-area");
  specBtnClose.classList.toggle("spec-hidden");
  specBtn.classList.toggle("spec-hidden");
});

specBtnClose.addEventListener("click", function () {
  specArea.classList.toggle("reveal-area");
  specBtnClose.classList.toggle("spec-hidden");
  specBtn.classList.toggle("spec-hidden");
});
