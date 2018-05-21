$(function(){
	let myapp = new Vue({
		el: '#myapp',
		methods:{
            jimp_html:function(message){
                location=message;
            },
        },
		data: {
			list1:[
				{img:'./img/jcc.jpg', wz:'家常菜',html:'classifylist.html'},
				{img:'./img/xfc.jpg', wz:'下饭菜',html:''},
				{img:'./img/hpc.jpg', wz:'烘培',html:''},
				{img:'./img/rlc.jpg', wz:'肉类',html:''},
				{img:'./img/zcc.jpg', wz:'早餐',html:''},
				{img:'./img/scc.jpg', wz:'蔬菜',html:''},
				{img:'./img/tzzs.jpg', wz:'汤粥主食',html:''},
				{img:'./img/sxcf.jpg', wz:'松下厨房',html:''},
			],
			list2:[
				{img:'./img/ksc.jpg', wz:'快手菜',html:''},
				{img:'./img/sc.jpg', wz:'素菜',html:''},
				{img:'./img/tpyp.jpg', wz:'甜品饮品',html:''},
				{img:'./img/xc.jpg', wz:'小吃',html:''},
				{img:'./img/ls.jpg', wz:'零食',html:''},
				{img:'./img/lrsp.jpg', wz:'懒人食谱',html:''},
				{img:'./img/xjc.jpg', wz:'下酒菜',html:''},
				{img:'./img/sl.jpg', wz:'沙拉凉菜',html:''},
			],
			list3:[
				{img:'./img/yxsc.jpg', wz:'鱼虾水产',html:''},
				{img:'./img/xwc.jpg', wz:'下午茶',html:''},
				{img:'./img/dldl.jpg', wz:'蛋类豆类',html:''},
				{img:'./img/nl.jpg', wz:'奶类',html:''},
				{img:'./img/yc.jpg', wz:'腌肉腌菜',html:''},
				{img:'./img/twl.jpg', wz:'调味辅料',html:''},
				{img:'./img/xy.jpg', wz:'宵夜',html:''},
				{img:'./img/ms.jpg', wz:'桂冠美食',html:''},
			],
			list4:[
				{img:'./img/z.jpg', wz:'蒸',html:''},
				{img:'./img/j.jpg', wz:'煎',html:''},
				{img:'./img/d.jpg', wz:'炖',html:''},
				{img:'./img/yz.jpg', wz:'炸',html:''}
			]
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
