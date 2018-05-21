$(function(){
	let myapp = new Vue({
		el: '#myapp',
		data: {
			list1:[
				{img:'./img/ksc.jpg', wz:'超过1000人做过的家常菜', js:'204道菜谱'},
				{img:'./img/jcc.jpg', wz:'家常菜', js:'159道菜谱'},
				{img:'./img/xfc.jpg', wz:'家常菜', js:'84道菜谱'},
			],
			list2:{},   //保存数据
			currentTab: '智能排序',
            tabs: ['智能排序', '评分最高', '做过最多'],
            title:[], //食品名称
            albums:[],  //标题图片
            ingredients:[],  // 主材料
            burden:[],  //配料

		},
		mounted:function(){
			this.showData();
		},
		methods:{
            abc:function (msg) {
                location=msg;
            },
            showData:function(){
                let key ="af4b70630a8ade2bb9bda2af85f32988";
                let cid='1'; //家常菜
                // let title=[];
                let me = this;
                 $.ajax({
                    url:'http://apis.juhe.cn/cook/index',
                    data:{
                        cid:cid,
                        key:key
                    },
                    type:'post',        //类型
                    dataType:'jsonp', //跨域
                    success:function(data){
                    	// for(let i=0; i<10;i++){
                    	// 	this.list2= data.result.data;
	                    //     me.title.push(this.list2[i]);
	                    //     // me.ingredients.push(this.list2[i].ingredients);
	                    //     // me.burden.push(this.list2[i].burden);
	                    //     // me.albums.push(this.list2[i].albums[0]);
                    	// }
                    	me.list2= data.result.data;

                    		console.log(me.list2);
                    		// console.log(me.ingredients);
                    		// console.log(me.burden);
                    		// console.log(me.albums);
                    }
                })
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
