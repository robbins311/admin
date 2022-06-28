<template>
    <div>
        <withsubtop msg="위드네트웍스"/>
        <section class="sub_content">
        <!-- content routing nav -->
            <div class="sub_con_about">
                <ul>
                <!-- on active class -->
                <li class="staticSub">
                    <router-link to="/about" class="boxB">위드네트웍스</router-link>
                </li>
                <li class="staticSub">
                    <router-link to="/about/ceo" class="boxB">CEO 인사말</router-link>
                </li>
                <li class="subStatic">
                    <router-link to="/about/history" class="boxB">회사 연혁</router-link>
                </li>
                <li class="staticSub">
                    <router-link to="/about/cibi" class="boxB">CI / BI</router-link>
                </li>
                </ul>
            </div>
            <!-- 연혁 탭 -->
            <section class="history_container">
                <div class="year">
                    <ul class="year_divide_tab">
                        <li class="selected">
                            <router-link to="/about/history">2020 ~ 2019</router-link>
                        </li>
                        <li>
                            <router-link to="/about/history2">2018 ~ 2009</router-link>
                        </li>
                    </ul>
                </div>
                <section class="year_content">
                    <div class="year_recent">
                        <table class="year_recent_box">
                            <dt> <strong>2020~2019</strong> </dt>
                            <dd>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>대구 지사 설립</span>
                                </p>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>도서지역 무선인터넷 인프라 확대구축 (NIA 2차)</span>
                                </p>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>i24Pharm 약국 공급</span>
                                </p>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>국내 최초 루커스 MSP 스페셜 파트너</span>
                                </p>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>도서지역 무선인터넷 인프라 확대구축 (NIA 1차)</span>
                                </p>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>대전시청 공공와이파이 구축</span> 
                                </p>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>충청남도 관광지 무료 와이파이 구축지원</span>
                                </p>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>충청북도 관광지 무료 와이파이 구축지원</span>
                                </p>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>전라북도 관광지 무료 와이파이 구축지원</span>
                                </p>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>N S/W 개발사 i24 수주</span>
                                </p>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>D타이어 i24 수주</span>
                                </p>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>i24A 조달 등록</span>
                                </p>
                                <p>
                                    <b>&nbsp;</b>
                                    <span>H 여행사 i24 수주</span>
                                </p>
                            </dd>
                        </table>
                    </div>
                </section>
            </section>
        </section>
    </div>
</template>
<script>
import withsubtop from '../../components/about/withSubTop'
export default {
    name: 'aboutHistory',
    components: {
        withsubtop,
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>
<style scoped>
a { text-decoration: none; color: #959595;}
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
  /* 연혁 */
  .history_container {
    max-width: 1140px;
    height: 840px;
    margin: 30px auto;
  } 
  .year_divide_tab {
    display: flex; justify-content: space-evenly; 
    padding-left: 0;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    height: 55px;
    line-height: 55px;
    border-radius: 60px;
  }
  .year_divide_tab>li {
    display: block;
    width: 50%;
    text-align: center;
    background-color: #f2f2f2;
  }
  .year_divide_tab>li.selected {
      background-color: #f36e21;
  }
  .year_divide_tab>li.selected a {
      color: #fff;
  }
  .year_divide_tab li a {
    display: block;
    width: 100%;
  }

  .year_content {
    max-width: 1140px;
    height: 750px;
    margin: 0 auto;
  }
  .year_recent {

  }
  .year_recent_box {
    display: flex;
    justify-content: space-evenly;
    margin-top: 70px;
    width: 100%;
  }
  .year_recent_box dt {
    display: block;
    width: 12%;
    font-size: 36px;
    line-height: 50px;
    color: #222;
    font-weight: 500;
    letter-spacing: -0.5px;
  }
  .year_recent_box dt>strong {
    color: #f36e21;
  }
  .year_recent_box dd {
    position: relative;
    padding-bottom: 50px;
  }
  .year_recent_box dd::before {
    position: absolute;
    top: 18px;
    left: -60px;
    display: block;
    content: "";
    width: 1px;
    height: 90%;
    background-color: #ddd;
  }
  .year_recent_box dd>p {
    position: relative;
    zoom:1;
    padding: 11px 0;
  }
  .year_recent_box dd>p::before {
   position:absolute; 
   top:18px; left:-65px; 
   display:inline-block; content:""; 
   width:11px; height:11px; background-color:#fff; 
   border:2px solid #ddd; border-radius:100%; 
  }

</style>