<template>
    <div class="sub_top">
        <!-- 회사소개 상단 -->
        <div class="inner">
        <h2>{{msg}}</h2>
        <div class="sub_nav_about">
            <ul>
            <!-- 회사소개 상단 on active class nav -->
            <!-- <li class="static" v-for="(list,index) in navLists" :key="index"
            @mouseover="isHovering = true" @mouseout="isHovering = false"
            :class="{on: isHovering}">
                <router-link :to="list.route" class="boxA" >
                {{list.title}}
                </router-link>
            </li> -->
            <li class="static"  @mouseover="isHovering1 = true" @mouseout="isHovering1 = false"
            :class="{on: isHovering1}">
                <router-link to="/about" class="boxA">위드네트웍스</router-link>
            </li>
            <li class="onStatic">
                <router-link to="/about/group" class="boxA">조직 구성</router-link>
            </li>
            <li class="static" @mouseover="isHovering = true" @mouseout="isHovering = false"
            :class="{on: isHovering}">
                <router-link to="/about/map" class="boxA">오시는 길</router-link>
            </li>
            </ul>
        </div>
        </div>
        <!-- 회사소개 상단 img components 활용 데이터 전달해야함 -->
        <div v-for="img in imgLists" :key="img" class="sub_tit1">
          <img :src="img.src">
        </div>
        <!-- <div class="sub_tit1">
          <img :src="img_src">
        </div> -->
    </div>
</template>
<script>
export default {
    name: 'subTop',
    components: {

    },
    props: {
      msg: {
        type: String,
      },
       img_src: String,
    },
    data() {
        return {
            isHovering: false,
            isHovering1: false,
            navLists:[
                        { id: 1, title: "위드네트웍스", route: '/about' },
                        { id: 2, title: "조직구성", route: "/about/group" },
                        { id: 3, title: "오시는길", route: "/about/map"},
                    ],
              imgLists: [
                { id: 1, src: "require('../../assets/images/${img_src}')"},
                { id: 2, src: require("../../assets/images/sub_top_bg2.jpg")},
                { id: 3, src: require("../../assets/images/sub_top_bg3.jpg")},

              ]

            }
    },
    methods: {
        
    },
}
</script>
<style scoped>
  .sub_top {
    position: relative;
    width: 100%;
    height: 360px;
    overflow: hidden;
  }
  .inner {
    text-align: center;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    
  }

  .inner h2 {
    vertical-align: middle;
    font-size: 3.2rem;
    font-weight: 700;
    color: #fff;
    line-height: 1;
    position: relative;
    opacity: 1;
    letter-spacing: 5px;
    margin-top: 35px;
  }
  .inner h2::after {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    background: #fff;
    margin: 40px auto 0;
  }
  .sub_tit1 {
    /* background-image: url('../../assets/images/sub_top_bg1.jpg'); */
    z-index: -1;
    left: 0px;
    top: 0px;
    position: absolute;
    width: 100%;
    height: 360px;
  }
  .sub_nav_about {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .sub_nav_about ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-bottom: 0;
  }
  /* Hover Class on off */
  .static {
    width: 400px;
    background: rgba(0,0,0,.5);
    height: 60px;
    border-right: 1px solid #929fa2;
        transition: all .2s ease;
  }
  .onStatic {
    width: 400px;
    background: #fff;
    height: 60px;
    border-right: 1px solid #929fa2;
    color: #333;
    font-weight: 700;
  }
  .on {
    background: #fff;
    transition: all .2s ease;
    
  }
  .onStatic> .boxA{
    color: #333;
    font-weight: 700;
  }
  .on> .boxA{
    color: #333;
    font-weight: 700;
  }
  /* Hover Class on off */

  .sub_nav_about ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    line-height: 60px;
    transition: all .2s ease;
  }
  .sub_nav_about ul li:last-child {
    border: none;
  }
</style>