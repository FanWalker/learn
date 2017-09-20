# demo

## 一、H5+JS+CSS3 实现圣诞情缘

效果展示：http://fanwalker.com/ChristmasGift/index.html

源码地址：[https://github.com/FanWalker/ChristmasGift](https://github.com/FanWalker/ChristmasGift)

## 二、css3实现旋转木马

效果展示：[demo](http://fanwalker.com/learn/merry-go-round/carousel.html)

**html结构**

舞台 stage

 -容器 container
  
   ---图片 img
    
   ---图片 img

       
       
**css布局**

舞台：加个视距，perspective: 800px;

容器：

设置3D视图说明：transform-style: preserve-3d;
  
加上绝对定位：position: absolute;
  
设置过度属性：transition: transform 1s; 让图片能够平滑的进行3D转换
  
图片：

设置绝对定位：position: absolute;使图片公用同一个中心点
  
图片正好绕成一个圈，因此，图片rotateY值正好0~360等分，于是，如果有9张图片，则每个图片的旋转角度累加40(360 / 9 = 40)度即可
  
  ```
  img:nth-child(1) { transform: rotateY(   0deg ); }
  img:nth-child(2) { transform: rotateY(  40deg ); }
  img:nth-child(3) { transform: rotateY(  80deg ); }
  img:nth-child(4) { transform: rotateY( 120deg ); }
  img:nth-child(5) { transform: rotateY( 160deg ); }
  img:nth-child(6) { transform: rotateY( 200deg ); }
  img:nth-child(7) { transform: rotateY( 240deg ); }
  img:nth-child(8) { transform: rotateY( 280deg ); }
  img:nth-child(9) { transform: rotateY( 320deg ); }
  ```
  然后是让图片拉开空间，设置translateZ的值，详细教程：[好吧，CSS3 3D transform变换，不过如此！](http://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/)
  
  
  **最后js实现鼠标点击container图片转换：**
  

	var container = document.getElementById("container");
	var index = 0;
	container.addEventListener("click",function(){
		this.style.transform = "rotateY(" +-40*++index+"deg)";
	})

