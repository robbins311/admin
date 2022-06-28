<template>
    <div>
        <!-- Wrapper -->
        <b-container fluid>
            <!-- breadcrumb -->
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <!-- Main Card S -->
            <b-card title="채용공고 현황">
                <div class="overflow-hidden">
                    <!-- 첨부파일 유무 -->
                    <div class="d-flex">
                        <p class="fileText"> * 첨부파일이 있을시</p>
                        <b-icon icon="check2-square" variant="primary"></b-icon>
                    </div>
                    <!-- List table -->
                    <b-table 
                    id="my-table"
                    :items="items" 
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                    >
                        <!-- 제목 click하면 해당 페이지로 이동 -->
                        <template v-slot:cell(3)='data'>
                            <router-link :to="{
                                path:`/admin/recruit/recruitview/${data.item[5]}`,
                                }" >{{data.value}}
                                <b-icon v-if="!data.item[6] == ''" class="fileIcon" icon="check2-square" variant="primary" />
                            </router-link>
                        </template>
                        <!-- view 페이지로 이동하기 -->
                        <template v-slot:cell(5)="{item}">
                            <b-button size="sm" variant="primary" @click="editItem(item)">detail</b-button>
                        </template>
                    </b-table>
                    <!-- pagination -->
                        <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        class="customPagination"
                        align="center"
                        aria-controls="my-table"
                        />
                    <!-- 채용공고 등록페이지 이동 -->
                <div class="d-flex justify-content-end mt-3">
                    <b-button to="/admin/recruit/recruitform" size="sm" variant="primary">채용공고 등록하기</b-button>
                </div>
                </div>
            </b-card>
            <!-- Main Card E -->
        </b-container>
    </div>
</template>
<script>
import * as recruitApi from '@/api/recruit';
import router from '../../../router';
import store from '../../../store'
export default {
    name: 'ApplyList',
    data() {
    return {
        // 첨부파일 유무 확인 flag
        flag: false,
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
                    label: 'No',
                },
                {
                    key: '1',
                    label: '분류',
                },
                {
                    key: '2',
                    label: '지원지역',
                },
                {
                    key: '3',
                    label: '채용공고명',
                    thStyle: { width: "35%", textAlign: "center"},
                    tdClass: "tdSection",
                },
                {
                    key: '4',
                    label: '등록일'
                },
                {
                    key: '5',
                    label: 'detail'
                },
            ],
        items: [],
        bread: [
            {
                text: '관리자페이지',
                href: '/'
            },
            {
                text: '채용공고',
                href: '/admin/recruit/recruitform'
            },
            {
                text: '채용공고 현황',
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
        // item 인자값으로 view 페이지 이동
        editItem(item) {
        console.log(item)
        router.push(`/admin/recruit/recruitview/${item[5]}`)
        },
        //목록 불러오기
        getDataLoad() {
            recruitApi.getRecruitList().then((res) => {
                console.log(res.data)
                this.items = res.data.result;
                const itemArray = this.items;
                for( let i = 0; i < itemArray.length; i++ ) {
                    if(itemArray[i].file == null || itemArray[i].file == '') {
                        itemArray[i].file = ''
                    } 
                }
                const resultMap = itemArray.map((x) => {
                    // api 값에 따라서 이름 바꿔야함
                    return [x.num, x.type, x.location, x.title, x.time, x.seq, x.date, x.file]
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
    ::v-deep .tdSection {
        text-align: center !important;
    }
</style>