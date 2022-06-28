<template>
    <div>
        <!-- Wrapper -->
        <b-container class="bv-example-row mb-1" fluid>
            <!-- breadcrumb -->
        <b-breadcrumb id="breadc" class="pt-4 d-flex justify-content-end" :items="bread" />    
        <!-- Main Card S -->
            <b-card title="인증 및 수상">
                <div class="overflow-hidden">
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
                     <!-- Thumbnail -->
                    <template v-slot:cell(1)='image'>
                        <img :src="`http://localhost:5005${image.item[1]}`" alt="thumbnail" width="120" height="100">
                    </template>
                    <!-- 제목 click하면 해당 페이지로 이동 -->
                    <template v-slot:cell(2)='data'>
                        <router-link :to="{
                            path:`/admin/award/${data.item[4]}`,
                            }" >{{data.value}} </router-link>
                    </template>
                    <!-- 버튼 click하면 해당 페이지로 이동 -->
                    <template v-slot:cell(4)="{item}">
                        <b-button size="sm" variant="primary" @click="editItem(item)">detail</b-button>
                    </template>
                    </b-table>
                            <b-pagination
                            class="customPagination"
                            v-model="currentPage"
                            :total-rows="rows"
                            :per-page="perPage"
                            align="center"
                            aria-controls="my-table"
                            />
                </div>
                <div class="d-flex justify-content-end">
                    <b-button to="/admin/awardform" size="sm" variant="primary">인증 및 수상 등록하기</b-button>
                </div>
            </b-card>
            <!-- Main Card E -->
        </b-container>
    </div>
</template>
<script>
import * as awardApi from '@/api/award';
import router from '../../router';
import store from '../../store'
export default {
    name: 'AwardApp',
    data() {
        return {
            pageOptions: [10, 15, 20],
            // perPage: 한번에 볼 수 있는 row양
            perPage: 5,
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
                    label: '썸네일이미지',
                },
                {
                    key: '2',
                    label: '제목',
                },
                {
                    key: '3',
                    label: '등록일',
                    thStyle: { width: "20%"}
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
                    text: '인증 및 수상',
                    href: '/admin/award'
                },
                {
                    text: '인증 및 수상 리스트',
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
            router.push(`/admin/award/${item[4]}`)
            },
        //Award 목록 불러오기
        getDataLoad() {
            awardApi.getAwardList().then((res) => {
                console.log(res.data)
                this.items = res.data.result;
                const itemArray = this.items;
                const resultMap = itemArray.map((x) => {
                    return [x.num, x.file, x.title, x.time, x.seq]
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
    
</style>