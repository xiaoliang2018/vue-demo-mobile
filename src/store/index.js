import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData:{
        userName:'小亮',
        paddword:'123456',
        orderId:'16546748784dsadsa'
     }
  },
  mutations: {
    updateName(state,inData){
      state.userData.userName =  inData;
    }
  },
  actions: {
    updateNameAjax(mutations,inData){
      setTimeout(()=>{
        mutations.commit('updateName',inData);
      },1000)
    },
  },
  modules: {
  }
})
