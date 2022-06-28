
<template>
  <section class="sub_wrap">
    <div class="sub_top">
      <!-- 회사소개 상단 -->
      <div class="inner">
        <h2>위드네트웍스</h2>
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
            <li class="onStatic">
              <router-link to="/about" class="boxA">위드네트웍스</router-link>
            </li>
            <li class="static" @mouseover="isHovering1 = true" @mouseout="isHovering1 = false"
            :class="{on: isHovering1}">
              <router-link to="/about/group" class="boxA">조직 구성</router-link>
            </li>
            <li class="static" @mouseover="isHovering = true" @mouseout="isHovering = false"
            :class="{on: isHovering}">
              <router-link to="/about/map" class="boxA">오시는 길</router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- 회사소개 상단 img -->
      <div class="sub_tit1"/>
    </div>
    <!-- content section -->
    <section class="sub_content">
      <!-- content routing nav -->
      <div class="sub_con_about">
        <ul>
          <!-- on active class -->
          <li class="subStatic">
            <router-link to="/about" class="boxB">위드네트웍스</router-link>
          </li>
          <li class="staticSub">
            <router-link to="/about/ceo" class="boxB">CEO 인사말</router-link>
          </li>
          <li class="staticSub">
            <router-link to="/about/history" class="boxB">회사 연혁</router-link>
          </li>
          <li class="staticSub">
            <router-link to="/about/cibi" class="boxB">CI / BI</router-link>
          </li>
        </ul>
      </div>
      <!-- content 중단 wrap -->
      <div class="content_com_wrap">
        <!-- content 회사소개란-->
        <div class="content_it">
          <div class="content_it_with">
            <span>IT의 가치를 고객과 함께하는 기업</span>
            <br>
            <span>위드네트웍스 입니다.</span>
          </div>
          <div class="content_it_value">
            <span>㈜위드네트웍스는 고객의 가치를 위해 고민하는 보안 전문 기업으로서, 컨설팅부터 구축 및 유지보수 서비스까지 제공하며, 고객의 입장에 선 Total 컨</span>
            <br>
            <span>설팅을 통해 ICT 혁신을 지지하는 기업입니다.</span>
          </div>
        </div>
        <!-- content mission-->
        <div class="content_mission">
          <h3 class="mission_tit">
            <p>미션</p>
          </h3>
          <div class="mission">
            <p>
              우리는 <span>새로움으로 </span>
              <br>
              <span>더불어 </span>살아가기위해 <span>존재 </span>한다.
            </p>
          </div>
        </div>
        <!-- content value-->
        <div class="content_value">
          <h3 class="mission_tit">
            <p>핵심가치</p>
          </h3>
          <div class="value_img">
            <img src="../../assets/images/company_con01.png" alt="value">
          </div>
        </div>
        <!-- content summary-->
        <div class="content_summary">
          <h3 class="mission_tit">
            <p>개요</p>
          </h3>
          <div class="table_wrap">
            <table class="summary_table">
              <tbody>
                <tr>
                  <th>사업체명</th>
                  <td>㈜위드네트웍스</td>
                </tr>
                <tr>
                  <th>설립일자</th>
                  <td>2009-12-05</td>
                </tr>
                <tr>
                  <th>대표이사</th>
                  <td>고인구, 안종업</td>
                </tr>
                <tr>
                  <th>대표번호</th>
                  <td>1811-8633</td>
                </tr>
                <tr>
                  <th>본사주소</th>
                  <td>서울특별시 용산구 한강로 3가 40-9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>

export default {
  name: 'AboutView',
  components: {

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

    }
  },
  
  methods: {
    hover: function () {
      /* let item = this.navLists[index];
      /* console.log("flag " + item);
      this.$set(this.navLists, index, item); */
      /* this.navLists[index].isHovering = !this.navLists[index].isHovering;
      console.log("flag " + this.isHovering);
      console.log("flag " + index); */
    },

    onOver: function(isHovering) {
      this.isHovering = !isHovering;
      console.log("flag " + this.isHovering);
    },

  },
  
}

