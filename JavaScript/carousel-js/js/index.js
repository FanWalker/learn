	var wrap = document.getElementsByClassName("wrap")[0];
	var next = document.querySelector(".arrow_right");
	var prev = document.querySelector(".arrow_left");
	next.onclick = function() {
		next_pic();
	}
	prev.onclick = function(){
		prev_pic();
	}
	function next_pic() {
		index++;
        if(index > 3){
            index = 0;
        }
        showCurrentDot();
		var current = getComputedStyle(wrap,false)["left"],
			newLeft;
		if(current === "-2000px"){   //当left为-2000px时，当前显示的照片和第一张相同，
			newLeft = -800;			//设置下一张显示的为第二张，left值为-800
		}
		else{
			newLeft = parseInt(current)-400;
		}
		wrap.style.left = newLeft + "px";
		//console.log("当前left "+wrap.style.left);

	}
	function prev_pic(){
		index--;
        if(index < 0){
            index = 3;
        }
        showCurrentDot();
		var current = getComputedStyle(wrap,false)["left"],
			newLeft;
		if(current === "0px"){   //与next_pic同理
			newLeft = -1200;
		}
		else{
			newLeft = parseInt(current)+400;
		}
		wrap.style.left = newLeft + "px";
		//console.log("当前left "+wrap.style.left);
	}


	var timer = null;
	function autoPlay(){
		timer = setInterval(function(){
			next_pic()
		},2000)
	}
	autoPlay();
	var container = document.querySelector(".container");
	container.onmouseenter = function(){
		clearInterval(timer);
	}
	container.onmouseleave = function(){
		autoPlay();
	}

	var index = 0;
	var dots = document.getElementsByTagName("span");
	function showCurrentDot(){
		for(var i=0;i<dots.length;i++){
			dots[i].className = "";
		}
		dots[index].className = "on";
	}
	showCurrentDot();

	for(var i=0; i< dots.length; i++){
		(function(i){

			dots[i].onclick = function(){

				var gap = index - i;  //(3-1)=2
				var current = getComputedStyle(wrap,false)["left"],
					newLeft;
				var currentLeft = parseInt(current);
				//console.log(index+" "+currentLeft);
				if(index ==3 &&  currentLeft!==-1600){
					//console.log("chuxian1 "+currentLeft);
					gap = gap - 4;
				}
				if(index == 0 && currentLeft!==-400){
					//console.log("chuxian2 "+currentLeft);
					gap = 4 + gap;
				}
				wrap.style.left = (currentLeft + gap*400)+"px";
				index = i;   //设置当前点亮的小圆点为i
				showCurrentDot();
			}
		})(i)
	}