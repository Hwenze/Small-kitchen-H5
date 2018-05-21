$(function(){
	let myapp = new Vue({
		el: '#myapp',
		methods:{
            jimp_html:function(message){
                location=message;
            },
        },
		data: {
			list:[
				{pic:'./img/xcf.png', name:'小厨房', show:true, nr:'关于2016年9月27日支付系统升级的…', time:'2017-12-16', pl:'179评论',html:'index.html'},
				{pic:'./img/xcf.png', name:'小厨房', show:true, nr:'【重要提醒】下厨房市集防诈骗重要…', time:'3天前', pl:'1025评论',html:''},
			],
			list1:[
				{pic:'./img/rt1.png', name:'三sdff', nr:'怎么刚刚打的淡奶油成牛奶形了，我没有冷藏过，之前没有过这种情况', time:'1小时前', pl:'4评论',html:''},
				{pic:'./img/rt2.jpg', name:'媛媛_', nr:'谁能告诉我给宝宝做饼干，能用成人奶粉吗？', time:'3小时前', pl:'2评论',html:''},
				{pic:'./img/rt3.jpg', name:'手机用户_2335', nr:'大家好，请问自己做的曲奇，怎么才延迟保质期呢？没有添加防腐剂哦。', time:'3小时前', pl:'9评论',html:''},
				{pic:'./img/rt4.png', name:'Marre琳', nr:'肉松饼怎么做？喜欢吃肉松饼，就是外面卖的那个有臣肉松饼，谁知道好的方子？简…', time:'3小时前', pl:'0评论',html:''},
				{pic:'./img/rt5.png', name:'香香香1211', nr:'为啥我的蛋糕都收腰了？手法都对的！而且也没消泡，蛋白也打到位了，好郁闷…', time:'6小时前', pl:'1评论',html:''},
			],
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
