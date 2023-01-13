var pricecounter = document.getElementById("price");

function calculatePrice() {
	var today = new Date();
	var x = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
	var price = 1 - 0.01 * Math.sin(0.01*x) - 0.00001*x + 0.001*Math.sin(x);
	price *= 5;
	var increase = 100*price/5 - 100
    pricecounter.innerText = "" + (price/100000).toFixed(9) + " USD (" + increase.toFixed(3) + "%)";
}

var cancel = setInterval(calculatePrice, 1000);
calculatePrice();
