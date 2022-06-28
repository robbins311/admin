<template>
    <div>
        <groupSubTop msg="조직 구성"/>
        <section class="sub_content">
            <!-- content routing nav -->
            <div class="sub_con_about">
                <!-- on active class -->
                <ul>
                    <li class="staticSub">
                        <router-link to="/about/group" class="boxB">조직구성</router-link>
                    </li>
                    <li class="subStatic">
                        <router-link to="/about/grouprnd" class="boxB">R&D 센터</router-link>
                    </li>
                </ul>
            </div>
        <section class="history_container">
            <div class="year">
                <ul class="year_divide_tab">
                    <li class="selected">
                        <router-link to="/about/grouprnd">현재 ~ 2018</router-link>
                    </li>
                    <li>
                        <router-link to="/about/grouprnd2">2017 ~ 2012</router-link>
                    </li>
                </ul>
            </div>
        </section>
        <section class="year_content">
            <div class="year_last">
                <table class="year_last_box">
                    <dl class="year-box">
                    <dt> 
                        <strong class="str">2019</strong> 
                    </dt>
                    <dd>
                        <p>
                            <span>01월&nbsp;&nbsp;제조사 i24 A 사업 수주</span>
                        </p>
                    </dd>
                    </dl>
                    <dl class="year-box">
                            <dt> 
                              <strong>2018</strong> 
                            </dt>
                            <dd>
                                <p>
                                    <span>11월&nbsp;&nbsp;i24 R 일본 출원 (출원번호 2018-559737)</span>
                                    <span>10월&nbsp;&nbsp;병원 i24 A 사업 수주</span>
                                    <span>08월&nbsp;&nbsp;2018 대한민국 ICT(정보통신기술) 대상 수상</span>
                                    <span>07월&nbsp;&nbsp;제조사 i24 A 사업 수주</span>
                                    <span>07월&nbsp;&nbsp;i24 A RSA AP&J 참가</span>
                                    <span>07월&nbsp;&nbsp;24 A GS 인증 1등급 (인증번호 18-0402)</span>
                                    <span>06월&nbsp;&nbsp;24 R 특허 등록 (특허 제 10-1883713 호)</span>
                                    <span>05월&nbsp;&nbsp;여행사 i24 A 사업 수주</span>
                                    <span>09월&nbsp;&nbsp;i24A ICT기술사업화페스티벌 참가</span>
                                </p>
                            </dd>
                    </dl>
                </table>
            </div>
        </section>
        </section>
    </div>
</template>
<script>
import groupSubTop from '../../components/about/groupSubTop';
export default {
    name: 'abourGroupRnd',
    components: {
        groupSubTop,
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
a { text-decoration: none; color: #959595 'Apple SD Gothic';}
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
    border-radius: 30px;
    font-weight: bold;
  }
  .subStatic>.boxB {
    z-index: 1;
    color: #222;
    font-weight: bold;
  }
  
  .sub_con_about ul li .boxB {
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
  /* 연혁 탭 */
  .history_container {
    max-width: 1140px;
    height: auto;
    margin: 30px auto;
  } 
  .year {
    
  }
  /* 연혁 상단 박스 */
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

  .year_divide_tab li a {
    display: block;
    width: 100%; color: #959595;
  }
  .year_divide_tab>li.selected {
    background-color: #f36e21;
  }
  .year_divide_tab>li.selected a {
    color: #fff;
  }
   .year_content {
    max-width: 1140px;
    height: auto;
    margin: 0 auto;
  }
  .year_last {

  }
  .year_last_box {
    position: relative;
    display: flex; justify-content: space-evenly; flex-direction: column;
    margin-top: 70px;
    width: 100%;
  }
  .year_last_box::before {
    position: absolute;
    top: 18px; left: 335px;
    display: block; content: "";
    width: 1px; height: 100%;
    background-color: #ddd;
  }
  .year-box {
    display: flex;
    width: 100%;
  }
  .year_last_box dt {
    display: block;
    width: 25%;
    font-size: 36px;
    line-height: 50px;
    color: #222;
    font-weight: 500;
    letter-spacing: -0.5px;
    margin-right: 100px;
  }
  .year-box dt strong {
    color: #222;
  }
  .year-box dt .str {
    color: #f36e21;
  }
  .year_last_box dd {
    position: relative;
    padding-bottom: 50px;
  }
  .year_last_box dd>p {
    position: relative;
    zoom: 1;
    padding: 11px 0;
    display: flex; flex-direction: column; align-items: center;
  }
  .year_last_box dd p span {
    position: relative;
    width: 100%; margin-bottom: 30px;
    text-align: left;
  } 
  .year_last_box dd p span::before {
   position: absolute;
   top: 5px; left: -55px;
   content: ''; 
   width: 11px; height: 11px; background-color: #fff; 
   border: 2px solid #ddd; border-radius: 100%; 
  } 
</style>