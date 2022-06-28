<template>
    <div>
        <withsubtop msg="위드네트웍스"/>
        <section class="sub_content">
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
            <section class="history_container">
                <div class="year">
                    <ul class="year_divide_tab">
                        <li>
                            <router-link to="/about/history">2020 ~ 2019</router-link>
                        </li>
                        <li class="selected">
                            <router-link to="/about/history2">2018 ~ 2009</router-link>
                        </li>
                    </ul>
                </div>
                <section class="year_content">
                    <div class="year_last">
                        <table class="year_last_box">
                          <dl class="year-box">
                            <dt> 
                              <strong class="str">2018</strong> 
                            </dt>
                            <dd>
                                <p>
                                    <span>제주 스마트관광 무선랜 구축 사업</span>
                                    <span>i24R 솔루션 일본 특허 출원</span>
                                    <span>L제조사 i24 수주</span>
                                    <span>i24A 솔루션 특허 등록</span>
                                    <span>i24A 솔루션 GS 1등급 획득</span>
                                </p>
                            </dd>
                          </dl>
                          <dl class="year-box">
                            <dt> 
                              <strong>2017</strong> 
                            </dt>
                            <dd>
                                <p>
                                    <span>B 제약사 i24 사업 수주</span>
                                    <span>K 금융사 i24 사업 수주</span>
                                    <span>N 홀딩스 메일 APT 사업 수주</span>
                                    <span>M 금융사 메일 APT 사업 수주</span>
                                    <span>대전지사 설립</span>
                                </p>
                            </dd>
                          </dl>
                          <dl class="year-box">
                            <dt> 
                              <strong>2016</strong> 
                            </dt>
                            <dd>
                                <p>
                                    <span>i24A 솔루션 특허 등록</span>
                                    <span>Anti Malware 솔루션 i24A 개발 완료</span>
                                    <span>강원지사 계약</span>
                                    <span>Ruckus 플래티넘 파트너 등록</span>
                                    <span>에스원 MSSP사업 계약</span>
                                </p>
                            </dd>
                          </dl>
                          <dl class="year-box">
                            <dt> 
                              <strong>2015</strong> 
                            </dt>
                            <dd>
                                <p>
                                    <span>자본금 증자(총자본금 6.25억 / 파이오링크 투자 유치)</span>
                                    <span>충청/경북/대구지사 계약</span>
                                    <span>KT GiGA Office 총판 자격 취득</span>
                                    <span>KT 프리미엄 관리센터 오픈록</span>
                                    <span>자본금 증자(총자본금 5억원)</span>
                                </p>
                            </dd>
                          </dl>
                          <dl class="year-box">
                            <dt> 
                              <strong>2014</strong> 
                            </dt>
                            <dd>
                                <p>
                                    <span>KT Managed NW/무선랜 제품공급 사업 시행</span>
                                    <span>안랩 비즈니스 파트너 등록</span>
                                    <span>파이오링크 비즈니스 파트너 등록</span>
                                </p>
                            </dd>
                          </dl>
                          <dl class="year-box">
                            <dt> 
                              <strong>2013</strong> 
                            </dt>
                            <dd>
                                <p>
                                    <span>KT Managed 설치 유지보수사 및 제품 공급사업자 선정</span>
                                    <span>서울시 및 강남구청 주관 일자리 창출기업 선정</span>
                                    <span>자본금 증자(총자본금 3억원)</span>
                                </p>
                            </dd>
                          </dl>
                           <dl class="year-box">
                            <dt> 
                              <strong>2012</strong> 
                            </dt>
                            <dd>
                                <p>
                                    <span>벤처기업 인증 및 등록</span>
                                    <span>KT Managed 보안 차세대 방화벽 제풍공급 사업 시행</span>
                                    <span>포티넷 골드 파트너 등록</span>
                                    <span>티맥스소프트/티베로 DBMS 총판 사업자 체결</span>
                                    <span>KT텔레캅 융합 보안 솔루션 파트너 사업 진행</span>
                                    <span>한드림넷 MSSP 총판 사업자 체결</span>
                                </p>
                            </dd>
                          </dl>
                          <dl class="year-box">
                            <dt> 
                              <strong>2011</strong> 
                            </dt>
                            <dd>
                                <p>
                                    <span>부산은행 IT시스템 공급 및 유지보수 사업 수주</span>
                                    <span>KT Managed 보안관제서비스 계약 체결</span>
                                    <span>KTDS Infra 보안 부분 통합유지보수 사업 수주</span>
                                    <span>KT Managed 기업보안상품에 SECU-1 공급</span>
                                    <span>부산지사 설립</span>
                                </p>
                            </dd>
                          </dl>
                          <dl class="year-box">
                            <dt> 
                              <strong>2010</strong> 
                            </dt>
                            <dd>
                                <p>
                                    <span>서울교통카드 시스템 미들웨어 유지보수 사업 수주</span>
                                    <span>KTDS 사내망 유지보수 사업 수주</span>
                                    <span>위드네트웍스 통합 정보보호솔루션 SECU-I 개발</span>
                                </p>
                            </dd>
                          </dl>
                           <dl class="year-box">
                            <dt> 
                              <strong>2009</strong> 
                            </dt>
                            <dd>
                                <p>
                                    <span>HKTDS 사내망 유지보수 사업 수주</span>
                                    <span>HP 비즈니스 파트너 체결</span>
                                    <span>영우디지털 비즈니스 파트너 체결</span>
                                    <span>㈜위드네트웍스 설립</span>
                                </p>
                            </dd>
                          </dl>
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
    name: 'abouthistory-2',
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
 a { text-decoration: none;
    color: #959595;}
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
    width: 100%;
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