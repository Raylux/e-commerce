let total = 0;

const keys = Object.keys(localStorage)
for (let key of keys) {
    if(key == 'debug') continue;
    let item = JSON.parse(localStorage.getItem(key));
    total = total + (item.price * item.quantity);
    createProductVoice(item);    
}

const totalprice = document.querySelector(".totalprice");
    totalprice.innerText = "$" + total;

function createProductVoice({name, price, quantity}){
    const container = document.createElement("div");
    container.classList.add("cart-item");

    const title = document.createElement("div");
    title.classList.add("product-title");
    title.innerText = name;

    const remove = document.createElement("div");
    remove.classList.add("product-remove");
    const removeimage = document.createElement("img");
    removeimage.src = "media/icons/trashbin.svg";
    remove.appendChild(removeimage);

    const itemprice = document.createElement("div");
    itemprice.classList.add("product-price");
    itemprice.innerText = "$" + price;
    const itemquantity = document.createElement('div');
    itemquantity.classList.add("product-quantity");

    const inputform = document.createElement("input");
    inputform.type = "number";
    inputform.min = "0";
    inputform.setAttribute("value", `${quantity}`);
    inputform.classList.add("quantity-form");

    itemquantity.appendChild(inputform);

    const total = document.createElement("div");
    total.classList.add("product-total");
    total.innerText = "$" + (quantity * price);

    container.appendChild(title);
    container.appendChild(remove);
    container.appendChild(itemprice);
    container.appendChild(itemquantity);
    container.appendChild(total);


    const body = document.querySelector(".cart-body");
    const totalpricebox = document.querySelector(".totalprice-box")
    body.insertBefore(container, totalpricebox);
}

function updateCart(){
    let itemsPrices = document.querySelectorAll(".product-price");
    let quantities = document.querySelectorAll(".quantity-form");

    // for(let i = 0; i < newQuantities.length; i++){
    //     if(quantities[])
    // }

}