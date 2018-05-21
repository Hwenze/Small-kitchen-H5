$(function () {
    let foot=new Vue({
        el:'#foot',
        methods:{
            add:function (msg) {
                location=msg;
            }
        }
    })
    let top=new Vue({
        el:'#Top',
        methods:{
            jimp_html:function(message){
                location=message;
            },
        }
    })
});