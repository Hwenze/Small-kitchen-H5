$(function(){

	let top=new Vue({
        el:'#Top',
		data:{
        	show:false
		},
        methods:{
            jimp_html:function(message){
                location=message;
            },
            tiao:function(message){

                location=message;
            },

        },
    })


});
