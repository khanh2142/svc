const pciContaier = document.getElementById("product__container-area");

function randomTest(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

for (let i = 0; i < 36; i++) {
  let a = document.createElement("a");
  a.className = "product__container-item";
  let stockRandom = randomTest(0, 1);
  a.href = "#";

  let starRandom = randomTest(0, 5);
  let s2 = "";
  if (starRandom == 0) {
    s2 = `<div class="product__container-rate">
          <div class="product__container-star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <span>(${starRandom})</span>
        </div>`;
  } else {
    let s3 = "";
    let s4 = "";
    for (let j = 0; j < parseInt(starRandom); j++) {
      s3 += `<i class="fas fa-star rated"></i>`;
    }
    for (let k = 0; k < 5 - parseInt(starRandom); k++) {
      s4 += `<i class="fas fa-star"></i>`;
    }
    s2 = `<div class="product__container-rate">
      <div class="product__container-star">
        ${s3 + s4}
      </div>
      <span>(${starRandom})</span>
    </div>`;
  }

  let s5 = "";
  if (parseInt(stockRandom) != 0) {
    s5 = `<div class="product__container-stock" style="color : #d74949">
  <!-- #d74949 : còn hàng -->
  <!-- #499bd7 : hết hàng -->
  <!-- <span>Còn hàng</span> -->
  <span>Còn hàng</span>

  <!-- <i class="fas fa-cart-plus"></i> -->
  <i class="fas fa-cart-plus"></i>
</div>`;
  } else {
    s5 = `<div class="product__container-stock" style="color : #499bd7">
    <!-- #d74949 : còn hàng -->
    <!-- #499bd7 : hết hàng -->
    <!-- <span>Còn hàng</span> -->
    <span>Hết hàng</span>
  
    <!-- <i class="fas fa-cart-plus"></i> -->
    <i class="fas fa-phone"></i>
  </div>`;
  }

  a.innerHTML =
    `
                  <div class="product__container-img">
                    <img src="https://hanoicomputercdn.com/media/product/250_61222_mainboard_asus_rog_strix_z690_e_gaming_wifi_intel_z690_socket_1700_atx_4_khe_ram_ddr5_1.jpg" alt="">
                  </div>
                  <div class="product__container-content">` +
    s2 +
    `<div class="product__container-name">
                      <p>Mainboard ASUS TRX40-XE GAMING (AMD TRX40, Socket sTRX4, ATX, 8 khe RAM DDR4)</p>
                    </div>
                    <div class="product__container-price">
                      <span>${randomTest(1000000, 50000000)}đ</span>
                      <p>${randomTest(1000000, 50000000)}đ</p>
                    </div>` +
    s5 +
    `<span class="product__container-sale">-${randomTest(1, 100)}%</span>
    `;
  pciContaier.appendChild(a);
}

{
  /* <a class="product__container-item" href="#">
                  <div class="product__container-img">
                    <img src="https://hanoicomputercdn.com/media/product/250_61222_mainboard_asus_rog_strix_z690_e_gaming_wifi_intel_z690_socket_1700_atx_4_khe_ram_ddr5_1.jpg" alt="">
                  </div>
                  <div class="product__container-content">
                    <div class="product__container-rate">
                      <div class="product__container-star">
                        <i class="fas fa-star rated"></i>
                        <i class="fas fa-star rated"></i>
                        <i class="fas fa-star rated"></i>
                        <i class="fas fa-star rated"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <span>(5)</span>
                    </div>
                    <div class="product__container-name">
                      <p>Mainboard ASUS TRX40-XE GAMING (AMD TRX40, Socket sTRX4, ATX, 8 khe RAM DDR4)</p>
                    </div>
                    <div class="product__container-price">
                      <span>13.499.000đ</span>
                      <p>16.000.000đ</p>
                    </div>
                    <div class="product__container-stock" style="color : #499bd7">
                      <!-- #d74949 : còn hàng -->
                      <!-- #499bd7 : hết hàng -->
                      <!-- <span>Còn hàng</span> -->
                      <span>Hết hàng</span>

                      <!-- <i class="fas fa-cart-plus"></i> -->
                      <i class="fas fa-phone"></i>
                    </div>
                  </div>
                  <span class="product__container-sale">-50%</span>
                </a> */
}
