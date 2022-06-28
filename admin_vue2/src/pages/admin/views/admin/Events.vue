<template>
    <div>
        <b-container fluid>
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <b-card title="이벤트 관리">
                <div class="overflow-hidden mt-4">
                    <b-table 
                    id="my-table"
                    :items="items" 
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                     />
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
export default {
    name: 'EventsApp',
    data() {
    return {
        perPage: 3,
        currentPage: 1,
        fields: ['no', '회사명', '담당자', 'EMAIL', '연락처', '지역', '문의내용', '개인정보동의','뉴스레터동의','등록날짜', '기능'],
        items: [
        { no: 1, 회사명: '서울성모병원', 담당자: '지정호', EMAIL: 'ho1122@catholic.ac.kr', 지역:'서울', 문의내용: 'Endpoint 에서 랜섬웨어 감염 시 실시간으로 암호화', 개인정보동의: 'Y', 뉴스레터동의: 'Y', 등록날짜: '2022-05-09 18:43:05', 기능: ''},
        ],
        bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: '이벤트 관리',
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
}
</script>
<style>
    
</style>