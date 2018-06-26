var $dim = null;
var $body = null;
var dim = {
    show : function(){
        $body.append('<div id="dim"></div>');
        $dim = $('#dim');
        $dim.show();
    },
    hide : function(){
        $dim.remove();
    }
}
$(function(){
    var dizia = {
        init : function(){
            var top = [];
            var article = $(".article");
            setTimeout(function(){
                article.each(function(){
                    var off =  $(this).offset().top;
                    top.push(off)   
                });
            },1000);
            dizia.scroll(top);
            dizia.click(top);
        },
        scroll : function(top){
            var _that = $(this);
            $(window).scroll(function(){
                var scrollTop = $(window).scrollTop();
                var header = $("header").outerHeight();
                for(var i=0;i<top.length;i++){
                    if(top[i] <= scrollTop + header ){
                        $(".article").removeClass("on");
                        $(".article").eq(i).addClass("on");
                        $(".gnb li a").removeClass("on");
                        $(".gnb li").eq(i).find("a").addClass("on");
                    }else{
                        $(".article").eq(i).removeClass("on");
                        $(".gnb li").eq(i).find("a").removeClass("on");
                    }
                }
            });
        },
        click : function(top){
            var _that = $(this);
            $(".gnb li a").on("click",function(){
                var scrollTop = $(window).scrollTop();
                var idx = $(this).parent().index();
                $(this).addClass("on");
                $("html,body").animate({
                    scrollTop : top[idx]
                },300);
            });
        }
    }
    if($(window).width() >= 1100){
        intro();
        dizia.init();
    }else{
        $(".intro").remove();
        dizia.init();
    }

    //포트폴리오 ajax
	$.get("/dizia/port.min.json", function(json){
		var list = json.list.all.reverse();	
		var _list = '';
		for(var i = 0; i<list.length; i++){
			_list += '<li><div class="list-wrap"><a href='+list[i].link+' target="_blank"><img src='+list[i].img+ '><div class="point"><p>click</p></div></a><p>'+list[i].title+'</p></div></li>';

		}
		$(".port-list").html(_list);
	},"json");
	
	$(".port-category li a").on("click",function(){
		var category = $(this).data("name"); 
		$.get("/dizia/port.min.json", function(json){
			var list = json.list[category].reverse();	
			var _list = '';
			for(var i = 0; i<list.length; i++){
				_list += '<li><div class="list-wrap"><a href='+list[i].link+' target="_blank"><img src='+list[i].img+ '><div class="point"><p>click</p></div></a><p>'+list[i].title+'</p></div></li>';
			}
			$(".port-list").html(_list);
		},"json");	
    });
    
    $body = $('body');
    $(".m-btn").on("click",function(){
        if($(this).hasClass("on")){
            $(".m-btn, section").removeClass("on");
            $(".header-inner ul").css("right","-50%");
            dim.hide();
        }else{
            $(".m-btn, section").addClass("on");
            $(".header-inner ul").css("right","0");
            dim.show();
        }
    });   

    $(window).resize(function(){
        dizia.init();   
    });
});




$.fn.addOn = function(options){
	$(this).on("click",function(){
		$(this).parent().parent().find("a").removeClass("on");
		$(this).addClass("on");
		return false;
	});
}

var intro = function(){
	var  _width = $(window).width(); 
	var top = $(".caTop");
	var bottom = $(".caBottom");
	var title = $(".title");
	var cir1 = $(".int-circle1");
	var cir2 = $(".int-circle2");
	var cir3 = $(".int-circle3");
	$(top).delay(1000).animate({
		top : "0"	
	},300);
	$(bottom).delay(1000).animate({
		bottom : "0"	
	},300,function(){
		$(title).css("display","block");	
	});
	$(title).delay(1400).animate({
		top : "50%", left : "50%", fontSize : "40px", marginLeft : "-166px"	, marginTop : "-30px"
	},300,"easeInQuint",function(){
		$(cir1).css("display","block");
		$(cir2).css("display","block");
		$(cir3).css("display","block");
	});
	$(cir1).delay(1600).animate({
		width : "200px",height : "200px", marginLeft : "-100px" , marginTop : "-100px",
		opacity : 0	
	},400);
	$(cir2).delay(1600).animate({
		width : "100px",height : "100px", marginLeft : "-50px" , marginTop : "-50px",
		opacity : 0	
	},800);
	$(cir3).delay(1600).animate({
		width : "250px",height : "250px", marginLeft : "-100px" , marginTop : "-100px",
		opacity : 0	
	},1000);
	$(title).delay(1700).animate({
		marginTop : "-100px"
	},500,function(){
		$(".name").css("display","block");	
	});
	$(".name").delay(3700).animate({
		left : "50%", marginLeft :"-160px"	
	},1000,"easeOutElastic",function(){
		$(".final,.final1,.final2,.final3").css("display","block");
	});
	$(".play").delay(4800).animate({
		zoom : 0.9	
	},300,function(){
		$(this).animate({
			zoom: 1.5
		},500);	
	});
	$(".final").delay(5000).animate({
		width : "1000px", height : "1000px"	, marginLeft : "-500px", marginTop : "-500px"
	},600,function(){
		$(".curtain1").css("display","block");	
	});
	$(".curtain1").delay(6500).animate({
		left : "-200%"	
	},800,function(){
		$(".curtain2").css("display","block");	
	});
	$(".curtain2").delay(7500).animate({
		left : "-50%"	
	},500,function(){
		$(".intro").remove();	
		$(".wrap").show();
	});			
}







	
	

			
		
		
		
	



