const productList = [
  {
    name: "Laptop Acer Swift 3X SF314-510G-57MR NX.A10SV.004 (i5-1135G7/RAM-8GB/SSD-512GB/14Inch/FHD/Win10/Vàng)",
    image:
      "https://nguyencongpc.vn/media/product/250-17789-laptop-acer-swift-3x-sf314-510g-57mr-nx-a10sv-004.jpg",
    price: 10000000,
    sale: 5,
  },
  {
    name: "Laptop Acer Swift 3X SF314-510G-57MR NX.A10SV.004 (i5-1135G7/RAM-8GB/SSD-512GB/14Inch/FHD/Win10/Vàng)",
    image:
      "https://nguyencongpc.vn/media/product/250-17789-laptop-acer-swift-3x-sf314-510g-57mr-nx-a10sv-004.jpg",
    price: 20000000,
    sale: 10,
  },
  {
    name: "Laptop Acer Swift 3X SF314-510G-57MR NX.A10SV.004 (i5-1135G7/RAM-8GB/SSD-512GB/14Inch/FHD/Win10/Vàng)",
    image:
      "https://nguyencongpc.vn/media/product/250-17789-laptop-acer-swift-3x-sf314-510g-57mr-nx-a10sv-004.jpg",
    price: 30000000,
    sale: 15,
  },
  {
    name: "Laptop Acer Swift 3X SF314-510G-57MR NX.A10SV.004 (i5-1135G7/RAM-8GB/SSD-512GB/14Inch/FHD/Win10/Vàng)",
    image:
      "https://nguyencongpc.vn/media/product/250-17789-laptop-acer-swift-3x-sf314-510g-57mr-nx-a10sv-004.jpg",
    price: 40000000,
    sale: 20,
  },
  {
    name: "Laptop Acer Swift 3X SF314-510G-57MR NX.A10SV.004 (i5-1135G7/RAM-8GB/SSD-512GB/14Inch/FHD/Win10/Vàng)",
    image:
      "https://nguyencongpc.vn/media/product/250-17789-laptop-acer-swift-3x-sf314-510g-57mr-nx-a10sv-004.jpg",
    price: 50000000,
    sale: 25,
  },
  {
    name: "Laptop Acer Swift 3X SF314-510G-57MR NX.A10SV.004 (i5-1135G7/RAM-8GB/SSD-512GB/14Inch/FHD/Win10/Vàng)",
    image:
      "https://nguyencongpc.vn/media/product/250-17789-laptop-acer-swift-3x-sf314-510g-57mr-nx-a10sv-004.jpg",
    price: 60000000,
    sale: 30,
  },
  {
    name: "Laptop Acer Swift 3X SF314-510G-57MR NX.A10SV.004 (i5-1135G7/RAM-8GB/SSD-512GB/14Inch/FHD/Win10/Vàng)",
    image:
      "https://nguyencongpc.vn/media/product/250-17789-laptop-acer-swift-3x-sf314-510g-57mr-nx-a10sv-004.jpg",
    price: 70000000,
    sale: 35,
  },
  {
    name: "Laptop Acer Swift 3X SF314-510G-57MR NX.A10SV.004 (i5-1135G7/RAM-8GB/SSD-512GB/14Inch/FHD/Win10/Vàng)",
    image:
      "https://nguyencongpc.vn/media/product/250-17789-laptop-acer-swift-3x-sf314-510g-57mr-nx-a10sv-004.jpg",
    price: 80000000,
    sale: 40,
  },
  {
    name: "Laptop Acer Swift 3X SF314-510G-57MR NX.A10SV.004 (i5-1135G7/RAM-8GB/SSD-512GB/14Inch/FHD/Win10/Vàng)",
    image:
      "https://nguyencongpc.vn/media/product/250-17789-laptop-acer-swift-3x-sf314-510g-57mr-nx-a10sv-004.jpg",
    price: 90000000,
    sale: 45,
  },
  {
    name: "Laptop Acer Swift 3X SF314-510G-57MR NX.A10SV.004 (i5-1135G7/RAM-8GB/SSD-512GB/14Inch/FHD/Win10/Vàng)",
    image:
      "https://nguyencongpc.vn/media/product/250-17789-laptop-acer-swift-3x-sf314-510g-57mr-nx-a10sv-004.jpg",
    price: 100000000,
    sale: 50,
  },
];

const productContainer = document.getElementById("product-container");
const productContainer2 = document.getElementById("pc1");

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

productList.forEach((item) => {
  let a = document.createElement("a");
  a.href = "#";
  a.className = "product-item";
  a.innerHTML = `
  <span class="product-promotion">-${item.sale}%</span>
  <img
  src=${item.image}
  alt=""
  class="product-img"
/>
<p class="product-name">${item.name}</p>
<p class="product-price">${numberWithCommas(
    item.price - (item.sale / 100) * item.price
  )}đ</p>
<p class="product-root">${numberWithCommas(item.price)}đ</p>
  `;
  productContainer.appendChild(a);
});

productList.forEach((item) => {
  let a = document.createElement("a");
  a.href = "#";
  a.className = "product-item";
  a.innerHTML = `
    <span class="product-promotion">-${item.sale}%</span>
    <img
    src=${item.image}
    alt=""
    class="product-img"
  />
  <p class="product-name">${item.name}</p>
  <p class="product-price">${numberWithCommas(
    item.price - (item.sale / 100) * item.price
  )}đ</p>
  <p class="product-root">${numberWithCommas(item.price)}đ</p>
    `;
  productContainer2.appendChild(a);
});
