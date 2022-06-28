<template>
    <div>
        <mapTop msg="오시는길"/>
        <section class="sub_content">
            <article class="divide_area">
                <!-- 지도 -->
                <div class="map_area">
                    <AddGoogleMap />
                </div>
                <!-- 지사 정보 -->
                <div class="info_area">
                    <!--  지사 ul  -->
                    <div class="branch">
                        <ul>
                            <li>본사</li>
                            <li>부산지사</li>
                            <li>대전지사</li>
                            <li>호남지사</li>
                            <li>대구지사</li>
                        </ul>
                    </div>
                    <!-- 지사 정보 -->
                    <div class="branch_info">
                        <h3>본사</h3>
                        <p>서울특별시 용산구 한강로3가 40-9 용일빌딩 2,3,4 층</p>
                        <!-- 오시는길 wrap -->
                        <div class="way_wrap">
                            <p><strong>오시는길</strong></p>
                            <!-- 지하철 -->
                            <div class="subway">
                                <h2>
                                    <p></p>
                                    지하철
                                </h2>
                                
                                <ul>
                                    <li>4호선 신용산 3번 출구 도보 9분</li>
                                    <li>경의중앙 용산 1번 출구 도보 10분</li>
                                    <li>1호선 용산 1번 출구 도보 10분</li>
                                </ul>
                            </div>
                            <!-- 버스 -->
                            <div class="bus">
                                <h2>버스</h2>
                                <ul>
                                    <li>정류장: 한강대교북단 / 0017 / 도보 2분</li>
                                    <li>정류장: 한강대교북단.LG유플러스 / 100, 150, 151, 152, 500, 501, 504, 506, 507, 605, 750A, 750B, 751, 752, N15, 6001</li>
                                </ul>
                            </div>
                            <!-- 남바 -->
                            <div class="numbers">
                                <span>T. +82-2-1811-8633</span>
                                <span>F. +82-2-569-5614</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </div>
</template>
<script>
import mapTop from '../../components/about/MapTop';
import AddGoogleMap from '../../components/AddGoogleMap'
export default {
    name: 'aboutMap',
    components: {
        mapTop,
        AddGoogleMap,
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
* { font-family: 'NanumSquare',sans-serif; }
  .sub_content {
    max-width: 100%;
    margin: 0 auto; padding: 80px 15px;
  }
  .divide_area {
    width: 100%;
    height: auto;
    display: flex; justify-content: space-evenly;
  }
  /* 지도 */
  .map_area {
    width: 70%;
    border: 1px solid #ccc;
  }
  /* 지사 정보 */
  .info_area {
    width: 30%; height: auto; padding: 10px;
    border: 1px solid #ccc;
    display: flex;
  }
  /* 지사 ul */
  .branch {
    border-right: 1px solid #ccc;
    width: 40%; padding: 30px 10px;
  }
  .branch ul {
    display: flex; flex-direction: column; justify-content: space-around; align-items: flex-start;
    height: 300px;
  }
  .branch ul li  {
    height: 44px;
  }
  /* 지사 정보 */
  .branch_info {
    width: 60%; padding: 30px 10px;
    text-align: left;
  }
  .branch_info h3 {
    color: #333333;
    font-size: 1.5rem; font-weight: bold;
  }
  .branch_info p {
    margin-top: 14px;
    font-size: 0.85rem;
    line-height: 1.875rem;
    color: #777777;
  }
  /* 오시는길 wrap */
  .way_wrap {

  }
  .way_wrap p {

  }
  .way_wrap p strong {
    font-size: 1rem;
  }
  /* 지하철 */
  .subway {

  }
  .subway h2 {
    vertical-align: middle;
    font-size: 1.2rem;
    margin-right: 5px; color: #555;
  }
  .subway h2 p {
    /* width: 50px; height: 50px;
    background: url(../../assets/images/train-solid.svg) no-repeat center; */
  }
  .subway ul {
    color: #555;
    
  }
  .subway ul li {
    margin-bottom: 10px; padding-right: 25px;
    font-size: 0.87rem;
  }
  /* 버스 */
  .bus {

  }
  .bus h2 {
    vertical-align: middle; font-size: 1.2rem; color: #555; margin-right: 5px; 
  }
  .bus ul {
    color: #555;
  }
  .bus ul li {
    margin-bottom: 10px; padding-right: 25px;
    font-size: 0.87rem;
  }
  /* Numbers */
  .numbers {
    margin-top: 30px;
  }
  .numbers span {
    padding-right: 25px; margin-bottom: 10px;
    font-size: 0.85rem; color: #333333;
  }
</style>