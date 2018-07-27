function $id(id){
	return document.getElementById(id);
}
function $get(ele ,tagName){
	if(typeof ele == "string" && $(ele)){
		return $(ele).getElementsByTagName(tagName);
	}else if(typeof ele == "object"){
		return ele.getElementsByTagName(tagName);
	}
}
//轮播图
class Slider{
	constructor(id){
		this.bigBox = $id(id);
		this.imgs = $get(this.bigBox,"img");
		this.olis = $get($id("circle"), "li");
		this.num = this.imgs.length;
		this.nowPic = 0;
		this.addEvent();
		this.slide();	
		this.timer = null;
		this.autoPlay();
	}
	addEvent(){
		//左按钮点击
		$id("ltBtn").onclick = () => {
			for(var i = 0; i < this.num; i++){
				this.imgs[i].style.display = "none";
				this.olis[i].style.background = "white";
			}		
			this.nowPic--;
			if(this.nowPic == -1){
				this.nowPic = this.num -1;
			}
			this.slide();
		}
		//右按钮点击
		$id("rtBtn").onclick = () => {
			this.nowPic++;
			if(this.nowPic == this.num){
				this.nowPic = 0;
			}
			this.slide();
		}
		//圆点点击
		for(var i = 0; i < this.num; i++){
			this.olis[i].onclick = () => {	
				this.nowPic++;
				if(this.nowPic == this.num){
					this.nowPic = 0;
				}
				this.slide();
			}
		}	
	}
	slide(){
		for(var i = 0; i < this.num; i++){
			this.imgs[i].style.display = "none";
			this.olis[i].style.background = "white";
		}
		this.imgs[this.nowPic].style.display = "block";
		this.olis[this.nowPic].style.background = "#ec3639";
	}
	autoPlay(){
		var that = this;
		this.timer = setInterval(function(){
			that.nowPic++;
			if(that.nowPic == that.num){
				that.nowPic = 0;
			}
			that.slide();
			
		},3000);	
		this.bigBox.onmouseover = function(){
			clearInterval(that.timer);
		}
		this.bigBox.onmouseout = function(){
			that.autoPlay();
		}
	}
}
function doubleNum(num){
	if(num<10){
		return "0" + num;
	}
	return num;
}
function timer(due){
	var data = new Date();
	var due = new Date(due);
	var timeLead = due.getTime() - data.getTime();
	var sec = doubleNum(parseInt(timeLead/1000)%60);	
	var min = doubleNum(parseInt(timeLead/1000/60)%60);		
	var hour = doubleNum(parseInt(timeLead/1000/3600)%24);
	var day = parseInt(timeLead/1000/3600/24);
	$(".pro_detail").each(function(){
		$(this).find("span:eq(3)").html(sec);
		$(this).find("span:eq(2)").html(min);
		$(this).find("span:eq(1)").html(hour);
		$(this).find("span:eq(0)").html(day);
	})
}