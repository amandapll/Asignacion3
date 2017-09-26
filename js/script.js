
window.onload = choosePic;

var myPix = new Array("images/razon2.png","images/razon3.png","images/razon4.png","images/razon5.png");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("razon1").src = myPix[randomNum];
}