const footerList3 = [
  {
    content: "Hướng dẫn mua hàng trực tuyến",
  },
  {
    content: "Hướng dẫn thanh toán",
  },
  {
    content: "Hướng dẫn mua hàng trả góp",
  },
  {
    content: "Gửi yêu cầu bảo hành",
  },
  {
    content: "Gửi yêu cầu khiếu nại",
  },
];

const footerContainer3 = document.getElementById("footer-content-3");

footerList3.forEach((item, index) => {
  let a = document.createElement("div");
  a.className = "footer-desc";
  a.innerHTML = `
  <a class="footer-name" href="">${item.content}</a>
    `;
  footerContainer3.appendChild(a);
});
