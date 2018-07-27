//登录注册


//二级菜单移入移出
$(function(){
	$("#banner_main ul>li").each(function(){
		$(this).hover(function(){
			$(this).css("background","#fff");
			$(this).find("a").css("color","#4b4948");
			$(this).find("a").hover(function(){
				$(this).css("color","#ec3639");
			},function(){
				$(this).css("color","#4b4948");
			})
			$(".subMenu").show();
			var list = this.className;			
			$(".subMenu").find("."+list).css("display","block");
			$(this).find(".icon-1").css("background-position","-37px 0px");
			$(this).find(".icon-2").css("background-position","-30px -21px");			
			$(this).find(".icon-3").css("background-position","-31px -133px");
			$(this).find(".icon-4").css("background-position","-30px -40px");
			$(this).find(".icon-5").css("background-position","-35px -62px");
			$(this).find(".icon-6").css("background-position","-31px -91px");
		},function(){
			$(this).css("background","#454545");
			$(".subMenu").hide();
			$(this).find("a").css("color","#fff");
			$(this).find(".icon-1").css("background-position","0 0px");
			$(this).find(".icon-2").css("background-position","0 -21px");			
			$(this).find(".icon-3").css("background-position","0 -133px");
			$(this).find(".icon-4").css("background-position","0 -40px");
			$(this).find(".icon-5").css("background-position","0 -62px");
			$(this).find(".icon-6").css("background-position","0 -91px");
			var list = this.className;			
			$(".subMenu").find("."+list).css("display","none");
		})
	})
})
//划过按钮
$(function(){
	$("#banner_main #ltBtn").hover(function(){
		$(this).css({"background-color":"#000",opacity:0.5})
	},function(){
		$(this).css({"background-color":"",opacity:1})
	})
})
$(function(){
	$("#banner_main #rtBtn").hover(function(){
		$(this).css({"background-color":"#000",opacity:0.5})
	},function(){
		$(this).css({"background-color":"",opacity:1})
	})
})
//计时器
timer("2018/08/08");
$(function(){
	setInterval(function(){
		timer("2018/08/08");
	},1000)
})