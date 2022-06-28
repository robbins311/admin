<template>
    <header class="header-wrap">
      <div class="header-nav">
        <!-- 회사 로고 -->
        <h1>
          <router-link to="/">
            <img src="../../assets/images/logo.png" alt="logo">
          </router-link>
        </h1>
        <!-- 메뉴 탭 -->
        <nav id="gnb" @mouseover="onOver()" @mouseleave="onOver">
          <ul class="nav_box">
            <li class="oneD">
              <router-link to="/about" class="oneA">회사소개</router-link>
            </li>
            <li class="oneD">
              <router-link to="/business" class="oneA">사업소개</router-link>
            </li>
            <li class="oneD">
              <router-link to="/brochure" class="oneA">자료센터</router-link>
            </li>
            <li class="oneD">
              <router-link to="/news" class="oneA">위드소식</router-link>
            </li>
            <li class="oneD">
              <router-link to="/recruit" class="oneA">채용정보</router-link>
            </li>
            <li class="oneD">
              <router-link to="/partners" class="oneA">파트너</router-link>
            </li>
            <li class="oneD">
              <router-link to="/questions" class="oneA">제품문의</router-link>
            </li>
          </ul>
          <transition name="slide">
            <!-- isShow -->
            <div class="slideNavBar"  v-show="isShow" @mouseover="onOver()">
              <navbar/>
            </div>
          </transition>
        </nav>
        <div class="langBox" @mouseover="onOver">
          <b-dropdown id="dropdown-1" size="sm" text="Home" class="m-md-2" ref="dropdown" variant="secondary">
            <b-dropdown-item href="/">Home</b-dropdown-item>
            <b-dropdown-item href="/about">회사소개</b-dropdown-item>
            <b-dropdown-item href="/business">사업소개</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </header>
</template>
<script>
import navbar from '../../components/NavBar';

export default {
    name: 'main-header',
    components: {
      navbar,

    },
    data() {
      return{
          isShow:false,
      }
    },
    methods: {
      onOver(isShow) {
        this.isShow = !isShow
      },
      onLeave(isShow) {
        this.isShow = isShow
      },

    }

}
</script>


<style scoped>

@import "../../assets/css/header/header.css";
@import '../../assets/css/common.css';
  
</style>