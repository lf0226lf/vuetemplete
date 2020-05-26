import Vue from 'vue'
import vuex from 'vuex'
import HeadStore from './modules/heade'
Vue.use(vuex);
export default new vuex.Store({
  modules:{
    Heade: HeadStore
  }
})
