
var currentDate = new Date();
var expiryDate = new Date("09/24/2022 11:36:00 AM");

if(currentDate>=expiryDate){
   	var opacity=0;
	var intervalID=0;
	window.onload=fadeout;
		function fadeout(){
			setInterval(hide, 50);
		}
	function hide(){
		var body=document.getElementById("body");
		opacity =
Number(window.getComputedStyle(body).getPropertyValue("opacity"))

			if(opacity>0){
				opacity=opacity-0.1;
						body.style.opacity=opacity
			}
			else{
				clearInterval(intervalID);
			}
		}
        console.log('Time Out, Contact Developer @ olalavictor01@gmail.com');
}else{

console.log(expiryDate);
}
