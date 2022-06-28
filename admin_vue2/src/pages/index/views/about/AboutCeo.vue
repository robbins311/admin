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
            <li class="subStatic">
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
        <!-- content 회사소개란 -->
        <div class="content_com_wrap">
            <div class="content_it">
                <div class="content_it_with">
                <span>IT의 가치를 고객과 함께하는 기업</span>
                <br>
                <span>위드네트웍스 입니다.</span>
                </div>
                <div class="content_it_value">
                <span>위드네트웍스 홈페이지를 찾아주신 여러분 감사합니다.</span>
            </div>
        </div>
        </div>

        <!-- CEO  -->
        <div class="ceo_txt_wrap">
            <section class="left_sec">
                <p>
                    위드네트웍스는 2009년 설립 이래 치열한 국내 경쟁구도에서도
                    <br>
                    해마다 성장을 하고 있습니다. 모든 임직원들이 "IT 가치를 고객과 함께"라는
                    <br>
                    슬로건을 중심으로 열심히 뛰고 있습니다.
                </p>
                <span>
                    "위드네트웍스의 성장은
                    <br>
                    고객의 격려와 응원의 결과라고 생각합니다."
                </span>
            </section>
            <section class="right_sec">
                <span>
                    위드네트웍스는 IT서비스 전문기업입니다.
                </span>
                <p>
                    인재와 기술을 바탕으로 국내외 다양한 파트너사들과 협업을 통해 IT 전 분야의 컨설팅 및
                    <br>
                    기술력을 보유하고 있습니다.
                    <br>
                    최근 빠르게 변화하는 IT 시장 환경 속에서도 변화에 두려워하지 않는 기업으로 위드네트
                    <br>
                    웍스는 당당히 앞서 나아가고 있습니다.
                    <br>
                    도전과 혁신을 멈추지 않고 나아가는 "위드네트웍스"는 단기적 관점에서의 이익보다 IT가
                    <br>
                    치를 고객과 함께 공유하며 모법적인 기업으로서 사회적 책임과 역할을 다하는 기업을 만
                    <br>
                    들어 나가겠습니다.
                </p>
            </section>
        </div>
    </section>
    </div>
</template>
<script>
import withsubtop from '../../components/about/withSubTop'
export default {
    name: 'aboutCeo',
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
    font-size: 1.4rem;
    color: #222;
  }
  .ceo_txt_wrap {
    max-width: 1220px;
    margin: 20px auto;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
  }
  .left_sec {
    display: flex; flex-direction: column; justify-content: space-around; align-items: flex-start;
    height: 250px;
    text-align: left;
    margin-top: 5px;
  }
  .left_sec p {
    line-height: 1.8;
    font-size: 16px;
  }
  .left_sec span {
    font-size: 28px;
    font-weight: bold;
    color: #000;
  }
  .right_sec {
    display: flex; flex-direction: column; align-items: flex-start; justify-content: space-evenly;
    height: 300px;
    text-align: left;
  }
  .right_sec span {
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }
  .right_sec p {
    line-height: 1.8;
    font-size: 16px;
  }
</style>