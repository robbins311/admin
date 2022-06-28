<template>
    <div>
        <!-- Wrapper -->
        <b-container fluid>
            <!-- breadcrumb -->
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <!-- Main Card S -->
            <b-card title="제품문의글">
                <div class="overflow-hidden">
                    <!-- List table -->
                    <b-table 
                    id="my-table"
                    :items="items" 
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                    >
                    <!-- 상세페이지 이동 -->
                    <template v-slot:cell(8)='data'>
                        <router-link :to="{
                            path:`/admin/question/${data.item[8]}`,
                            }" >상세
                        </router-link>
                    </template>
                    </b-table>
                    <!-- pagination -->
                        <b-pagination
                        class="customPagination"
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        align="center"
                        aria-controls="my-table"
                        />
                </div>
            </b-card>
            <!-- Main Card E -->
        </b-container>
    </div>
</template>
<script>
import * as questionApi from '@/api/question'
import store from '../../store'
export default {
    name: 'QuestionsApp',
    data() {
    return {
        pageOptions: [10, 15, 20],
        // perPage: 한번에 볼 수 있는 row양
        perPage: 10,
        // currentPage: 현재 페이지
        currentPage: 1,
        // totalRows: 모든 데이터 양
        totalRows: 0,
        fields: [
                {
                    key: '0',
                    label: '#',
                },
                {
                    key: '1',
                    label: '회사명',
                },
                {
                    key: '2',
                    label: '담당자',
                },
                {
                    key: '3',
                    label: 'Email'
                },
                {
                    key: '4',
                    label: '연락처'
                },
                {
                    key: '5',
                    label: '지역'
                },
                {
                    key: '6',
                    label: '문의내용',
                    class: 'textForm'
                },
                {
                    key: '7',
                    label: '등록일'
                },
                {
                    key: '8',
                    label: 'D'
                },
        ],
        items: [],
        bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: '제품문의',
                    active: true
                },
            ],
    }
    },
    computed: {
        rows() {
            return this.items.length
        }
    },
    created() {
        // components 최초 로딩시 뿌려줄 값
        this.getDataLoad();
    },
    methods: {
        //목록 불러오기
        getDataLoad() {
            questionApi.getQuestionList().then((res) => {
                console.log(res.data)
                this.items = res.data.result;
                const itemArray = this.items;
                const resultMap = itemArray.map((x) => {
                    return [x.num, x.company, x.manager, x.email, x.tel, x.location
                    ,x.contents.slice(0,20) + '···', x.time, x.seq
                    ]
                })
                return this.items = resultMap;
            })
            .catch(function(e){
                setTimeout(store.commit('delToken'), 50000) 
                console.log(e);
            })
        },
    },
}
</script>
<style scoped>
    
#my-table a {
    text-decoration: none !important;
    color: #0d6efd !important;
    transition: all 1s;
}
#my-table a:hover {
    text-decoration: none !important;
    color: #1b1b1b !important;
}
</style>