<template>
    <div>
        <h1>공지사항</h1>
        <b-container fluid="xl">
            <!-- 테이블
                show-empty: 데이터가 없을때 없다고 표시
                stacked: 모바일 등 필드가 다 표시가 안될때 아래로 정렬
                items: 데이터. axios 등으로 외부 api를 등록하면 데이터 동기화가 된다.
                fields: 표시할 컬럼
                current-page, per-page, sort-by.sync, sort-desc.sync, filter: 위에 선언된 변수, 데이터 동기화 된다.
                no-local-sorting: 로컬소팅을 안 쓰겠다.
                busy.sync: 데이터 동기화 중 재동기화 방지
              -->
            <!-- <b-table class="mt-4 mb-4" 
                show-empty
                stacked="md" 
                :items="items"
                :fields="fields"
                :current-page="currentPage"
                :per-page="perPage"
                :filter="filter"
                no-local-sorting
            > -->
                <!-- 
                    template slot: 표현될 데이터가 단순 text가 아닐경우
                    해당 슬롯(cell)내용을 원하는대로 바꿀 수 있다.

                    row: 각 row의 데이터 객체
                     -items: 실제 데이터가 들어있음 eg)(row.items.id)
                     -row.toggleDetail: 해당 row를 클리했을 때 아래로 자세한 내용 화면 토글
                     -row-detail: 간단한 카드 등록
                 -->
            <!-- </b-table> -->
            <b-table 
            hover 
            :items="items" 
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            show-empty
            >
                <template v-slot:cell(title)="data">
                    <router-link :to="`/news/${data.item.SEQ}`">{{data.value}}</router-link>
                </template>
            </b-table>
                    <div class="d-flex justify-content-center">
                        <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="my-table"
                        />
                    </div>
        </b-container>
    </div>
    
</template>
<script>
import * as noticeApi from '@/api/notice';
export default {
    data() {
        //const contentId = Number(this.$router.params._id)
        return {
            // 스크립트 데이터 설명
            // 화면에 표시할 헤더부분(th), sortTable이 true면 sort버튼이 나오며 자동연동sort 된다.
            fields: [],
            // isBusy: 데이터를 불러오는 중 또 다른 요청을 막음. true 일때 table이 회색이 된다. 그러므로 완료 후 꼭 false가 되야한다.
            isBusy: false,
            // items: 실제 데이터, axios와 묶여있는 데이터가 바뀌는 즉시 테이블도 변경된다.
            // 실제 백엔드 db와 연결 할 때는 [] <= 빈 배열로 넣어야함
            items: [],
            // currentPage: 현재 페이지
            currentPage: 1,
            // perPage: 한번에 볼 수 있는 row양
            perPage: 10,
            // totalRows: 모든 데이터 양
            totalRows: 0,
            // pageOptions: perPage할 양 정의
            pageOptions: [10, 15, 20],
            // sortBy: sort할 필드명
            sortBy: 'ut',
            // sortDesc: 소트 내림차, 오름차 방향
            sortDesc: false,
            // filter: 검색어
            filter: '',
            draw: 0,
            // form: 글 작성시 데이터, admin 페이지에서 필요함.
        }
    },
    computed: {
        rows() {
            return this.items.length
        },
    },
    created() {
        this.getDataLoad()
    },
    methods: {
      getDataLoad(){
            noticeApi.getNoticeList().then((res) => {
                this.items = res.data.result
                console.log(res.data.result)
                console.log(this.items)
            })
            .catch(function(e){
                console.log(e);
            })
        },
    },

}
</script>
<style>
    * { font-family:  'Apple SD Gothic'; }
</style>