$(function(){
    let app=new Vue({
        el:'#myApp',
        data:{
            // state:false,
            // status:'其他2款',
            // wholeMoney:0,
            goods:[
                // {
                //     goods_name:'猪肋排/500g',
                //     goods_describe:'密云农家|猪肋排机会获得科技就是你的发几个',
                //     goods_price:58,
                //     state:false,
                //     status:'其他2款',
                // },
                // {
                //     goods_name:'猪肋排/500g',
                //     goods_describe:'密云农家|猪肋排机会获得科技就是你的发几个',
                //     goods_price:68,
                //     state:false,
                //     status:'其他2款',
                // }
            ],
            goods_cart:[
                // {
                //     goods_name:'猪肋排/500g',
                //     goods_describe:'密云农家|猪肋排机会获得科技就是你的发几个',
                //     goods_price:68,
                //     state:false,
                //     status:'其他2款',
                // }
                // {
                //     com_name:'密云农家|猪肋排机会获得科技就是你的发几个',
                //     com_price:68,
                //     com_number:1,
                // },
            ],
            goodsData:{},
            // goods_cartNumber:[],
        },
        methods:{
            // get:function() {
            //     //发送get请求
            //     this.$http.get('../../api.js').then(function (res) {
            //         alert(res.body);
            //     }, function () {
            //         console.log('请求失败处理');
            //     });
            // },
            //箭头函数的 this 始终指向函数定义时的 this，而非执行时。
            getGoodsList:function () {
                let _this=this;
                $.ajax({
                    type:'get',
                    url:'/api/getGoodsList',
                    dataType:'json',
                    success:function (json) {
                        for(let i=0;i<json.list.length;i++){
                            _this.goods.push(json.list[i]);
                        }
                        // console.log('goods:',_this.goods);
                    }
                });
                return false;
            },
            fun:function (index) {
                this.goods[index].state=!this.goods[index].state;
                if(this.goods[index].state){
                    this.goods[index].status='收起'
                }else{
                    this.goods[index].status='其他2款';
                }
            },
            // 减s
            delgoods_cart:function (index) {
                console.log(index);
                let delgoods={};
                console.log( this.goods_cart.length);
                 if(this.goods_cart.length==0){
                    // this.goods[index].com_number=1;
                    for(x in this.goods){
                        delgoods=this.goods[index];
                    }
                }else{
                    for(let i=0;i<this.goods_cart.length;i++){
                        if(this.goods_cart[i].id!==this.goods[index].id){
                            // this.goods[index].com_number=1;
                            for(x in this.goods){
                                delgoods=this.goods[index];
                            }
                        }else{
                            this.goods_cart[i].com_number--;
                            return;
                        }
                    }
                }
                 this.goods_cart.push(delgoods);
            },
            addgoods_cart:function (index) {
                // console.log(index)
                let addgoods={};
                console.log(this.goods[index])
                if(this.goods_cart.length==0){
                    // this.goods[index].com_number=1;
                    for(x in this.goods){
                        addgoods=this.goods[index];
                    }
                }else{
                    for(let i=0;i<this.goods_cart.length;i++){
                        if(this.goods_cart[i].id!==this.goods[index].id){
                            // this.goods[index].com_number=1;
                            for(x in this.goods){
                                addgoods=this.goods[index];
                            }
                        }else{
                            this.goods_cart[i].com_number++;
                            return;
                        }
                    }
                }
                this.goods_cart.push(addgoods);
            },
            

            balance:function(){
                let that = this;
                // let goods_cart_data=[];
                // console.log(that.goods_cart[0].com_number);
                console.log('111',that.goods_cart);
                let goods_cart_data = JSON.stringify(that.goods_cart);        //将buf转换为json格式数据
                // goods_cart_data = JSON.parse(json);       //将json转化为array数组
                // goods_cart_data=JSON.stringify(that.goods_cart);
                $.ajax({
                    url:'/api/postCart',
                    type:'post',
                    data:goods_cart_data,
                    dataType:'json',
                    success:function(json){
                        // if(){}
                        console.log('json:',json);
                    },
                });
                return false;
            },
        },
        computed:{
            wholeMoney:function () {
                let money=0;
                let oneMoney=0;
                if(this.goods_cart.length==1){
                    console.log('333',this.goods_cart[0].com_number);
                    money=Math.round(this.goods_cart[0].com_price * this.goods_cart[0].com_number*10)/10;
                }else{
                    for(let i=0;i<this.goods_cart.length;i++) {
                        oneMoney = Math.round(this.goods_cart[i].com_price * this.goods_cart[i].com_number*10)/10;
                        money += oneMoney;
                    }
                }
                return money;
            },
        }
    });
    function getGoodsList() {
         // console.log(./api/getGoodsList)
        $.ajax({
            url:'./api/getGoodsList',
            type:'get',

            
            dataType:'json',
            success:function (json) {
                for(let i=0;i<json.list.length;i++){
                    app.goods.push(json.list[i]);
                }
                // console.log('goods:',app.goods);
            }
        });
    }
    getGoodsList();
});