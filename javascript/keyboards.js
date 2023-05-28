let httpRequest = new XMLHttpRequest();
let url = "products.json";

httpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var products = JSON.parse(this.responseText);
        products.forEach(element => {
            if(element.type == 'keyboard') creaSchedaProdotto(element);
        });
    }
};
httpRequest.open("GET", url, true);
httpRequest.send();

function creaSchedaProdotto({name, price, type, image, page}){
    const container = document.querySelector(".main");
    
    const a = document.createElement("a");
    a.classList.add("product")
    a.href = page;

    const img = document.createElement("img");
    img.src = image;

    const div = document.createElement("div");
    div.classList.add("product-info");

    const nome = document.createElement("p");
    nome.classList.add("description");
    nome.innerText = name;

    const prezzo = document.createElement("p");
    prezzo.classList.add("price");
    prezzo.innerText = price + "$";

    div.appendChild(nome);
    div.appendChild(prezzo);
    a.appendChild(img);
    a.appendChild(div);
    container.appendChild(a);
}