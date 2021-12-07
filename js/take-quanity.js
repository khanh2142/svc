const addBtn = document.getElementById("btn-increase");
const subBtn = document.getElementById("btn-decrease");
const quanityInput = document.getElementById("input-quanity");

addBtn.addEventListener("click", function () {
  quanityInput.value++;
});

subBtn.addEventListener("click", function () {
  if (quanityInput.value > 1) {
    quanityInput.value--;
  }
});
