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

    // const remove = document.createElement("div");
    // remove.classList.add("product-remove");
    // const removeimage = document.createElement("img");
    // removeimage.src = "media/icons/trashbin.svg";
    // removeimage.classList.add("remove-icon");
    // remove.appendChild(removeimage);

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
    // container.appendChild(remove);
    container.appendChild(itemprice);
    container.appendChild(itemquantity);
    container.appendChild(total);


    const body = document.querySelector(".cart-body");
    const totalpricebox = document.querySelector(".totalprice-box")
    body.insertBefore(container, totalpricebox);
}



function updateCart(){
    let newTotalPrice = 0;
    const cartitems = document.querySelectorAll(".cart-item");
    const quantities = document.querySelectorAll(".quantity-form");

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if(key == 'debug') continue;
        let item = JSON.parse(localStorage.getItem(key));
        if(quantities[i] == undefined) continue;

        if(quantities[i].value == 0){
            cartitems[i].remove();
            localStorage.removeItem(key);
            continue;
        }

        //update localstorage values
        item.quantity = quantities[i].value;
        newTotalPrice += item.quantity * item.price;
        localStorage.setItem(key, JSON.stringify(item));

        //update dom nodes
        cartitems[i].childNodes[2].setAttribute("value", `${quantities[i].value}`);
        cartitems[i].lastChild.innerText = `\$${quantities[i].value * item.price}`;
    }

    totalprice.innerText = "$" + newTotalPrice;

}

function toHomePage(){
    location.assign("index.html");
}

function sendOrder(){
    let mailbody = "";
    for(let key of keys) {
        if(key == 'debug') continue;
        mailbody = mailbody + `${localStorage.getItem(key)}`;
    }
    location.href = `mailto:prova@gmail.com?body= ${mailbody}`;
}

// const removeButtonList = document.querySelectorAll(".remove-icon");
// for(let i = 0; i < removeButtonList.length; i++){
//     removeButtonList[i].addEventListener("click", removeButton);
// }

// function removeButton(){
//     console.log("prova");
// }