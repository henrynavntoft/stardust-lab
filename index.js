const url = `https://kea-alt-del.dk/t7/api/products?limit=6`;

fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

// Just checking
function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  //Selecting template and cloning
  const temp = document.querySelector("template").content;
  const clone = temp.cloneNode(true);
  // Change stuff
  clone.querySelector("p.bestsellers-product-price").textContent =
    product.productdisplayname;
  clone.querySelector("p.bestsellers-product-name").textContent =
    product.price + ",-";
  clone.querySelector(
    "img.bestsellers-product-image"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  //Selection where i want the clone
  const parent = document.querySelector(".bestsellers-grid");
  //Appending it
  parent.appendChild(clone);
}
