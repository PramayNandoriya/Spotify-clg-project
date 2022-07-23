var slideImg = document.getElementById("slideImg");

var images = new Array(

		"images/1.png",
		"images/2.jpg",
		"images/3.jpg",
		"images/5.jpg",
		"images/6.jpg",
		"images/7.jpg",
		"images/8.jpg",
		"images/9.jpg"

		);
		
var len = images.length;
var i = 0;

	function slider(){
	  if(i > len-1){
		i = 0;		
	}
	slideImg.src = images[i];
	i++;
	setTimeout('slider()',2000);
}