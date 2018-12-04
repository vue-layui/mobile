// index.js
import Vue from 'vue';
import Vuex from 'vuex';

// 需要注册vuex到vue中
Vue.use(Vuex);

// let count = parseInt(localStorage.getItem('count') || '[]');

// 使用 es6 语法把vuex的实例对象输出
export default new Vuex.Store({
  state: {
    count: 1,
    list:JSON.parse(localStorage.getItem('temp'))
  },
  getters: {
    // 接受state作为参数，每次 count发生变化时 ， 都会被调用
    consoleCount: state => {
      console.log('the state count : ' + state.count);
    }
  },
  mutations: {
    addCount: state => {
      ++state.count;
      // localStorage.setItem('count',parseInt(state.count))
    },
    addNumCount: (state, n) => {
      state.count+=n;
      //保存到localstorage
      // localStorage.setItem('count',parseInt(state.count))
    },
    //自减
    subCount: state=>{
      --state.count;
      localStorage.setItem('count',parseInt(state.count))
    },

  },
  // 借助actions的手去 执行 mutations ， 通过  this.$store.dispatch 的方式调用
  actions: {
    addCount: context => {
      // 调用 mutation
      context.commit('addCount');
    },
    addNumCount: (context, n) => {
      context.commit('addNumCount', n);
    },
    subCount: context=>{
      context.commit('subCount')
    }
  }
})
