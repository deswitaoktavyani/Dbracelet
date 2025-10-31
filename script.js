function viewProduct(id) {
  window.location.href = `detail.html?id=${id}`;
}

function changeImage(el) {
  document.getElementById('mainImage').src = el.src;
}

function addToCart() {
  alert("Product added to your cart 🛒");
}

function checkout() {
  window.location.href = "checkout.html";
}

// --- DETAIL PAGE LOADER ---
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  const products = {
    product1: {
      title: "Royal Gold Bracelet ✨",
      price: "Rp 599.000",
      desc: "A masterpiece bracelet crafted with gold tones and royal elegance — perfect for every occasion.",
      folder: "assets/product1/"
    },
    product2: {
      title: "Blue Sapphire Charm 💙",
      price: "Rp 749.000",
      desc: "Elegant charm bracelet with sapphire tones symbolizing calmness and sophistication.",
      folder: "assets/product2/"
    },
    product3: {
      title: "White Pearl Elegance 🤍",
      price: "Rp 899.000",
      desc: "Classic pearl bracelet with a touch of luxury — a timeless statement for your style.",
      folder: "assets/product3/"
    }
  };

  if (productId && products[productId]) {
    const product = products[productId];
    document.getElementById("mainImage").src = `${product.folder}main.jpg`;
    document.getElementById("productTitle").textContent = product.title;
    document.getElementById("productPrice").textContent = product.price;
    document.getElementById("productDesc").textContent = product.desc;

    const thumbnailRow = document.getElementById("thumbnailRow");
    for (let i = 1; i <= 5; i++) {
      const img = document.createElement("img");
      img.src = `${product.folder}${i}.jpg`;
      img.onclick = () => changeImage(img);
      thumbnailRow.appendChild(img);
    }
  }
});
