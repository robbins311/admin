<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/main_visual1.jpg">
    <MainContent msg="사업소개"/>
  </div>
</template>

<script>
import MainContent from '../components/MainContent.vue'

export default {
  name: 'HomeView',
  components: {
    MainContent,
  }
}
</script>
<style scoped>
@import '../assets/css/common.css';
  .home img {
    width: 100%;
  }
</style>
