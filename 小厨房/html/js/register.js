$(function(){
	//设置登录页面的大小，适配所有手机端
    let wid = $(window).width();
    let hei = $(window).height();
    $('#registerbg').css({width:wid,height:hei});

    $('#username').blur(function(){
    	let name = $('#username').val();
    	let ret = /^[a-z0-9_-]{3,16}$/;
    	let wenzi = /^[\u2E80-\u9FFF]{3,}$/
    	if(ret.test(name) || wenzi.test(name)){
    		$('.proname').html('<img src="./images/register/dui.png">');
    		$('.proname img').css({width: '2rem'});
    	}else{
    		$('.proname').html('<img src="./images/register/cuo.png">');
    		$('.proname img').css({width: '2rem'});
    	}
    });
    $('#fistpow').blur(function(){
    	let fistpow = $('#fistpow').val();
    	let ret = /^[a-z0-9_-]{6,18}$/;
        if(fistpow == ''){
            $('.propow').html('<img src="./images/register/cuo.png">');
            $('.propow img').css({width: '2rem'});
        }else{
            if(ret.test(fistpow)){
                $('.propow').html('<img src="./images/register/dui.png">');
                $('.propow img').css({width: '2rem'});
            }else{
                $('.propow').html('<img src="./images/register/cuo.png">');
                $('.propow img').css({width: '2rem'});
            }
        }
    });
    $('#nextpow').blur(function(){
    	let fistpow = $('#fistpow').val();
    	let nextpow = $('#nextpow').val();
        if(nextpow == ''){
            $('.propow2').html('<img src="./images/register/cuo.png">');
            $('.propow2 img').css({width: '2rem'});
        }else{
            if(nextpow == fistpow){
                $('.propow2').html('<img src="./images/register/dui.png">');
                $('.propow2 img').css({width: '2rem'});
            }else{
                $('.propow2').html('<img src="./images/register/cuo.png">');
                $('.propow2 img').css({width: '2rem'});
            }
        }
    });
    $('#pho').blur(function(){
    	let pho = $('#pho').val();
    	let ret=/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
    	if(ret.test(pho)){
    		$('.protel').html('<img src="./images/register/dui.png">');
    		$('.protel img').css({width: '2rem'});
    	}else{
    		$('.protel').html('<img src="./images/register/cuo.png">');
    		$('.protel img').css({width: '2rem'});
    	}
    });
    $('#email').blur(function(){
    	let email = $('#email').val();
    	let ret=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    	if(ret.test(email)){
    		$('.proema').html('<img src="./images/register/dui.png">');
    		$('.proema img').css({width: '2rem'});
    	}else{
    		$('.proema').html('<img src="./images/register/cuo.png">');
    		$('.proema img').css({width: '2rem'});
    	}
    });
});
// 修改手机端的click
(function(){
    var defaults={
        start:function(self,event){},
        move:function(self,event){},
        end:function(self,event){}
    }
    $.fn.touchClick=function(opts){
        if(typeof opts=="function"){
            opts=$.extend({}, defaults,{end:opts});
        }else{
            opts=$.extend({}, defaults,opts);
        }
        this.each(function(){
            var obj=$(this);
            obj.on("touchstart",function(event){
                obj.data("move",false);
                opts.start.call(this,event);
            }).on("touchmove",function(event){
                obj.data("move",true);
                opts.move.call(this,event);
            }).on("touchend",function(event){
                if(obj.data("move")){
                    return;
                }else{
                    opts.end.call(this,event);
                }
                obj.data("move",false);
            });
        });
    };
})(jQuery);