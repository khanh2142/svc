const footerList1 = [
  {
    icon: `<i class="fas fa-laptop-code"></i>`,
    content: "Nguyễn Bá Khánh",
  },
  {
    icon: `<i class="fas fa-laptop-code"></i>`,
    content: "Lê Thăng Long",
  },
  {
    icon: `<i class="fas fa-envelope"></i>`,
    content: "k2142a@gmail.com",
  },
  {
    icon: `<i class="fas fa-envelope"></i>`,
    content: "Long2323123@gmail.com",
  },
  {
    icon: `<i class="fab fa-github"></i>`,
    content: "https://github.com/khanh2142",
  },
  {
    icon: `<i class="fas fa-user-clock"></i>`,
    content: "07:00 - 22:00",
  },
];

const footerContainer1 = document.getElementById("footer-content-1");

footerList1.forEach((item, index) => {
  let a = document.createElement("div");
  a.className = "footer-desc";
  if (index == 4) {
    a.innerHTML = `
    <div class="footer-icon">
    ${item.icon}
  </div>
  <a class="footer-name" href=${item.content} target="_blank" rel="noopener noreferrer">${item.content}</a>
    `;
  } else {
    a.innerHTML = `
  <div class="footer-icon">
  ${item.icon}
</div>
<p class="footer-name">${item.content}</p>
  `;
  }
  footerContainer1.appendChild(a);
});
