<template>
  <div class="main">
    <section id="container" class="main-wrap">
      <!-- 솔루션 탭 -->
      <article class="solution-box">
        <h3>{{msg}}</h3>
        <p>Total ICT Security</p>
        <ul>
          <li class="list1">
            <router-link to="/business"> 
              Security
            </router-link>
          </li>
          <li class="list2">
            <router-link to="/business">
              Infrastructure
            </router-link>
          </li>
          <li class="list3">
            <router-link to="/business">
              Managed Service
            </router-link>
          </li>
          <li class="list4">
            <router-link to="/business">
              Solution
            </router-link>
          </li>
        </ul>
      </article>
      <!-- 회사소개 탭 -->
      <article class="company_box">
        <h3>withnetworks</h3>
        <div class="company_box_list">
          <ul class="thumbnailList">
            <li>
              <router-link to="/about">
                <p class="img"><img src="../assets\images\main_with_visual01.jpg" alt="about01"></p>
                <div class="txtwrap">
                  <span>회사소개</span>
                  <p class="tit">
                    고객의 입장에 선 Total 컨설팅을 통해 ICT혁신을 지지하는 기업입니다.
                  </p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/news">
                <p class="img"><img src="../assets\images\main_with_visual02.jpg" alt="about02"></p>
                <div class="txtwrap">
                  <span>인증 및 수상</span>
                  <p class="tit">
                    위드네트웍스의 인증 및 수상 내역을 확인하실 수 있습니다.
                  </p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/partners">
                <p class="img"><img src="../assets\images\main_with_visual03.jpg" alt="about02"></p>
                <div class="txtwrap">
                  <span>위드파트너</span>
                  <p class="tit">
                    위드네트웍스의 파트너사를 확인하실 수 있습니다.
                  </p>  
                </div>
              </router-link>
            </li>
          </ul>
        </div>
    </article>
    <!-- 보도자료 -->
    <article class="news_box">
      <div class="news_box_list">
        <h3>보도자료</h3>
        <ul class="news_list_area">
          <li>
            <a href="/about" class="photo_btn">
              <span class="photo">
                <span class="photo_area">
                  <span class="img1">
                  </span>
                </span>
              </span>
              <span class="info">
                <span class="mar"></span>
                <span class="title">
                [2022 보안기업] 위드네트웍스 “방화벽 정책 통합관리·취약점 통합관리에 주력”
                </span>
                <span class="date">
                  2022.02.07
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href="/about" class="photo_btn">
              <span class="photo">
                <span class="photo_area">
                  <span class="img2"></span>
                </span>
              </span>
              <span class="info">
                <span class="mar"></span>
                <span class="title">
                위드네트웍스, 국가생산성대회에서 산업부장관 표창 '4차 산업혁명 선도기업'
                </span>
                <span class="date">
                  2021.11.04
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href="/about" class="photo_btn">
              <span class="photo">
                <span class="photo_area">
                  <span class="img3"></span>
                </span>
              </span>
              <span class="info">
                <span class="mar"></span>
                <span class="title">
                위드네트웍스 티앤디소프트 보안 솔루션 판매 MOU 체결
                </span>
                <span class="date">
                  2022.07.28
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href="/about" class="photo_btn">
              <span class="photo">
                <span class="photo_area">
                  <span class="img4"></span>
                </span>
              </span>
              <span class="info">
                <span class="mar"></span>
                <span class="title">
                [MPIS 2021] 위드네트웍스 보안취약점 통합관리 솔루션 withVTM, 의료·금융
                </span>
                <span class="date">
                  2022.07.12
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href="/about" class="photo_btn">
              <span class="photo">
                <span class="photo_area">
                  <span class="img5"></span>
                </span>
              </span>
              <span class="info">
                <span class="mar"></span>
                <span class="title">
                위드네트웍스, KT 상반기 엔터프라이즈(Enterprise) 우수 파트너 시상
                </span>
                <span class="date">
                  2022.06.24
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href="/about" class="photo_btn">
              <span class="photo">
                <span class="photo_area">
                  <span class="img6"></span>
                </span>
              </span>
              <span class="info">
                <span class="mar"></span>
                <span class="title">
                [G-PRIVACY2020] 위드네트웍스, EDR·SI·EM·SOAR 연동 통한 강력한 보안
                </span>
                <span class="date">
                  2020.06.01
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href="/about" class="photo_btn">
              <span class="photo">
                <span class="photo_area">
                  <span class="img7"></span>
                </span>
              </span>
              <span class="info">
                <span class="mar"></span>
                <span class="title">
                위드네트웍스, 루커스 MSP 스페셜 파트너 자격 취득
                </span>
                <span class="date">
                  2020.05.25
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href="/about" class="photo_btn">
              <span class="photo">
                <span class="photo_area">
                  <span class="img8"></span>
                </span>
              </span>
              <span class="info">
                <span class="mar"></span>
                <span class="title">
                BNK부산은행, '위드플로우' 도입해 네트워크 방화벽 관리 효율성 높여
                </span>
                <span class="date">
                  2019.10.16
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  props: {
    msg: String,
    msg1: String,

  }
}
</script>


<style scoped>
@import '../assets/css/main/main.css'; 
* { color: #333; text-decoration: none;}

</style>
