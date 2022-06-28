<template>
    <div>
        <groupSubTop msg="조직 구성"/>
        <section class="sub_content">
            <!-- content routing nav -->
            <div class="sub_con_about">
                <!-- on active class -->
                <ul>
                    <li class="subStatic">
                        <router-link to="/about/group" class="boxB">조직구성</router-link>
                    </li>
                    <li class="staticSub">
                        <router-link to="/about/grouprnd" class="boxB">R&D 센터</router-link>
                    </li>
                </ul>
            </div>
        <!-- 조직구성 -->
        <div class="tree-wrap">
            <h4>
                CEO
            </h4>
            <div class="tree">
                <ul>
                    <li>
                        <div class="indiv-tree-wrap">
                            <p>영업</p>
                            <ul class="indiv-tree">
                                <li>MSSP 영업부</li>
                                <li>솔루션 영업팀</li>
                                <li>지역영업본부</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="indiv-tree-wrap">
                            <p>기술지원</p>
                            <ul class="indiv-tree">
                                <li class="long">프리미엄관리센터</li>
                                <li>기술지원센터</li>
                                <li>정보보안팀</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="indiv-tree-wrap">
                            <p>R&D</p>
                            <ul class="indiv-tree">
                                <li>보안연구소</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="indiv-tree-wrap">
                            <p>관리</p>
                            <ul class="indiv-tree">
                                <li>경영지원실</li>
                                <li>사업관리팀</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="indiv-tree-wrap">
                            <p>기획/마케팅</p>
                            <ul class="indiv-tree">
                                <li>마케팅팀</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </section>
    </div>
</template>
<script>
import groupSubTop from '../../components/about/groupSubTop';
export default {
    name: 'aboutGroup',
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
  /* 조직구성 조직도 */
  .tree-wrap {
    width: 945px;
    margin: 50px auto;
    display: flex; justify-content: center; align-items: center;
    position: relative;
  }
  .tree-wrap h4 {
    border: 3px solid #f36e21;
    margin-right: 50px;
    margin-bottom: 20px;
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 100px;
  }
  .tree-wrap h4::after {
    content: '';
    position: absolute;
    background-color: #dfdcdc;
    width: 49px; height: 1px;
    top: 300px; left: 253px;
  }
  .tree {
    margin-bottom: 30px;
    position: relative;
  }
  .tree::after {
    content: '';
    position: absolute;
    background-color: #dedede;
    width: 1px;
    height: 460px;
    bottom: 60px; left: 0;
  }
  .tree ul {

  }
  .tree ul li {
      
  }
  .indiv-tree-wrap {
    position: relative;
    display: flex; justify-content: space-between; align-items: center;
    margin: 15px 0;
    line-height: 30px;
  }
  .indiv-tree-wrap::after {
    content: '';
    position: absolute;
    background-color: #dedede;
    height: 1px; width: 50px;
    left: -31px; top: 55px;
  }
  .indiv-tree-wrap p {
    border: 1px solid #959595; border-radius: 20px;
    width: 130px; height: 50px; line-height: 50px;
    background-color: #6b7786; color: #fff; font-weight: bold;
    margin: 0 20px;
  }

  .indiv-tree {
    position: relative;
    border: 1px solid #dedede; border-radius: 20px;
    background-color: #f7f3f3;
    width: 280px; height: 100px;
    margin-left: 10px;
    display:flex; align-content: center; flex-wrap: wrap; justify-content: flex-start; align-items: center;
    
  }
  .indiv-tree::before {
    content: '';
    position: absolute;
    background-color: #dedede;
    height: 1px; width: 29px;
    left: -30px; top: 50px;
  }
  
  .indiv-tree li {
    width: 95px;
    margin: 0 5px;
    font-size: 0.91rem;
    text-align: left;
    padding: 6px 1px;
  }
  
  .indiv-tree .long {
    letter-spacing: -1px;
    width: 100px;
  }

</style>>