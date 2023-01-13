var orignalPrice = 0.0000512;
var price = 0.0000512;

var increase = 0;

var pricecounter = document.getElementById("price");
pricecounter.innerText = "" + price.toFixed(9) + " USD (0.000%)";

function calculatePrice() {
    price += 0.0000001*(Math.random() - 0.6);
	increase = 100*price/orignalPrice - 100
    pricecounter.innerText = "" + price.toFixed(9) + " USD (" + increase.toFixed(3) + "%)";
}

var cancel = setInterval(calculatePrice, 1500);
