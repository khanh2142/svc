const menuList = [
  {
    icon: `<i class="fas fa-laptop"></i>`,
    title: "laptop - máy tính xách tay",
    link: "",
  },
  {
    icon: `<i class="fas fa-microchip"></i>`,
    title: "cpu - chip xử lý",
    link: "",
  },
  {
    icon: `<i class="fas fa-hdd"></i>`,
    title: "vga - card màn hình",
    link: "",
  },
  {
    icon: `<i class="fas fa-memory"></i>`,
    title: "ram - bộ nhớ trong",
    link: "",
  },
  {
    icon: `<i class="fas fa-columns"></i>`,
    title: "mainboard - bo mạch chủ",
    link: "",
  },
  {
    icon: `<i class="fas fa-server"></i>`,
    title: "ổ cứng",
    link: "",
  },
  {
    icon: `<i class="fas fa-fan"></i>`,
    title: "tản nhiệt",
    link: "",
  },
  {
    icon: `<i class="fas fa-tshirt"></i>`,
    title: "case - vỏ máy tính",
    link: "",
  },
  {
    icon: `<i class="fas fa-plug"></i>`,
    title: "psu - nguồn máy tính",
    link: "",
  },
  {
    icon: `<i class="fas fa-desktop"></i>`,
    title: "monitor - màn hình",
    link: "",
  },
];

const menuContainer = document.getElementById("menu-container");

menuList.forEach((item) => {
  let a = document.createElement("a");
  a.className = "menu-item";
  a.href = item.link;
  a.innerHTML = `
    <div class="menu-icon">
    ${item.icon}
    </div>
    <p class="menu-title">${item.title}</p>
    `;
  menuContainer.appendChild(a);
});
