const keys = Object.keys(localStorage)

for (let key of keys) {
    let item = JSON.parse(localStorage.getItem(key));
    createProductVoice(item);
}


function createProductVoice({name, price, quantity}){
    const container = document.createElement("div");
    container.classList.add("cart-item");

    const title = document.createElement("div");
    title.classList.add("product-title");
    title.innerText = name;

    const itemprice = document.createElement("div");
    itemprice.classList.add("product-price");
    itemprice.innerText = "$" + price;
    
    const itemquantity = document.createElement("div");
    itemquantity.classList.add("product-quantity");
    itemquantity.innerText = quantity;

    const total = document.createElement("div");
    total.classList.add("product-total");
    total.innerText = "$" + (quantity * price);

    const remove = document.createElement("div");
    remove.classList.add("product-remove");
    const removeimage = document.createElement("img");
    removeimage.src = "/media/icons/trashbin.svg";
    remove.appendChild(removeimage);

    container.appendChild(title);
    container.appendChild(itemprice);
    container.appendChild(itemquantity);
    container.appendChild(total);
    container.appendChild(remove);

    const body = document.querySelector(".cart-body");
    body.appendChild(container);
}