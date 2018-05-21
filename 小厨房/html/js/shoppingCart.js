$(function () {

    Vue.component('chec-multi',{
        props:['goods_cart'],
        data(){
            return {
                shujv:[
                    {
                        name : '味BACK',
                        checked : false,
                        list : this.goods_cart,
                            // {pic:'images/img34316092acdef8.png',buer2:false, text:'滴答滴|台湾进口樱桃爷爷原味南枣核桃糕250g', title:'核桃糕1盒', price:'21.9',num:1},
                            // {pic:'images/img34616092b2d650.png',buer2:false, text:'【外婆润喉糖】味BACK|潮汕手工润喉糖', title:'润喉糖1盒', price:'21.9',num:1},
                            // {pic:'images/img34416092b01f00.png',buer2:false, text:'【圣诞特惠】味BACK|新疆树干杏干', title:'杏干1盒', price:'21.9',num:1},

                    },
                    // {
                    //     name : '味BACK',
                    //     checked : false,
                    //     // list : [
                    //     //     {pic:'images/img34316092acdef8.png',buer2:false, text:'滴答滴|台湾进口樱桃爷爷原味南枣核桃糕250g', title:'核桃糕1盒', price:'21.9',num:1},
                    //     //     {pic:'images/img34616092b2d650.png',buer2:false, text:'【外婆润喉糖】味BACK|潮汕手工润喉糖', title:'润喉糖1盒', price:'21.9',num:1},
                    //     //     {pic:'images/img34416092b01f00.png',buer2:false, text:'【圣诞特惠】味BACK|新疆树干杏干', title:'杏干1盒', price:'21.9',num:1},
                    //     // ],
                    // }

                ],
                class:['checkbox_nex'],
            }
        },
        template:`
        <div>
            <div class="main_once" v-for="(x,index) in shujv" >
                 <div class="whole">
                    <div :class="{ checkbox_nex: true, 'activeback': x.checked }" @click="business(index)"></div>
                    <div class="main_text">味BACK</div>
                 </div>
                 <div class="main_listBox" v-for="(y,index1) in x.list">
                      <div class="left_selet">
                            <div  :class="{checkbox_nex: true,'activeback':y.buer2}" @click="checkChang(index1,index)" ></div>
                      </div>
                      <div class="cen_pic">
                            <img :src="y.com_img" alt="">
                      </div>
                      <div class="righ_cen">
                            <p class="jieshao">{{y.com_name}}</p>
                            <p class="main_text_right_min">核桃糕1盒</p>
                            <p class="price_num">
                                  <span class="price">￥{{y.com_price}}</span>
                                  <input type="number" :value="y.com_number" min="0">
                            <!--num为数量-->
                            </p>
                      </div>
                 </div>
            </div>
            
        </div>
        `,

        methods:{
                getGoodsList:function() {
            // console.log(./api/getGoodsList)
                $.ajax({
                    url:'./api/getGoodsList',
                    type:'get',
                    dataType:'json',
                    success:function (json) {
                        for(let i=0;i<json.list.length;i++){
                            this.goods_cart.push(json.list[i]);
                        }
                        // console.log('goods:',app.goods);
                    }
                });
            },
            checkChang:function (index1,index) {
                this.shujv[index].list[index1].buer2=!this.shujv[index].list[index1].buer2;
                let len=this.shujv[index].list;
                let flag = true;
                //判断是否全选商品
                for (let i = 0; i < len.length; i++ ) {
                    if ( len[i]['buer2'] == false ) {
                        flag = false;
                    }
                }
                flag == true ? this.shujv[index]['checked'] = true : this.shujv[index]['checked'] = false;

                this.cal(index);
            },
            //根据商家全选该商家的物品
            business:function (index) {
                // let xia=true;
                // if()
                this.shujv[index].checked = !this.shujv[index].checked;
                let list=this.shujv[index]['list'];
                if(this.shujv[index].checked==true){
                    for(let i=0;i<list.length;i++){
                        list[i]['buer2']=true;
                    }
                }else {
                    for(let i=0;i<list.length;i++){
                        list[i]['buer2']=false;
                    }
                }
                let len=this.shujv[index].list;
                let flag = true;
                //判断是否全选商品
                for (let i = 0; i < len.length; i++ ) {
                    if ( len[i]['buer2'] == false ) {
                        flag = false;
                    }
                }
                console.log(index);
                flag == true ? this.shujv[index]['checked'] = true : this.shujv[index]['checked'] = false;

                this.cal(index);
            },
            // 计算每个店铺的商品总额
            calEveryStore:function (index) {
                let everyStoreMoney=0,
                    list = this.shujv[index]['list'];
                list.forEach(function(item, index, arr) {
                    //如果list对应的下标的buer2存在，
                    // console.log(list[index]['buer2'])
                    if ( list[index]['buer2'] ) {
                        //parseFloat(item.price)商品价格*parseFloat(item.num)商品数量
                        everyStoreMoney += parseFloat(item.com_price) * parseFloat(item.com_number);
                    }
                });
                //放回出结果
                return (Math.floor(everyStoreMoney*100)/100).toFixed();
            },
            // 计算每个店铺的运费总额
            calEveryFare:function (index) {

            },
            // 计算商品总金额
            calTotalMoney:function () {
                let oThis = this;
                let allMoey;
                this.totalMoney = 0;
                for ( let i = 0, len = this.shujv.length; i < len; i++ ) {
                    let list = this.shujv[i]['list'];

                    list.forEach(function(item, index, arr) {
                        // console.log(list[index]['buer2'])
                        if ( list[index]['buer2'] ) {
                            oThis.totalMoney+= parseFloat(item.com_price) * parseFloat(item.com_number);
                           allMoey=Math.floor(oThis.totalMoney*100)/100;

                        }
                        // console.log( oThis.totalMoney);
                    });
                }
                enent.$emit('totalMoney',allMoey);
            },
            // 计算商品总运费
            calTotalFare:function () {

            },
            // 计算方法集合
            cal : function(index) {
                this.calEveryStore(index);
                this.calEveryFare(index);
                this.calTotalMoney();
                this.calTotalFare();
            },
        },
        mounted:function(){
            let that = this;
            enent.$on('aaa',function(data){
                let busine=that.shujv;
                if(data==true){
                    for(let j=0;j<busine.length;j++){
                        busine[j]['checked']=true;
                        let qq=busine[j];
                        for(let i=0;i<qq.list.length;i++){
                            qq.list[i].buer2=true;
                        }
                        that.calTotalMoney();
                    }
                }else{
                    for(let j=0;j<busine.length;j++){
                        busine[j]['checked']=false;
                        let qq=busine[j];
                        for(let i=0;i<qq.list.length;i++){
                            qq.list[i].buer2=false;
                        }
                        that.calTotalMoney()
                    }
                }

            });
        }
    });
    //enent是一个中间键
    let enent = new Vue();
    let app=new Vue({
        el:'#myApp',
        data:{
            goods_cart:[],
            buer:false,
            buer1:false,
            class:['checkbox_nex'],
            total:'0',
        },
        methods:{
            quanxuan:function () {
                this.buer1 = !this.buer1;
                enent.$emit('aaa',this.buer1);
            },
        },
        mounted:function () {
            let that = this;
            enent.$on('totalMoney', function (data) {
                // console.log(data);
                // console.log(data)
                if(data!=undefined){
                    that.total=data;
                }else {
                    that.total= '0';
                }

            })
        }
    });

    // function getGoodsList() {
    //     // console.log(./api/getGoodsList)
    //     $.ajax({
    //         url:'./api/getGoodsList',
    //         type:'get',
    //         dataType:'json',
    //         success:function (json) {
    //             for(let i=0;i<json.list.length;i++){
    //                 goods.goods_cart.push(json.list[i]);
    //             }
    //             // console.log('goods:',app.goods);
    //         }
    //     });
    // }
    // getGoodsList();

    $.ajax({
        url:'./api/getShoppingCartList',
        type:'get',
        dataType:'json',
        success:function (json) {
            console.log(json);
            for(let i=0;i<json.list.length;i++){
                app.goods_cart.push(json.list[i]);
            }
            console.log('goods',app.goods_cart);
        }
    });
});