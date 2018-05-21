window.onload=function (ev) {
    Vue.component('more-box', {
        props: ['items','pic','name'],
        template:'#classbox',

    });



    //首页写的数据
    let app = new Vue({
        // el:Element->对指定页面元素进行Vue应用的构建
        el:"#miam",
        methods:{
            jimp_html:function(message){
                location=message;
            },
        },
        data:{
            items:[
                {name:"厨房好物",pic:'./images/smallpic/cadao.png',html:''},
                {name:"厨房问答",pic:'./images/smallpic/qustion.png',html:''},
                {name:"排行榜",pic:'./images/smallpic/rankings.png',html:''},
                {name:"菜谱分类",pic:'./images/smallpic/caipu.png',html:'foodclassify'},
            ],
            leble:[
                {title:"本周食材"},
                {title:"厨studio课堂"},
                {title:"菜单推荐"}
            ],
            itemsthree:[
                {pic:'./images/shiwu1.jpg',op:'此生考过最完美的一只鸡！节日必备',maney:'48',discount:'限时折扣'},
                {pic:'./images/shiwu2.jpg',op:'此生考过最完美的一只鸡！节日必备',maney:'80',discount:'时令新菜'},
                {pic:'./images/shiwu3.jpg',op:'此生考过最完美的一只鸡！节日必备',maney:'57',discount:'限时折扣'},
                {pic:'./images/shiwu4.jpg',op:'此生考过最完美的一只鸡！节日必备',maney:'20',discount:'时令新菜'},

            ],
            itemsfort:[
                {name:"浅草君君",pic:'./images/ketan1.jpg',op:'百变生巧巴拉巴拉巴拉！节日必备',discount:'讲师',number:666},
                {name:"浅草君君",pic:'./images/ketang2.jpg',op:'百变生巧巴拉巴拉巴拉！节日必备',discount:'讲师',number:666},
                {name:"浅草君君",pic:'./images/ketang3.jpg',op:'百变生巧巴拉巴拉巴拉！节日必备',discount:'讲师',number:666},
                {name:"浅草君君",pic:'./images/ketang4.jpg',op:'百变生巧巴拉巴拉巴拉！节日必备',discount:'讲师',number:666},

            ]
        },


    });
    let top=new Vue({
        el:'#Top',
        methods:{
            jimp_html:function(message){
                location=message;
            },
	    jimp_html2:function(message){
                location=message;
            },
        }
    })
};