<template>
    <div>
        <b-container fluid>
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <b-card title="프로모션">
                <div class="overflow-hidden mt-4">
                    <b-table 
                    id="my-table"
                    :items="items" 
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                     />
                        <b-pagination
                        v-model="currentPage"
                        align="center"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="my-table"
                        />
                </div>
                <div class="d-flex justify-content-end mt-3">
                    <b-button to="/admin/promotionform" size="sm" variant="primary">프로모션 등록하기</b-button>
                </div>
            </b-card>
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'PromotionApp',
    data() {
    return {
        perPage: 5,
        currentPage: 1,
        fields: ['no', '프로모션명', '등록일', '첨부파일', '프로모션 기간', '참여자', '문항관리', 'URL', '삭제'],
        items: [
        { no: 1, 프로모션명: '', 등록일: '' , 첨부파일: 'null', 프로모션기간:'', 참여자: '', 문항관리: '', URL: '', 삭제: '',},
        ],
        bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: '프로모션',
                    href: '/admin/promotion'
                },
                {
                    text: '프로모션 리스트',
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