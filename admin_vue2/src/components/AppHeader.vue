<template>
    <div id="header" no-gutters>
        <!-- web nav -->
        <b-navbar class="nav">
            <b-navbar-nav>
                    <b-nav-item href="/admin/notice">Home</b-nav-item>
                    <b-nav-item 
                    to="/admin/login"
                    v-if="!$store.getters.accessToken"
                    >Login</b-nav-item>
                    <b-nav-item 
                    @click="logout()" 
                    v-if="$store.getters.accessToken"
                    >Logout</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <!--E web nav -->
        
        <!-- mobile nav -->

        <!-- hamburger -->
        <div class="mbNav">
            <div v-b-toggle.sidebar-variant class="hamburger" >
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        <!-- hamburger E -->
        <!-- Sideber -->
        <b-sidebar 
            id="sidebar-variant" 
            title="WithNetworks" 
            bg-variant="dark" 
            text-variant="light"
            backdrop
            class="mt-4"
            >
            <!-- Mobile home login logout -->
            <div class="homeFamily d-flex justify-content-around mb-2">
                <b-nav-item href="/admin/notice">Home</b-nav-item>
                    <b-nav-item 
                    to="/admin/login"
                    v-if="!$store.getters.accessToken"
                    >Login</b-nav-item>
                    <b-nav-item 
                    @click="logout()" 
                    v-if="$store.getters.accessToken"
                    >Logout</b-nav-item>
            </div>
            <!-- E home login logout -->

            <!-- Mobile sidebar navigation -->
            <b-nav 
            vertical
            pills
            fill
            hover
            id="mbSidebar"
            align="left"
            class="mt-2"
            >
                <b-nav-item to="/admin/notice">   
                    <span>공지사항</span>
                </b-nav-item>
            
                <b-nav-item to="/admin/press">
                    <span>보도자료</span>
                </b-nav-item>

                <b-nav-item to="/admin/award">
                    <span id="long">인증 및 수상</span>
                </b-nav-item>
                
                <b-nav-item to="/admin/brochure">
                    <span>브로슈어</span>
                </b-nav-item>

                <b-nav-item to="/admin/manual">
                    <span>매뉴얼</span>
                </b-nav-item>

                <b-nav-item to="/admin/update">
                    <span>업데이트</span>
                </b-nav-item>

                <b-nav-item to="/admin/question">
                    <span>제품문의</span>
                </b-nav-item>

                <b-nav-item to="/admin/events">
                    <span>이벤트</span>
                </b-nav-item>

                <b-nav-item to="/admin/promotion">
                    <span>프로모션</span>
                </b-nav-item>
                
                <!-- 2depth menu collapse 채용공고 -->
                <b-nav-item v-b-toggle.collapse-2>
                    <span>채용공고&nbsp;&nbsp;</span>
                    <b-icon icon="caret-down"  font-scale="0.98" variant="light" />
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
                    <span>영문&nbsp;&nbsp;</span>
                    <b-icon icon="caret-down"  font-scale="0.98" variant="light" />
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
            <!-- E Mobile sidebar navigation -->
        </b-sidebar>
        </div>
        <!--E mobile nav -->
    </div>
</template>

<script>
import store from '../pages/admin/store'
export default {
  name: 'AppHeader',
  components: {
    
  },
  methods: {
      logout() {
          const token = store.getters.accessToken
          window.localStorage.removeItem('accessToken');
          alert('로그아웃 되었습니다.')
          store.commit('delToken', token)
      }
  },
}
</script>
<style scoped>
    /* CSS MOBILE START */
    @media (max-width:892px) {
        li { list-style: none; }
        /* SideBar 설정 S */
        #mbSidebar {
            display: block !important;
        }
        .mbNav {
            padding: 20px;
            border-radius: 0.4rem;
            display: block !important;
        }
        .nav {
            border-radius: 0.4rem;
            display: none !important;
        }
        .b-sidebar > .b-sidebar-header {
            margin-top: 10px;
        }
        .b-sidebar > .b-sidebar-header > strong {
            margin-top: 8px;
        }
        /* SideBar 설정 E */

        /* Home, Login, Logout S */
        .homeFamily {
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 1px solid hsla(0,0%,100%,.1);
        }
        .homeFamily .nav-item .nav-link:hover {
            background-color: transparent;
        }
        .homeFamily .nav-item .nav-link:hover {
            color:rgb(161, 159, 159) !important;
        }
        /* Home, Login, Logout E */

        /* SideBar 내부 item S */
        .card {
        border: none !important;
        background-color: #272729;
        margin-left: 0.5rem;
        min-height: 100vh;
        max-width: 35vh;
        }
        .nav-item {
            height: 40px !important;
            margin-top: 10px;
            margin-left: 0 !important;
            text-align: center;
        }
        .nav-item .nav-link {
            color:#fff !important;
            
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
        /* SideBar 내부 item E */

        /* Sidebar Icon 색상수정 */
        ::v-deep .b-sidebar-header button {
            background: none !important;
            border: none !important;
        }
        ::v-deep .b-icon.bi {
            background: none !important;
            color: #ccc !important;
        }
        /* Sidebar Icon END */

        /* 햄버거 START */
        .hamburger {
            position: absolute;
            top: 35px; left: 0;
            width:100px; 
            height:30px;
        }
        .hamburger .line:first-child {
            width: 27px;
            height: 2px;
            border-radius: 0.7rem;
            background-color: rgb(193 182 182 / 90%);
            display: block;
            margin: 6px auto;
        }
        .hamburger .line:nth-child(2) {
            width: 27px;
            height: 1.5px;
            border-radius: 0.7rem;
            background-color: rgb(193 182 182 / 90%);
            display: block;
            margin: 6px auto;
        }
        .hamburger .line:last-child {
            width: 27px;
            height: 2px;
            border-radius: 0.7rem;
            background-color: rgb(193 182 182 / 90%);
            display: block;
            margin: 6px auto;
        }
        /* 햄버거 END */

    /* CSS MOBILE END */
    }
    /* CSS WEB START */
    #header {
        margin-top: 8px;
        margin-right: 8px;
        
    }
    .nav {
        border-radius: 0.4rem;
    }
    .nav-item {
        margin-left: 20px;
    }
    .nav-item:hover .nav-link {
        color: #fff !important;
    }
    ::v-deep .nav-link, .dropdown-toggle{
        color: #a5a5a5 !important;
    }
    .navbar-expand {
        background: linear-gradient(60deg, #303033 100%, #191919 0%);
        height: 65px;
    }
    .mbNav {
        padding: 20px;
        border-radius: 0.4rem;
        display: none;
    }
    /* CSS WEB END */
</style>
