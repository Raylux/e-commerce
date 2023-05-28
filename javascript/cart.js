

function addToCart(product){
    const quantity = Number(document.getElementById('quantity').value);

    switch(product){
        case "olivia":
            if(localStorage.getItem("olivia") == null){
                let gmkolivia = {
                    name: "GMK Olivia",
                    price: 130,
                    quantity: quantity
                }
                localStorage.setItem("olivia", JSON.stringify(gmkolivia));
            } else {
                let newQuantity = JSON.parse(localStorage.getItem("olivia"));
                newQuantity.quantity = Number(newQuantity.quantity) + quantity;
                localStorage.setItem("olivia", JSON.stringify(newQuantity));
            }
            break;

        case "oilking":
            if(localStorage.getItem("oilking") == null){
                let oilking = {
                    name: "Gateron Oil King",
                    price: 0.65,
                    quantity: quantity
                }
                localStorage.setItem("oilking", JSON.stringify(oilking));
            } else {
                let newQuantity = JSON.parse(localStorage.getItem("oilking"));
                newQuantity.quantity = Number(newQuantity.quantity) + quantity;
                localStorage.setItem("oilking", JSON.stringify(newQuantity));
            }
            break;
    }
}