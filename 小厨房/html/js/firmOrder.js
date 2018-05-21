$(function () {
    Vue.component('box',{
        // props:['goods_cart'],
        template:`<div class="box">
        <div class="title">
            <div class="title_icon">
                <img src="images/cha.png" alt="">
            </div>
            <div class="title_text">输入支付密码</div>
        </div>
        <div class="title_info">付款金额<span>1</span>元</div>
        <div class="firm_input">
            <input type="password" id="padInput" maxlength="6" min="0" max="9">
        </div>
        <div class="forget_paw">忘记密码？</div>
        <div class="box_btn">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div class="btnBj"></div>
            <div>0</div>
            <div class="btnBj">
                <img src="images/shanchu.png" alt="">
            </div>
        </div>
    </div>`,
        // method:{
        //     Close:function () {
        //         this.show=false;
        //     }
        // }
    });

    let app=new Vue({
        el:'#myApp',
        data:{
            show:false,
            goods_cart:[],
        },
        method:{
            close:function () {
                this.show=false;
            }
        },
        computed:{
            all_price:function(){
                let count=0;
                let allMoney=0;
                for (let i=0;i<this.goods_cart.length;i++){
                    allMoney+=this.goods_cart[i].com_number*this.goods_cart[i].com_price;
                }
                return allMoney;
            }
        }
    });

    let t=0;
    let ss='';
    $('.box_btn div').on('click',function () {
        t++;
        let btnVal=$(this).text();
        // console.log(btnVal);
        ss+=btnVal;
        // console.log(ss);
        $('#padInput').val(ss);
        if(ss.length==6){
            // alert('sss');
            if(ss==123456){
                self.location='paySuccess.html';
            }else{
                $('#mimacuowu').css({display:'block'});
                ss='';
                $('#padInput').val(ss);
            }
        }
    });
    $('.btnBj').on('click',function () {
        ss=ss.substring(0,ss.length-1);
        $('#padInput').val(ss);
    });
    $('.yes').on('click',function(){
        $('#mimacuowu').css({display:'none'});
    });
    $('.title_icon').on('click',function () {
        // alert('aaa');
        $('#box').hide();
        // $('.mongban').hide();
    });

    // function getShoppingCartList() {
        $.ajax({
            type:'get',
            url:'/api/getShoppingCartList',
            dataType:'json',
            success:function (json) {
                // console.log('goods_cart:',json);
                for(let i=0;i<json.list.length;i++){
                    app.goods_cart.push(json.list[i]);
                }
            }
        });
    // }
    // getShoppingCartList();
});