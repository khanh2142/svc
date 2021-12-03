const footerList2 = [
  {
    content: "Chính sách vận chuyển",
  },
  {
    content: "Chính sách bảo hành",
  },
  {
    content: "Chính sách đổi trả và hoàn tiền",
  },
  {
    content: "Chính sách xử lý khiếu nại",
  },
  {
    content: "Bảo mật khách hàng",
  },
];

const footerContainer2 = document.getElementById("footer-content-2");

footerList2.forEach((item, index) => {
  let a = document.createElement("div");
  a.className = "footer-desc";
  a.innerHTML = `
  <a class="footer-name" href="">${item.content}</a>
    `;
  footerContainer2.appendChild(a);
});
