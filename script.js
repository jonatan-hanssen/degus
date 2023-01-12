var price = 0.0000512;
var pricecounter = document.getElementById("price");
pricecounter.innerText = "" + price.toFixed(9) + " USD";

function calculatePrice() {
    price += 0.0000001*(Math.random() - 0.6);
    pricecounter.innerText = "" + price.toFixed(9) + " USD";
}

var cancel = setInterval(calculatePrice, 1500);
