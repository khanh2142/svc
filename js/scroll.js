const header = document.getElementById("header");

if (window.scrollY < 400) {
  header.style.display = "none";
}

window.onscroll = () => {
  if (window.scrollY >= 400) {
    header.style.display = "flex";
  } else {
    header.style.display = "none";
  }
};
