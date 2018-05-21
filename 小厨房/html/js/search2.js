$(function(){
    let myapp = new Vue({
        el: '#myapp',
        data: {

            list2:[],
            currentTab: '智能排序',
            tabs: ['智能排序', '评分最高', '做过最多']
        },
        methods:{
		jimp:function(msg){
	           location=msg;
//console.log(msg)
        }

        },
        computed: {
            currentTabComponent: function () {
                return 'tab-' + this.currentTab.toLowerCase()
            }
        }
    });

    Vue.component('xuanzhe',{
        data() {
            return {

                show:false,
                isActive:0,
                p_list:['所有菜谱','商品','用户','菜单'	,'只看我关注厨友的菜谱']
            }
        },
        template:`
			<div v-if="show" class="goodsclass"  >
				<div class="goods_right">
					<div class="title">
						<span class="quxiao" @click="end_rigt()">取消</span>
						<p>搜索</p>
						<span class="quedin" @click="yes_rigt()">确定</span>
					</div>
					<div class="xuanzhe">
					<p :class="{activback:isActive==index}" v-for="(x,index) in p_list" @click="changeStyle(index)">{{x}}</p>
					</div>
				
				</div>
			</div>
		`,
        methods:{
            end_rigt:function () {
                this.show=false;
                even.$emit('aaa',this.show);
            },
            yes_rigt:function () {
                this.show=false;
            },
            changeStyle:function(index){
                this.isActive=index;
                // this.show=false;
            }
        },
        mounted:function(){
            let othis = this;
            even.$on('go_open',function (data) {
                othis.show = data;
            })
        }
    });
    let even=new Vue();
    let top=new Vue({
        el:'#Top',
        data:{
            show:false
        },
        methods:{
            jimp_html:function(message){
                location=message;
            },
           
            go_righ:function () {
                this.show = true;
                even.$emit('go_open',this.show);
            },
        },
        mounted:function () {
            let _that=this;
            even.$on('aaa',function (data) {
                _that.show=data;
            })
        }
    })



});
