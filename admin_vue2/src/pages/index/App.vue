<template>
  <div id="app">
    <div id="header">
      <main-header/>
    </div>
    <router-view/>
    <div id="footer">
      <main-footer/>
    </div>
  </div>
</template>
<script>
import MainHeader from './views/layout/MainHeader.vue'
import MainFooter from './views/layout/MainFooter.vue'

export default {
  name: 'App',
  created() {
    // 환경 변수 출력
    console.log(process.env)
  },
  components: {
    'main-header': MainHeader,
    'main-footer': MainFooter,

  }
}
</script>
<style>
@import './assets/css/common.css';
#app {
  font-family: Avenir, Helvetica, Arial, 나눔스퀘어, 'NanumSquare', sans-serif, ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
