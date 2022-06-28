<template>
    <div>
        <!-- Wraper -->
        <b-container fluid>
            <!-- breadcrumb -->
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <!-- Main Card S -->
            <b-card title="보도자료">
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
                        <img :src="`http://localhost:5005${image.item[1]}`" alt="thumbnail" width="80" height="56">
                    </template>
                    <!-- View페이지 바로가기 -->
                    <template v-slot:cell(2)='data'>
                        <router-link :to="{
                            path:`/admin/press/${data.item[5]}`,
                            }" >{{data.value}} </router-link>
                    </template>
                    <!-- 링크 걸기 -->
                    <template v-slot:cell(3)='link'>
                        <a target="_blank" :href="`${link.item[3]}`"  >{{ link.item[3] == "링크없음" ? '링크없음' : '바로가기' }}</a>
                    </template>
                    <!-- 버튼 click하면 해당 페이지로 이동 -->
                    <template v-slot:cell(5)="{item}">
                        <b-button size="sm" variant="primary" @click="editItem(item)">detail</b-button>
                    </template>
                    </b-table>
                    <!-- Pagination -->
                        <b-pagination
                        class="customPagination"
                        v-model="currentPage"
                        align="center"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="my-table"
                        />
                </div>
                <div class="d-flex justify-content-end mt-2">
                    <b-button to="/admin/pressform" size="sm" variant="primary">보도자료 등록하기</b-button>
                </div>
            </b-card>
        </b-container>
    </div>
</template>
<script>
import * as pressApi from '@/api/press';
import router from '../../router';
import store from '../../store'
export default {
    name: 'PressApp',
    data() {
        return {
            pageOptions: [10, 15, 20],
            // perPage: 한번에 볼 수 있는 row양
            perPage: 7,
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
                    thStyle: { width: "35%", textAlign: "center"},
                    tdClass: "tdSection",
                },
                {
                    key: '3',
                    label: '링크'
                },
                {
                    key: '4',
                    thStyle: { width: '18%' },
                    label: '등록일'
                },
                {
                    key: '5',
                    label: 'detail'
                },
            ],
            bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: '보도자료',
                    href: '/admin/press'
                },
                {
                    text: '보도자료 리스트',
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
            router.push(`/admin/press/${item[5]}`)
            },
        getDataLoad() {
            pressApi.getPressList().then((res) => {
                console.log(res.data)
                this.items = res.data.result;
                const itemArray = this.items;
                // link가 null값이나 공백일 경우 '링크없음' 출력
                for (let i = 0; i < itemArray.length; i++) {
                    if(itemArray[i].link == null || itemArray[i].link == '') {
                        itemArray[i].link = '링크없음'
                    }
                }
                const resultMap = itemArray.map((x) => {
                    return [x.num, x.file, x.title, x.link, x.time, x.seq]
                })
                console.log(resultMap);
                return this.items = resultMap;
            })
            .catch((e) => {
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