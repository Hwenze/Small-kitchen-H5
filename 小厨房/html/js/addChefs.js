$(function(){
	let myapp = new Vue({
		el: '#myapp',
		methods:{
            jimp_html:function(message){
                location=message;
            },
				guanzhu:function(index){
					this.show=!this.show;
					// console.log(this.list1[index]);
					if(this.show==true){
						this.list1[index].guanzhu='已关注';
						$('.gz').eq(index).css({background:'#ccc'});
					}else{
						this.list1[index].guanzhu='关注';
						$('.gz').eq(index).css({background:'#FF5733'});
					}
				}
        },
		data: {
			list1:[
				{img:'./img/rt1.png',html:'Othershomepage', name:'豆西西酱', text:'早就在看下厨房，特别羡慕，但那时没有烤箱，觉得什么都做不了，偶然间得到一个18升的小烤箱，开启', 
					pic:[
							{pimg:'./img/jcc.jpg'},
							{pimg:'./img/xfc.jpg'},
							{pimg:'./img/ksc.jpg'},
							{pimg:'./img/sc.jpg'}
					],
					guanzhu:'关注',
				},
				{img:'./img/rt2.jpg', name:'棒棒糖456', text:'爱生活 爱美食 爱下厨', 
					pic:[
							{pimg:'./img/pic1.jpg'},
							{pimg:'./img/pic2.jpg'},
							{pimg:'./img/pic3.jpg'},
							{pimg:'./img/pic4.jpg'}
						],
						guanzhu:'关注',
				},
				{img:'./img/rt3.jpg', name:'ZzRegina', text:'麻婆豆腐 新菜色上菜谱',
					pic:[
							{pimg:'./img/d.jpg'},
							{pimg:'./img/j.jpg'},
							{pimg:'./img/yz.jpg'},
							{pimg:'./img/z.jpg'}
						],
						guanzhu:'关注',
				},
			],
			currentTab: '推荐',
            tabs: ['推荐', '新浪微博', 'QQ空间'],

          	show:false,
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
    });
});
