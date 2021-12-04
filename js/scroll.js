const header = document.getElementById("header");

if (window.scrollY < 400) {
  header.style.display = "none";
}

window.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY >= 400) {
    header.style.display = "flex";
  } else {
    header.style.display = "none";
  }
};
