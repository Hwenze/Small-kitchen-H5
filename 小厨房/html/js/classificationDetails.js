$(function(){
	let top=new Vue({
        el:'#Top',
        methods:{
            jimp_html:function(message){
                location=message;
            },
        }
    })
    let main=new Vue({
        el:'#Main',
        data:{
            list:{},
         },
        methods:{
            jimp_html:function(message){
                location=message;
            },
            
        },
    })
    $.ajax({
                type:'get',
                url:'/api/getDetails',
                dataType:'json',
                success:function(json){
                    main.list = json.list;
                    console.log(main.list);
                }
    });



})
