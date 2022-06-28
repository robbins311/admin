<template>
    <div>
        <!-- Wrapper -->
        <b-container fluid>
            <!-- breadcrumb -->
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <!-- Main Card S -->
            <b-card class="mt-2" title="공지사항">
                <div class="overflow-hidden">
                    <!-- 첨부파일 유무 -->
                    <div class="d-flex">
                        <p class="fileText"> * 첨부파일이 있을시</p>
                        <b-icon icon="check2-square" variant="primary"></b-icon>
                    </div>
                    <b-table
                    id="my-table"
                    :items="items" 
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                    show-empty
                    stacked="md"
                    >
                    <!-- 제목 click하면 해당 페이지로 이동 -->    
                    <template v-slot:cell(1)='data'>
                        <router-link :to="{
                            path:`/admin/notice/${data.item[3]}`,
                            }" >{{data.value}}
                            <!-- file 있을시 아이콘 출력 -->
                            <b-icon v-if="!data.item[4] == ''" class="fileIcon" icon="check2-square" variant="primary" />
                        </router-link>
                    </template>
                    <!-- 버튼 click하면 해당 페이지로 이동 -->
                    <template v-slot:cell(3)="{item}">
                        <b-button size="sm" variant="primary" @click="editItem(item)">상세보기</b-button>
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
                <!-- 공지사항 등록페이지 이동 -->
                <div class="d-flex justify-content-end mt-2">
                    <b-button to="/admin/noticeform" size="sm" variant="primary">공지사항 등록하기</b-button>    
                </div>
            </b-card>
            <!-- Main Card E -->
        </b-container>
    </div>
</template>
<script>
import * as noticeApi from '@/api/notice';
import router from '../../router';
import store from '../../store'
export default {
    name: 'NoticeApp',
    components: {
        
    },
    props: {
      
    },
    data() {
        return {
            pageOptions: [10, 15, 20],
            // perPage: 한번에 볼 수 있는 row양
            perPage: 10,
            // currentPage: 현재 페이지
            currentPage: 1,
            // totalRows: 모든 데이터 양
            totalRows: 0,
            // 필드값
            fields: [
                {
                    key: '0',
                    label: '번호',
                },
                {
                    key: '1',
                    label: '제목',
                    thStyle: { width: "55%", textAlign: "center"},
                    tdClass: "tdSection",
                },
                {
                    key: '2',
                    thStyle: { textAlign: "center" },
                    label: '등록일',
                    tdClass: "tdSection",
                },
                {
                    key: '3',
                    label: '상세보기'
                },
            ],
            //items: 실제 데이터, axios와 묶여있는 데이터가 바뀌는 즉시 테이블도 변경된다.
            items: [],
            // isBusy: 데이터를 불러오는 중 또 다른 요청을 막음. true 일때 table이 회색이 된다. 그러므로 완료 후 꼭 false가 되야한다.
            isBusy: false,
            bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: '공지사항',
                    href: '/admin/notice'
                },
                {
                    text: '공지사항 리스트',
                    active: true
                },
            ],
            
        }
    },
    computed: {
        rows() {
            return this.items.length
        },
    },

    created() {
        // components 최초 로딩시 뿌려줄 값
        this.getDataLoad()
    },
    methods: {
        alert() {
            this.$fire({
                title: "TITLE",
                text: "text",
                type: "success",
                timer: 2500
            }).then(r => {
                console.log(r.value)
            })
        },
        // item 인자값으로 view 페이지 이동
        editItem(item) {
            console.log(item)
            router.push(`/admin/notice/${item[3]}`)
            },
        //목록 불러오기
        getDataLoad(){
            noticeApi.getNoticeList().then((res) => {
                this.items = res.data.result
                console.log(res.data)
                console.log(res.data.result[0].NUM)
                const itemArray = this.items;
                // file 유무 확인
                for( let i = 0; i < itemArray.length; i++ ) {
                    if(itemArray[i].file == null || itemArray[i].file == '') {
                        itemArray[i].file = ''
                    } 
                }
                // resultMap = DB에서 받은 배열을 원하는 값만 뿌림
                const resultMap = itemArray.map((x) => {
                    return [x.NUM, x.TITLE, x.DATE, x.SEQ, x.file]
                })
                console.log(resultMap)
                return this.items = resultMap;
                // 날짜 변경
                /* for(let i = 0; i <= res.data.result.length; i++) {
                    let days = res.data.result[i].등록일.slice(0, 10)
                    this.$set(res.data.result[i], '등록일', days)
                } */
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
    .card {
        margin-right: 10px;
    }
    ::v-deep .tdSection {
        text-align: center !important;
    }
</style>