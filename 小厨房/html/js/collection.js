$(function () {
        Vue.component('coll-收藏的菜谱', {
            template:`
                    <div>
                        <div class="list" v-for="(x,index) in sujv">
                           <div class="list_pic">
                                <a href="#"><img :src="x.pic" alt="" /></a>
                           </div>
                           <div class="list_main">
                                <h4>{{x.title}}</h4>
                                <span class="small_lable">{{x.name}}</span>
                                <p class="list_sd">
                                    <span class="list_score">{{ x.score }}分</span> 
                                    <span class="list_do">{{x.pepronum }}人做过</span>
                                </p>
                           </div>
                           <new-btn :mes="index" :data="sujv"></new-btn>
                        </div>
                    </div>
            `,
            data(){
                return {
                    sujv:[
                        {pic:'./images/2.jpg',title:'蒜蓉蒸金针菇',name:'E路拾缘',score:8.5,pepronum:15105,rec:false,},
                        {pic:'./images/3.jpg',title:'杜仲猪腰汤',name:'E路拾缘',score:8.5,pepronum:15105,rec:false,},
                    ],
                };
                },
        });
        Vue.component('coll-我的菜单', {
            template:`
                    <div>
                        <div class="list" v-for="(x,index) in sujv">
                           <div class="list_pic">
                                <a href="#"><img :src="x.pic" alt="" /></a>
                           </div>
                           <div class="list_main">
                                <h4>{{x.title}}</h4>
                                <span class="small_lable">{{x.name}}</span>
                                <p class="list_sd">
                                    <span class="list_score">{{ x.score }}分</span> 
                                    <span class="list_do">{{x.pepronum }}人做过</span>
                                </p>
                           </div>
                           <new-btn :mes="index" :data="sujv"></new-btn>
                        </div>
                    </div>
            `,
            data(){
                return {
                    sujv:[
                        {pic:'./images/2.jpg',title:'蒜蓉蒸金针菇',name:'E路拾缘',score:8.5,pepronum:15105,rec:false,},
                        {pic:'./images/3.jpg',title:'杜仲猪腰汤',name:'E路拾缘',score:8.5,pepronum:15105,rec:false,},
                    ],
                };
            },
        });
        Vue.component('coll-浏览记录', {
            template:`
                    <div>
                        <div class="list" v-for="(x,index) in sujv">
                           <div class="list_pic">
                                <a href="#"><img :src="x.pic" alt="" /></a>
                           </div>
                           <div class="list_main">
                                <h4>{{x.title}}</h4>
                                <span class="small_lable">{{x.name}}</span>
                                <p class="list_sd">
                                    <span class="list_score">{{ x.score }}分</span> 
                                    <span class="list_do">{{x.pepronum }}人做过</span>
                                </p>
                           </div>
                           <new-btn :mes="index" :data="sujv"></new-btn>
                           
                        </div>
                    </div>
            `,
            data(){
                return {
                    sujv:[
                        {pic:'./images/2.jpg',title:'蒜蓉蒸金针菇',name:'E路拾缘',score:8.5,pepronum:15105,rec:false,},
                        {pic:'./images/3.jpg',title:'杜仲猪腰汤',name:'E路拾缘',score:8.5,pepronum:15105,rec:false,},
                    ],
                };
            },

        });
        Vue.component('new-btn',{
            props:['mes','data'],
            template:`
                <div class="list_share">
                    <button v-if="!rec" class="iconfont icon-diandian" @click="rec =!rec"></button>
                    <div v-if="rec">
                          <button class="del_box" @click="del(mes)">移除</button>
                          <button class="cancel" @click="rec =!rec">取消</button>
                    </div>
                </div>
            `,
            data:function () {
                return {
                    rec : false
                }
            },
            methods:{
                del:function (index) {
                    this.data.splice(index,1);
                    this.rec = false
                }
            },
        });
        let coll=new Vue({
            el: '#dynamic-coll',
            data: {
                currentTab: '收藏的菜谱',
                tabs: ['收藏的菜谱', '我的菜单', '浏览记录'],

            },
            computed: {
                currentTabComponent: function () {
                    return 'coll-' + this.currentTab.toLowerCase()
                },
            }
        });
}) ;