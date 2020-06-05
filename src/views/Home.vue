<template>
  <div class="home">
    <router-link  to="/mobile"><van-button type="default">默认按钮</van-button></router-link>
    <zujian1>
      <p slot="header">头部!</p>
      <p slot="footer">底部</p>
    </zujian1>
    <!-- <div>{{userData}}</div>
    <button @click="synchronization">同步修改</button>
    <button @click="asynchronous">异步修改</button>
    <button v-if="$commonJs.isLogin()">111 </button> -->


  </div>
</template>

<script>


import api from './../assets/js/api'
import zujian1 from './components/zujian1'
export default {
  name: 'Home',
  data(){
    return {
      userData:[],
    }
  },
  components:{
    zujian1
  },
  mounted(){
    this.userData = this.$store.state.userData;
    api.testAxios('546564564',(res)=>{  //测试api公共函数接口
      console.log(res)
    },(err)=>{
      console.log(err);
    })
    
  },
  methods:{
    synchronization(){
      this.$store.commit('updateName','同步修改名称')
    },
    asynchronous(){
      this.$store.dispatch('updateNameAjax','异步修改名称');
    }
  }
}
</script>
