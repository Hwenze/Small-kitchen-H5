$(function () {

    Vue.component('tab-菜谱1', {
        template: `
            <div>
                 <div class="foot_pic">
                     <div class="pic_box">
                          <img src="images/3.jpg" alt="">
                          <div class="dujia">独家</div>
                          <div class="pen">
                            <img src="images/smallpic/xiugai.png" alt=""/>
                          </div>
                     </div>
                     <div class="data_food">
                        <div class="food_name">
                            <label>炸鸡翅酱饭</label>
                        </div>
                        <div class="small_user">
                            <img src="images/users/user2.png" alt=""/>
                        </div>
                     </div>
                 </div>
            </div>
        `
    });
    Vue.component('tab-作品3', {
        template: `
                <div>
                    <div class="foot_pic">
                        <div class="pic_box">
                             <img src="images/3.jpg" alt="">
                             <div class="dujia">独家</div>
                             <div class="pen">
                               <img src="images/smallpic/xiugai.png" alt=""/>
                             </div>
                        </div>
                        <div class="data_food">
                           <div class="food_name">
                               <label>炸鸡翅酱饭</label>
                           </div>
                           <div class="small_user">
                               <img src="images/users/user2.png" alt=""/>
                           </div>
                        </div>
                     </div>
                     <div class="foot_pic">
                        <div class="pic_box">
                             <img src="images/3.jpg" alt="">
                             <div class="dujia">独家</div>
                             <div class="pen">
                               <img src="images/smallpic/xiugai.png" alt=""/>
                             </div>
                        </div>
                        <div class="data_food">
                           <div class="food_name">
                               <label>炸鸡翅酱饭</label>
                           </div>
                           <div class="small_user">
                               <img src="images/users/user2.png" alt=""/>
                           </div>
                        </div>
                     </div>
                     <div class="foot_pic">
                        <div class="pic_box">
                             <img src="images/3.jpg" alt="">
                             <div class="dujia">独家</div>
                             <div class="pen">
                               <img src="images/smallpic/xiugai.png" alt=""/>
                             </div>
                        </div>
                        <div class="data_food">
                           <div class="food_name">
                               <label>炸鸡翅酱饭</label>
                           </div>
                           <div class="small_user">
                               <img src="images/users/user2.png" alt=""/>
                           </div>
                        </div>
                     </div>
                </div>
        `
    });

    //页面我的数据
    let tab=new Vue({
        el: '#dynamic-component-demo',
        data: {
            currentTab: '菜谱1',
            tabs: ['菜谱1', '作品3']
        },
        computed: {
            currentTabComponent: function () {
                return 'tab-' + this.currentTab.toLowerCase()
            }
        }
    });
    let event=new Vue();
    Vue.component('outuser',{
        data(){
            return{
                show:false,
            }
        },
        template:
            `
                <div>
                    <div v-if="show" class="whether_out">
                         <p>你确定要退出账号吗</p>
                         <button @click="out()">退出</button>
                         <button @click="not()">取消</button>
                    </div>
                </div>
            `,
        methods:{
            out:function () {
                this.show=!this.show;
                event.$emit('outlin1',this.show);
                $.ajax({
                    url:'/myCenter',
                    type:"post",
                    data:{
                        res:'kdf',
                    },
                    success:function (res) {
                        console.log(res);
                        location='signin';
                    },

                })
            },
            not:function () {
                this.show=!this.show;
                event.$emit('outlin1',this.show);
            }
        },
        mounted:function () {
            let _this=this;
            event.$on('outlin',function (data) {
                _this.show=data;
            });
        }
    });
    let top=new Vue({
        el:'#Top',
        data:{
          show:false
        },
        methods:{
            jimp_html:function(message){
                location=message;
            },
            tuichu:function(){
                this.show=!this.show;
                event.$emit('outlin',this.show);
            }
        },
        mounted:function () {
            let _this=this;
            event.$on('outlin1',function (data) {
                _this.show=data;
            })
        }
    });
    let picwidth=$('.user_pic').width();
    $('.user_pic img').css({height:picwidth});
});