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
        
        case "nixie":
            if(localStorage.getItem("!!") == null){
                let nixie = {
                    name: "Cherry MX Nixie",
                    price: 0.75,
                    quantity: quantity
                }
                localStorage.setItem("nixie", JSON.stringify(nixie));
            } else {
                let newQuantity = JSON.parse(localStorage.getItem("nixie"));
                newQuantity.quantity = Number(newQuantity.quantity) + quantity;
                localStorage.setItem("nixie", JSON.stringify(newQuantity));
            }
            break;
        
        case "fright":
            if(localStorage.getItem("fright") == null){
                let frightclub = {
                    name: "Fright Club Deskmat",
                    price: 35,
                    quantity: quantity
                }
                localStorage.setItem("fright", JSON.stringify(frightclub));
            } else {
                let newQuantity = JSON.parse(localStorage.getItem("fright"));
                newQuantity.quantity = Number(newQuantity.quantity) + quantity;
                localStorage.setItem("fright", JSON.stringify(newQuantity));
            }
            break;

        case "spellbook":
            if(localStorage.getItem("spellbook") == null){
                let spellbook = {
                    name: "Spellbook Beige Deskmat",
                    price: 25,
                    quantity: quantity
                }
                localStorage.setItem("spellbook", JSON.stringify(spellbook));
            } else {
                let newQuantity = JSON.parse(localStorage.getItem("spellbook"));
                newQuantity.quantity = Number(newQuantity.quantity) + quantity;
                localStorage.setItem("spellbook", JSON.stringify(newQuantity));
            }
            break;

        case "zhuyin":
        if(localStorage.getItem("zhuyin") == null){
            let zhuyin = {
                name: "GMK Retro Zhuyin",
                price: 150,
                quantity: quantity
            }
            localStorage.setItem("zhuyin", JSON.stringify(zhuyin));
        } else {
            let newQuantity = JSON.parse(localStorage.getItem("zhuyin"));
            newQuantity.quantity = Number(newQuantity.quantity) + quantity;
            localStorage.setItem("zhuyin", JSON.stringify(newQuantity));
        }
        break;

        case "glacier":
        if(localStorage.getItem("glacier") == null){
            let glacier = {
                name: "Key Kobo Glacier",
                price: 200,
                quantity: quantity
            }
            localStorage.setItem("glacier", JSON.stringify(glacier));
        } else {
            let newQuantity = JSON.parse(localStorage.getItem("glacier"));
            newQuantity.quantity = Number(newQuantity.quantity) + quantity;
            localStorage.setItem("glacier", JSON.stringify(newQuantity));
        }
        break;

        case "voc":
        if(localStorage.getItem("voc") == null){
            let voc = {
                name: "Key Kobo VOC",
                price: 200,
                quantity: quantity
            }
            localStorage.setItem("voc", JSON.stringify(voc));
        } else {
            let newQuantity = JSON.parse(localStorage.getItem("voc"));
            newQuantity.quantity = Number(newQuantity.quantity) + quantity;
            localStorage.setItem("voc", JSON.stringify(newQuantity));
        }
        break;

        default:
            console.log("Something Went Wrong!");
    }
}