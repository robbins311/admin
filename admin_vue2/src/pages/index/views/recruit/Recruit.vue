<template>
    <div>
        <b-container fluid="xl">
            <b-card title="채용공고">
                <div class="overflow-hidden mt-4">
                    <b-table 
                    id="my-table"
                    :items="items" 
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                    >
                    <!-- 제목 클릭하면 지원하기 -->
                    <template v-slot:cell(2)='data'>
                        <router-link :to="{
                            path:`/recruit/${data.item[4]}`,
                            }" >{{data.value}} 
                        </router-link>
                    </template>
                    <template v-slot:cell(3)='date'>
                        <span>
                            {{date.item[3] == null || date.item[3] == '' ? '' : date.item[3]}}
                        </span>
                    </template>
                    <!-- 버튼 click하면 해당 페이지로 이동 -->
                    <template v-slot:cell(4)="{item}">
                        <b-button class="recruitBtn" size="sm" variant="primary" @click="editItem(item)">지원하기</b-button>
                    </template>
                    </b-table>
                    <b-row align-h="center">
                        <b-col cols="3">
                            <b-pagination
                            v-model="currentPage"
                            :total-rows="rows"
                            :per-page="perPage"
                            aria-controls="my-table"
                            />
                        </b-col>
                    </b-row>
                </div>
            </b-card>
        </b-container>
    </div>
</template>
<script>
import * as recruitApi from '@/api/recruit';
import router from '../../router';
export default {
    name: 'RecruitApp',
    components: {

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
            items: [],
            fields: [
                {
                    key: '0',
                    label: '번호',
                },
                {
                    key: '1',
                    label: '분류',
                },
                {
                    key: '2',
                    label: '제목',
                },
                {
                    key: '3',
                    label: '모집기간'
                },
                {
                    key: '4',
                    label: '지원하기'
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
            console.log(item[4])
            router.push(`/recruit/${item[4]}`)
        },
        getDataLoad() {
            recruitApi.getRecruitList().then((res) => {
                console.log(res.data)
                this.items = res.data.result;
                const itemArray = this.items;
                console.log(this.items)
                // 상시채용시 모집기간 빈칸 출력
                for(let i = 0; i < itemArray.length; i++) {
                    if(itemArray[i].type !== '기간지정') {
                        itemArray[i].date = '';
                    }
                }
                const resultMap = itemArray.map((x) => {
                    return [x.num, x.type, x.title, x.date, x.seq]
                })
                console.log(resultMap)
                return this.items = resultMap ;
            })
        }
    },

}
</script>
<style scoped>
    .card {
    padding: 20px;
    }
    .card-title {
    margin-top: 15px;
    font-size: 2rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
    }
    .buttonLayout {
        position: relative;
        left: 0;
    }
    #my-table a { text-decoration: none !important; color: #1b1b1b !important; }
    #my-table a:hover {
        color: #0d6efd !important;
    }
    .recruitBtn {
        width: 130px;
        height: 40px;
        border-radius: 0;
        border: 1px solid #f36e21;
        background-color: #f36e21;
    }
    .recruitBtn:hover {
        background-color: #da5d15;
        border: none;
    }
</style>