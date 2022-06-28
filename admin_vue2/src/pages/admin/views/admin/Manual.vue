<template>
    <div>
        <!-- Wrapper -->
        <b-container fluid>
            <!-- breadcrumb -->
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <!-- Main Card S -->
            <b-card title="매뉴얼">
                <div class="overflow-hidden">
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
                    show-empty
                    stacked="md"
                    >
                    <!-- 제목 click하면 해당 페이지로 이동 -->
                    <template v-slot:cell(1)='data'>
                        <router-link :to="{
                            path:`/admin/manual/${data.item[4]}`,
                            }" >{{data.value}} 
                            <b-icon v-if="!data.item[2] == ''" class="fileIcon" icon="check2-square" variant="primary" />
                        </router-link>
                    </template>
                    <!-- 첨부파일 클릭하면 다운로드 -->
                    <!-- <template v-slot:cell(2)='data'>
                        <a target="_blank" :href="`http://localhost:5005/download?filePath=${data.item[2]}`"  >{{ data.item[2] == "첨부파일 없음" ? '첨부파일 없음' : '첨부파일' }}</a>
                    </template> -->
                    <!-- 버튼 click하면 해당 페이지로 이동 -->
                    <template v-slot:cell(4)="{item}">
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
                <!-- 등록페이지 이동 -->
                <div class="d-flex justify-content-end mt-3">
                    <b-button to="/admin/manualform" size="sm" variant="primary">매뉴얼 등록하기</b-button>
                </div>
            </b-card>
            <!-- Main Card E -->
        </b-container>
    </div>
</template>
<script>
import * as manualApi from '@/api/manual'
import router from '../../router'
import store from '../../store'
export default {
    name: 'ManualApp',
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
            items: [],
            fields: [
                {
                    key: '0',
                    label: 'no',
                },
                {
                    key: '1',
                    label: '제목',
                    thStyle: { width: "55%", textAlign: "center"},
                    tdClass: "tdSection",
                },
                {
                    key: '3',
                    label: '등록일'
                },
                {
                    key: '4',
                    label: 'detail'
                },
            ],
            bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: '매뉴얼',
                    href: '/admin/manual'
                },
                {
                    text: '매뉴얼 리스트',
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
        // item 인자로 해당 상세페이지로 이동
        editItem(item) {
            console.log(item)
            router.push(`/admin/manual/${item[4]}`)
        },
        //목록 불러오기
        getDataLoad() {
            manualApi.getManualList().then((res) => {
                console.log(res.data)
                this.items = res.data.result;
                const itemArray = this.items;
                for( let i = 0; i < itemArray.length; i++ ) {
                    if(itemArray[i].file == null || itemArray[i].file == '') {
                        itemArray[i].file = ''
                    } 
                }
                console.log(itemArray)
                const resultMap = itemArray.map((x) => {
                    return [x.num, x.title, x.file, x.time, x.seq]
                })
                console.log(resultMap)
                return this.items = resultMap;
            })
            .catch(function(e){
                setTimeout(store.commit('delToken'), 50000) 
                console.log(e);
            })
        }
    },
}
</script>
<style scoped>
    ::v-deep .tdSection {
        text-align: center !important;
    }
</style>