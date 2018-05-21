$(function(){
	let myapp = new Vue({
		el: '#myapp',
		data: {
			list:[
				{img:'./img/jcc.jpg'},
				{img:'./img/xfc.jpg'},
				{img:'./img/hpc.jpg'},
				{img:'./img/rlc.jpg'},
				{img:'./img/zcc.jpg'},
				{img:'./img/scc.jpg'},
				{img:'./img/tzzs.jpg'},
				{img:'./img/sxcf.jpg'},
				{img:'./img/ksc.jpg'},
				{img:'./img/sc.jpg'},
				{img:'./img/tpyp.jpg'},
				{img:'./img/xc.jpg'},
				{img:'./img/ls.jpg'},
				{img:'./img/lrsp.jpg'},
				{img:'./img/xjc.jpg'},
				{img:'./img/sl.jpg'},
				{img:'./img/xwc.jpg'},
				{img:'./img/ms.jpg'},
			],
			list1:[
				{guanzhu:'关注'},
			],
			currentTab: '作品18',
            tabs: ['菜谱0', '作品18'],
            show:false,
		},
		methods:{
			guanzhu:function(){
				this.show=!this.show;
				// console.log(this.list1[index]);
				if(this.show==true){
					this.list1[0].guanzhu='已关注';
					$('.gz').css({background:'#ccc'});
				}else{
					this.list1[0].guanzhu='关注';
					$('.gz').css({background:'#FF5733'});
				}
			}
        },
		computed: {
            currentTabComponent: function () {
                return 'tab-' + this.currentTab.toLowerCase()
            }
        }
	});
	let top=new Vue({
        el:'#Top',
        methods:{
            jimp_html:function(message){
                location=message;
            },
        }
    })
});
