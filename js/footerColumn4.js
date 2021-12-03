const footerList4 = [
  {
    icon: `<i class="fas fa-phone"></i>`,
    content: "Khánh : 0369 698 501",
  },
  {
    icon: `<i class="fas fa-phone"></i>`,
    content: "Long : 0342 223 605",
  },
  {
    icon: `<i class="fab fa-facebook"></i>`,
    content: "Khánh : shorturl.at/gltRT",
    link: "https://www.facebook.com/khanh.nguyenba.737/",
  },
  {
    icon: `<i class="fab fa-facebook"></i>`,
    content: "Long : shorturl.at/bizH1",
    link: "https://www.facebook.com/thanglonghp147",
  },
];

const footerContainer4 = document.getElementById("footer-content-4");

footerList4.forEach((item, index) => {
  let a = document.createElement("div");
  a.className = "footer-desc";
  if (index > 1) {
    a.innerHTML = `
    <div class="footer-icon">
    ${item.icon}
  </div>
  <a class="footer-name" href="${item.link}" target="_blank" rel="noopener noreferrer">${item.content}</a>
    `;
  } else {
    a.innerHTML = `
    <div class="footer-icon">
    ${item.icon}
  </div>
  <p class="footer-name">${item.content}</p>
    `;
  }

  footerContainer4.appendChild(a);
});
