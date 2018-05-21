// 导航选项
Vue.component('nve_box',{
    props:['itemstow'],
    template:`
      <div id="classbox" class="nvigaTion">
            <div class="classnav" v-for="x in itemstow" >
                <div>
                    <img :src='x.pic' />
                </div>
                <p>{{x.name}}</p>
            </div>
       </div>   
   `

});
//底部组件
Vue.component('foot_box',{
    props:['data','active'],
    template:`
			<div>
                <div class="container-fluid">
                    <div class="bottom_box" >
                        <div v-for="(x,index) in data" @click="jimp_html(x.html)" :class="{activetow:active==index}">
                            <i class="iconfont" :class="x.tubiao"></i>
                            <p>{{x.text}}</p>
                        </div>
                      
                    </div>
                </div>
			</div>
	`,
    methods:{
        jimp_html:function(msg){
            //网页跳转 注：由于是通过服务器打开网页，所以需要跳转网页的地址不需要家.html.
            location=msg;
        }
    }
});