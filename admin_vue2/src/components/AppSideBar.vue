<template>
  <div>
      <!-- Sidebar Wrapper -->
      <b-card id="sidebar" no-body deck>
      <div class="px-2 py-3">
          <!-- Sidebar 상단 로고 -->
        <div class="d-flex justify-content-center">
            <router-link to="/admin/notice">
            <b-img class="ml-4 mb-3" :src="require('../assets/img/logo.png')" fluid />
            </router-link>
        </div>
        <!-- Sidebar main S -->
        <b-nav 
            vertical
            pills
            fill
            hover
            align="left"
            class="mt-2"
            >
                <b-nav-item to="/admin/notice">   
                    <b-row>
                        <b-col cols="4">
                            <b-icon icon="broadcast" />
                        </b-col>
                        <b-col cols="8">
                            <span>공지사항</span>
                        </b-col>
                    </b-row>
                </b-nav-item>
            
            <b-nav-item to="/admin/press">
                <b-row>
                    <b-col cols="4">
                        <b-icon icon="newspaper" />
                    </b-col>
                    <b-col cols="8">
                        <span>보도자료</span>
                    </b-col>
                </b-row>
            </b-nav-item>

            <b-nav-item to="/admin/award">
                <b-row>
                    <b-col cols="4">
                        <b-icon icon="award" />
                    </b-col>
                    <b-col cols="8">
                        <span id="long">인증 및 수상</span>
                    </b-col>
                </b-row>
            </b-nav-item>
            
            <b-nav-item to="/admin/brochure">
                <b-row>
                    <b-col cols="4">
                        <b-icon icon="journal" />
                    </b-col>
                    <b-col cols="8">
                        <span>브로슈어</span>
                    </b-col>
                </b-row>
            </b-nav-item>

            <b-nav-item to="/admin/manual">
                <b-row>
                    <b-col cols="4">
                        <b-icon icon="book" />
                    </b-col>
                    <b-col cols="8">
                        <span>매뉴얼</span>
                    </b-col>
                </b-row>
            </b-nav-item>

            <b-nav-item to="/admin/update">
                <b-row>
                    <b-col cols="4">
                        <b-icon icon="cloud-download" />
                    </b-col>
                    <b-col cols="8">
                        <span>업데이트</span>
                    </b-col>
                </b-row>
            </b-nav-item>

            <b-nav-item to="/admin/question">
                <b-row>
                    <b-col cols="4">
                        <b-icon icon="exclamation-diamond" />
                    </b-col>
                    <b-col cols="8">
                        <span>제품문의</span>
                    </b-col>
                </b-row>
            </b-nav-item>

            <b-nav-item to="/admin/events">
                <b-row>
                    <b-col cols="4">
                        <b-icon icon="gear" />
                    </b-col>
                    <b-col cols="8">
                        <span>이벤트</span>
                    </b-col>
                </b-row>
            </b-nav-item>

            <b-nav-item to="/admin/promotion">
                <b-row>
                    <b-col cols="4">
                        <b-icon icon="mic" />
                    </b-col>
                    <b-col cols="8">
                        <span>프로모션</span>
                    </b-col>
                </b-row>
            </b-nav-item>
            
            <!-- 2depth menu collapse 채용공고 -->
            <b-nav-item v-b-toggle.collapse-2>
                <b-row>
                    <b-col cols="4">
                        <b-icon icon="person-plus" />
                    </b-col>
                    <b-col cols="8">
                        <b-row>
                            <b-col cols="9">
                                <span>채용공고</span>
                            </b-col>
                            <b-col cols="3">
                                <b-icon icon="caret-down"  font-scale="0.98" variant="light" />
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-nav-item>
            <b-collapse id="collapse-2">
                <b-nav-item class="item2depth" to="/admin/recruit/recruitform">
                    <b-icon icon="play" />
                    <span class="koSpDepth">채용공고 등록</span>
                </b-nav-item>
                <b-nav-item class="item2depth" to="/admin/recruit/recruitlist">
                    <b-icon icon="play" />
                    <span class="koSpDepth">채용공고 현황</span>
                </b-nav-item>
                <b-nav-item class="item2depth" to="/admin/recruit/applylist">
                    <b-icon icon="play" />
                    <span class="koSpDepth">지원자 현황</span>
                </b-nav-item>
                <b-nav-item class="item2depth" to="/admin/recruit/smtpsetting">
                    <b-icon icon="play" />
                    <span class="koSpDepth">SMTP 설정</span>
                </b-nav-item>
            </b-collapse>
            
            <!-- 2depth menu collapse 영문 -->
            <b-nav-item v-b-toggle.collapse-1>
                <b-row>
                    <b-col cols="4">
                        <b-icon icon="globe" />
                    </b-col>
                    <b-col cols="8">
                        <b-row>
                            <b-col cols="9">
                                <span>영문</span>
                            </b-col>
                            <b-col cols="3">
                                <b-icon icon="caret-down"  font-scale="0.98" variant="light" />
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-nav-item>
            <b-collapse id="collapse-1">
                <b-nav-item class="item2depth" to="/admin/global/en/ennotice">
                    <b-icon icon="play" />
                    <span class="sp2depth">Notice</span>
                </b-nav-item>
                <b-nav-item class="item2depth" to="/admin/global/en/enpress">
                    <b-icon icon="play" />
                    <span class="sp2depth">Press</span>
                </b-nav-item>
                <b-nav-item class="item2depth" to="/admin/global/en/enaward">
                    <b-icon icon="play" />
                    <span class="sp2depth">Award</span>
                </b-nav-item>
                <b-nav-item class="item2depth" to="/admin/global/en/enbrochure">
                    <b-icon icon="play" />
                    <span class="sp2depth">Brochure</span>
                </b-nav-item>
                <b-nav-item class="item2depth" to="/admin/global/en/enmanual">
                    <b-icon icon="play" />
                    <span class="sp2depth">Manual</span>
                </b-nav-item>
                <b-nav-item class="item2depth" to="/admin/global/en/enupdate">
                    <b-icon icon="play" />
                    <span class="sp2depth">Update</span>
                </b-nav-item>
            </b-collapse>
        </b-nav>
        <!-- Sidebar main E -->
      </div>
      </b-card>
  </div>
