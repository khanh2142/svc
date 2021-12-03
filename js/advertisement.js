const adList = [
  {
    bgColor: `linear-gradient(90deg, rgba(176,91,91,1) 0%, rgba(44,139,161,1) 100%)`,
    content: "chất lượng",
    link: "",
  },
  {
    bgColor: `linear-gradient(90deg, rgba(138,91,198,1) 0%, rgba(44,139,161,1) 100%)`,
    content: "giá tốt",
    link: "",
  },
  {
    bgColor: `linear-gradient(90deg, rgba(198,91,190,1) 0%, rgba(44,139,161,1) 100%)`,
    content: "giao hàng nhanh",
    link: "",
  },
  {
    bgColor: `linear-gradient(90deg, rgba(91,198,113,1) 0%, rgba(44,139,161,1) 100%)`,
    content: "bảo hành <br>uy tín",
    link: "",
  },
];

const adContainer = document.getElementById("ad-container");

adList.forEach((item) => {
  let a = document.createElement("a");
  a.href = item.link;
  a.className = "ad-item";
  a.style.background = item.bgColor;
  a.innerHTML = `<p>${item.content}</p>`;
  adContainer.appendChild(a);
});