</script>
<style scoped>
  @import '../../assets/css/common.css';
  * { font-family: 'NanumSquare', sans-serif; }
  .sub_wrap {
    
    margin-top: 5px;
    padding-bottom: 50px;
    margin-bottom: 50px;
  }
  .sub_top {
    position: relative;
    width: 100%;
    height: 360px;
    transition: height .3s ease-out;
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
    background-image: url('../../assets/images/sub_top_bg1.jpg');
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


  /* 컨텐츠 */
  .sub_content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 15px;
  }
  .sub_con_about {
    max-width: 1200px;
    margin: 0 auto 50px;
  }
  .sub_con_about ul {
    display: flex;
    justify-content: center;
  }
  .subStatic {
    margin: auto 20px;
    width: 210px;
    height: 60px;
    padding: 15px 35px;
    border: 1px solid #ccc;
    border-radius: 30px;
    border: 2px solid #f36e21;
    z-index: 1;
    color: #222;
    font-weight: 700;
    border-radius: 30px;
  }
  .subStatic>.boxB {
    z-index: 1;
    color: #222;
    font-weight: bold;
  }
  .sub_con_about ul li>.boxB {
    display: block;
    text-decoration: none;
    color: #333;
    box-sizing: border-box;
    font-size: 1.1rem;
  }
  .staticSub {
    margin: auto 20px;
    width: 210px;
    height: 60px;
    padding: 15px 35px;
    border: 1px solid #ccc;
    border-radius: 30px;
  }
  /* 회사소개란 */
  .content_com_wrap {
    max-width: 1250px;
    padding-bottom: 50px;
    margin: 0 auto;
  }
  .content_it {
    background: #f3f3f3;
    overflow: hidden;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
  }
  .content_it_with {
    width: 100%;
    padding: 50px 50px;
    text-align: left;
  }
  .content_it_with span {
    font-size: 2.4rem;
    color: #ef4629;
    line-height: 1.4;
  }
  .content_it_with span:last-child::after {
    content: '';
    display: block;
    width: 60px;
    border-bottom: 2px solid #ef4629;
    margin: 30px 0;
  } 
  .content_it_value {
    width: 100%;
    padding: 40px 50px;
    margin-top: -80px;
    text-align: left;
  } 
  .content_it_value span {
    font-size: 1rem;
    color: #222;
  }
  /* 미션 */
  .content_mission {
    margin-top: 40px;
    padding-bottom: 50px;
  }
  .mission_tit {
    padding-bottom: 10px;
    text-align: left;
  }
  .mission_tit p {
    position: relative;
    padding-left: 37px;
    font-size: 1.6rem;
    color: #111;
    font-weight: 700;
    letter-spacing: -0.75px;
  }
  .mission_tit p::before {
    position: absolute;
    top: 13px;
    left: 13px;
    display: inline-block;
    content: "";
    width: 10px;
    height: 10px;
    background-color: #f36e21;
    transform: rotate(45deg);
  }
  .mission {
    position: relative;
    top: 0;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 30px;
    margin-bottom: 50px;
  }
  .mission p {
    text-align: center;
    font-size: 2.2rem;
    font-weight: bold;
    color: #333;
  }
  .mission span {
    color: #ef4629;
  }
  /* 핵심가치 */
  .content_value {
    margin-top: 40px;
    padding-bottom: 50px;
  }
  .value_img {
    max-width: 1220px;
    margin: 70px auto;
    text-align: center;
  }
  /* 개요 */
  .content_summary {
    margin-top: 40px;
    padding-bottom: 50px;
  }
  .table_wrap {
    margin: 0;
    padding: 0;
    letter-spacing: -.6px;
    line-height: 1.6;
    box-sizing: border-box;
  }
  .summary_table {
    border-top: 2px solid #333;
    width: 100%;
    font-size: 0.95rem;
  }
  .summary_table th {
    background: #fbfbfb;
    padding: 17px 20px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    font-weight: bold;

  }
  .summary_table td {
    padding: 17px 20px;
    border-bottom: 1px solid #ddd;
  }
















</style>