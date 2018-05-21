$(function(){
	let top=new Vue({
        el:'#Top',
        methods:{
            jimp_html:function(message){
                location=message;
            },
        }})
    let main=new Vue({
        el:'#Main',
        data:{
            datas:{},
            title:'', //食品名称
            imtro:'',  //介绍
            albums:'',  //标题图片
            ingredients:'',  // 主材料
            burden:'',  //配料
            steps:[],  //
        },

        mounted:function(){
            this.showData();
        },
        methods:{
            jimp_html:function(message){
                location=message;
            },
            showData:function(){
                let key ="af4b70630a8ade2bb9bda2af85f32988";
                let id='1001';
                let dtype ='';
                let me = this;
                 $.ajax({
                    url:'http://apis.juhe.cn/cook/queryid',
                    data:{
                        id:id,
                        dtype:dtype,
                        key:key
                    },
                    type:'post',        //类型
                    dataType:'jsonp', //跨域
                    success:function(data){
                        this.datas= data.result.data;
                        me.title = this.datas[0].title;
                        me.imtro = this.datas[0].imtro;
                        me.burden = this.datas[0].burden;
                        me.ingredients = this.datas[0].ingredients;
                        me.albums = this.datas[0].albums[0];
                        me.steps = this.datas[0].steps;
                    }
                })
            }
        }
    })
    let foot=new Vue({
        el:'#foot',
        methods:{
            jimp_html:function(message){
                location=message;
            },
        }})
})