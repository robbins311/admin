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
                <li class="staticSub">
                    <router-link to="/about/history" class="boxB">회사 연혁</router-link>
                </li>
                <li class="subStatic">
                    <router-link to="/about/cibi" class="boxB">CI / BI</router-link>
                </li>
                </ul>
            </div>
             <!-- cibi section -->
            <div class="content_ci">
                <h3 class="ci_tit">
                    <p>CI</p>
                </h3>
                <div class="ci">
                    <span>withnetworks</span>
                    <p>
                    위드네트웍스의 심볼마크는 두 사람이 손을 잡고 기도하는 모습을 형상화한 형태로서
                    <br>
                    ‘우리는 새로움으로 더불어 살아가기 위한 존재한다’는 미션을 담고 있습니다.
                    </p>
                </div>
                <div class="ci_area">
                    <div class="ci2">
                        <img src="../../assets/images/with_cibi_logo01.png" alt="withnetworks">
                    </div>
                </div>
                <div class="ci_area2">
                    <div class="ci3">
                        <img src="../../assets/images/with_cibi_logo02.png" alt="withnetworks2">
                    </div>
                </div>
                <div class="ciBtn">
                    <a class="ciDownload" href="">
                        withnetworks 로고 다운로드
                    </a>
                </div>
            </div>
            <!-- i24 section -->
            <div class="i24">
                <div class="i24_tit">
                    <span>i24</span>
                    <p>
                    i24의 ‘i’는 알약을 형상화 했으며 Immunizer의 약자로서
                    <br>
                    시스템의 근본적인 면역 체질을 강화하는 솔루션이라는 뜻입니다.
                    <br>
                    또한 ‘24’는 365일 24시간을 의미합니다. 따라서 i24는 24시간 고객의
                    <br>
                    안전한 보안 환경을 위해 보안 체질을 개선한다는 의미를 전달하고 있습니다.
                    </p>
                </div>
                <div class="bi_area">
                    <div class="bi">
                        <img src="../../assets/images/i24_logo_bi.png" alt="i24">
                    </div>
                </div>
                <div class="biBtn">
                    <a href="" class="biDownload">
                        i24 로고 다운로드 
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import withsubtop from '../../components/about/withSubTop'
export default {
    name: 'aboutCibi',
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
*{ font-family:'Noto Sans KR','Apple SD Gothic','맑은고딕',sans-serif; }
a { text-decoration: none; color: #ccc; }
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
  /* ci section */
  .content_ci {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
}
  .ci_tit {
    padding-bottom: 10px;
    text-align: left;
  }
  .ci_tit p {
    position: relative;
    padding-left: 37px;
    font-size: 1.6rem;
    color: #111;
    font-weight: 700;
    letter-spacing: -0.75px;
  }
  .ci_tit p::before {
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
  .ci {
    position: relative;
    top: 0;
    background-color: #fff;
    padding: 30px;
    margin-bottom: 50px;
  }
  .ci span {
    color: #222;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .ci p {
    margin-top: 22px;
    text-align: center;
    font-size: 1rem;
    color: #222;
  }
  .ci_area {
    width: 100%;
    padding: 0 8px;
    height: 250px;
    box-sizing: border-box;
  }
  .ci2 {
    width: 100%;
    height: 100%;
    padding: 65px 20px;
    border: 1px solid #e1e1e1;
    background: url(../../assets/images/bg_guide.jpg) repeat 0 0;
  }
  .ci_area img {
    text-align: center;
    vertical-align: middle;
    max-width: 500px;
    max-height: 100px;
  }
  .ci_area2 {
    margin-top: 30px;
    width: 100%;
    height: 250px;
    padding: 0 8px;
    margin-bottom: 50px;
    box-sizing: border-box;
  }
  .ci_area2 .ci3 img {
    text-align: center;
    vertical-align: middle;
    max-width: 225px;
    max-height: 209px;
  }
  .ci3 {
    width: 100%;
    height: 100%;
    padding: 20px 20px;
    border: 1px solid #e1e1e1;
    text-align: center;
    vertical-align: middle;
    background: url(../../assets/images/bg_guide.jpg) repeat 0 0;
  }
  .ciBtn {
      margin: 0 auto;
      max-width: inherit;
      height: 50px;
  }
  .ciDownload {
      padding: 10px 0;
      width: 250px;
      font-size: 0.95rem;
      color: #222;
      border-bottom: 2px solid #333;
  }

  /* i24 section */
  .i24 {
    max-width: 1200px;
    margin: 50px auto 30px;
    padding: 0;
}

  .i24_tit {
    position: relative;
    top: 0;
    background-color: #fff;
    padding: 30px;
    margin-bottom: 50px;
}
  .i24_tit span {
    color: #222;
    font-size: 1.3rem;
    font-weight: bold;
}
  .i24_tit p {
    margin-top: 22px;
    text-align: center;
    font-size: 1rem;
    color: #222;
}
  .bi_area {
    width: 100%;
    padding: 0 8px;
    height: 250px;
    margin-bottom: 50px;
    box-sizing: border-box;
  }
  .bi {
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    border: 1px solid #e1e1e1;
    background: url(../../assets/images/bg_guide.jpg) repeat 0 0;
  }
  .bi img {
    text-align: center;
    vertical-align: middle;
    max-width: 225px;
    max-height: 209px;
  }
  .biBtn {
    margin: 0 auto;
    max-width: inherit;
    height: 50px;
  }
  .biDownload {
    padding: 10px 0;
    width: 250px;
    height: 50px;
    font-size: 1rem;
    color: #222;
    border-bottom: 2px solid #333;
  }


</style>