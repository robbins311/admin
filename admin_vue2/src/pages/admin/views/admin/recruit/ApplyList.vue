<template>
    <div>
        <!-- Wrapper -->
        <b-container fluid>
            <!-- breadcrumb -->
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <!-- Main Card S -->
            <b-card title="지원자 현황">
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
                        <template v-slot:cell(1)='data'>
                            <router-link :to="{
                                path:`/admin/recruit/applyview/${data.item[8]}`,
                                }" >{{data.value}}
                                <b-icon v-if="!data.item[6] == ''" class="fileIcon" icon="check2-square" variant="primary" />
                            </router-link>
                        </template>
                        <!-- 첨부파일(이력서) -->
                        <template v-slot:cell(6)='data'>
                            <!-- 첨부파일 유무 확인 -->
                            <a target="_blank" :href="`http://localhost:5005/download?filePath=${data.item[6]}`"  >{{ data.item[6] == "첨부파일 없음" ? '첨부파일 없음' : '첨부파일' }}</a>
                        </template>
                        <!-- view 페이지로 이동하기 -->
                        <template v-slot:cell(8)="{item}">
                            <b-button size="sm" variant="primary" @click="editItem(item)">detail</b-button>
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
import * as applicantApi from '@/api/applicant';
import router from '../../../router';
import store from '../../../store'
export default {
    name: 'RecruitList',
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
                    label: 'No',
                },
                {
                    key: '1',
                    label: '채용공고명',
                },
                {
                    key: '2',
                    label: '지원지역',
                },
                {
                    key: '3',
                    label: '지원자'
                },
                {
                    key: '4',
                    label: '이메일'
                },
                {
                    key: '5',
                    label: '핸드폰'
                },
                {
                    key: '6',
                    label: '이력서'
                },
                {
                    key: '7',
                    label: '접수일자'
                },
                {
                    key: '8',
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
                href: '/admin/recruit/applylist'
            },
            {
                text: '지원자 현황',
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
        this.getDataLoad();
    },
    methods: {
        editItem(item) {
            console.log(item)
            router.push(`/admin/recruit/applyview/${item[8]}`)
        },
        getDataLoad() {
            // 지원자 list
                applicantApi.getApplicantList().then((res) => {
                    console.log(res.data)
                    this.items = res.data.result;
                    const itemArray = this.items;
                    for( let i = 0; i < itemArray.length; i++ ) {
                    if(itemArray[i].file == null || itemArray[i].file == '') {
                        itemArray[i].file = ''
                    } }
                    console.log(itemArray)
                    const resultMap = itemArray.map((x) => {
                        // api 값에 따라서 이름 바꿔야함
                        return [x.num, x.title, x.location, x.name, 
                        x.email, x.tel, x.file, x.time, x.seqApplicant]
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
<style>
    
</style>