</template>

<script>

export default {
  name: 'AppSideBar',
  data() {
      return {
          
      }
  },
  components: {
    
  },
  methods: {

  },

}
</script>
<style scoped>
    /* moblie 전환시 sidebar 숨김 */
    @media (max-width: 872px) {
        #sidebar {
            display: none;
        }
    }
    /* Sidebar */
    #sidebar {
        margin-top: 8px;
        border-radius: 0.4rem;
        top: 0;
        bottom: 0;
        width: 100%;
        max-width: 16.625rem!important;
        overflow-y: auto;
        padding: 0;
        box-shadow: none;
        background: linear-gradient(195deg, #303033 0%, #191919 100%);
    }
    /* Sidebar Card */
    .card {
        border: none !important;
        background-color: #272729;
        margin-left: 0.5rem;
        min-height: 100vh;
        max-width: 35vh;
    }
    /* Sidebar li */
    .nav-item {
        height: 40px !important;
        margin-top: 10px;
    }
    .nav-item .nav-link {
      color:#fff !important
    }
    .nav-item .nav-link:hover {
        background-color: #344767;
    }
    span {
        letter-spacing: -0.01rem;
        font-size: 0.83rem;
    }
    #long {
        font-size: 0.83rem;
    }
    .item2depth {
        margin-top: 2px;
    }
    .sp2depth {
        padding-left: 5px;
        letter-spacing: normal;
        font-size: 0.85rem;
    }
    .koSpDepth {
        padding-left: 5px;
        letter-spacing: normal;
        font-size: 0.80rem;
    }

</style>
