<template>
    <!-- Admin Wrapper -->
    <div class="h-100">
      <!-- Moblie S -->
      <div class="mobile">
        <AppHeader v-if="loginVisible" />
        <main>
            <router-view />
        </main>
      </div>
      <!-- Moblie E -->

      <!-- PC S -->
    <div class="pc">
      <b-row no-gutters :class="{loginWrap: !loginVisible}">
        <b-col cols="2">
          <AppSideBar v-if="loginVisible" />
        </b-col>
        <b-col cols="10">
          <AppHeader v-if="loginVisible" />
          <main>
            <router-view />
          </main>
        </b-col>
      </b-row>
    </div>
    <!-- PC E -->
    </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'
import AppSideBar from '@/components/AppSideBar'
import { mapState, mapMutations } from 'vuex'

    
export default {
  name: 'AdminIndex',
  components: {
    AppHeader,
    AppSideBar,

  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState([
      "loginVisible"
    ])
  },
  mounted() {
    
  },
  // loginVisible Mutation
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
  /* ADMIN PAGE DEFAULT FONT */
  * { font-family:  'Apple SD Gothic'; }
  @font-face {
    font-family: 'Apple SD Gothic';
    src: url('@/assets/fonts/AppleSDGothicNeoB.ttf') format('truetype');
    font-weight: 700;
  }
  
  @font-face {
    font-family: 'Apple SD Gothic';
    src: url('@/assets/fonts/AppleSDGothicNeoL.ttf') format('truetype');
    font-weight: 300;
  }
  
  @font-face {
    font-family: 'Apple SD Gothic';
    src: url('@/assets/fonts/AppleSDGothicNeoR.ttf') format('truetype');
    font-weight: 400;
  }
  /* Admin Page common.css import */
  @import '../../assets/css/common.css';
  
</style>
