<template>
  <div id="app" :class="{loginWrap: !loginVisible}">
    <adminView />
  </div>
</template>
<script>
import adminView from './views/admin/AdminIndex.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'App',
  components: {
    adminView,
  },
  computed: {
    ...mapState([
      "loginVisible"
    ])
  },
  beforeMount() {
    this.headerVisible();
  },
  beforeUnmount() {
    this.headerVisible();
  },
  methods: {
    ...mapMutations(["headerVisible"]),

  },
}
</script>
<style>
  #app {
  background-color: #f0f2f5; 
  min-height: 980px;
  /* 스크롤바 X */
  -ms-overflow-style: none;
  }
  /* 스크롤바 X */
  ::-webkit-scrollbar {
  display: none;
  }
  /* 로그인 화면 */
  .loginWrap {
    height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
    background-position: 50%;
    overflow: hidden;
    background-color: #1b1b1b !important;
  }
</style>
