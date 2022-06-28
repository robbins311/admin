<template>
    <div class="subNavBar">
      <div class="subNav">
          <!-- 회사소개 submenu -->
        <ul>
            <li v-for="(list, idx) in abLists" :key="idx">
                <router-link :to="list.route">{{list.title}}</router-link>
            </li>
        </ul>
        <!-- 사업소개 submenu -->
        <ul>
            <li v-for="(list, idx) in bnlists" :key="idx">
                <router-link :to="list.route">{{list.title}}</router-link>
            </li>
        </ul>
        <!-- 자료센터 submenu -->
        <ul>
            <li v-for="(list, idx) in broLists" :key="idx">
                <router-link :to="list.route">{{list.title}}</router-link>
            </li>
        </ul>
        <!-- 위드소식 submenu -->
        <ul>
            <li v-for="(list, idx) in newsLists" :key="idx">
                <router-link :to="list.route">{{list.title}}</router-link>
            </li>
        </ul>
        <!-- 채용정보 submenu -->
        <ul>
            <li v-for="(list, idx) in rcLists" :key="idx">
                <router-link :to="list.route">{{list.title}}</router-link>
            </li>
        </ul>
        <!-- 파트너 submenu -->
        <ul>
            <li v-for="(list, idx) in ptLists" :key="idx">
                <router-link :to="list.route">{{list.title}}</router-link>
            </li>
        </ul>
      </div> 
    </div>
</template>
<script>
//import router from '../router'
export default {
    name: 'navBar',
    data() {
        return {
            // 회사소개

            abLists:[
                    { id: 1, title: "위드네트웍스", route: '/about' },
                    { id: 2, title: "조직구성", route: "/Group" },
                    { id: 3, title: "오시는길", route: "/Map"},
            ],
            // 사업소개
            bnlists:[
                    { id: 1, title: "정보보안", route: '/business' },
                    { id: 2, title: "IT인프라", route: "/Infra" },
                    { id: 3, title: "보안서비스", route: "/Managed"},
                    { id: 4, title: "공공와이파이", route: "/FreeWifi"},
                    { id: 5, title: "IoT", route: "/IoT"},
                    { id: 6, title: "자사솔루션", route: "/withVtm"},
            ],
            // 자료센터
            broLists:[
                    { id: 1, title: "브로슈어", route: '/brochure' },
                    { id: 2, title: "매뉴얼", route: "/Manual" },
                    { id: 3, title: "업데이트", route: "/Update"},
            ],
            // 위드소식
            newsLists:[
                    { id: 1, title: "공지사항", route: '/news' },
                    { id: 2, title: "보도자료", route: "/PressList" },
                    { id: 3, title: "인증및수상", route: "/AwardList"},
            ],
            // 채용정보
            rcLists:[
                    { id: 1, title: "본사채용공고", route: '/recruit' },
                    { id: 2, title: "지사채용공고", route: "/Recruit1" },
            ],
            // 파트너
            ptLists:[
                    { id: 1, title: "Partners", route: '/partners' },
                    { id: 2, title: "Reference", route: "/Reference" },
                    { id: 3, title: "i24", route: "/i24Partners"},
            ],

        }
    },
    methods: {

    },
}
</script>
<style scoped>
    @import '../assets/css/header/navbar.css';
</style>