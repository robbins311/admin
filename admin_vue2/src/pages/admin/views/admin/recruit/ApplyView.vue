<template>
    <!-- Wrapper -->
    <b-container fluid="xl">
        <!-- breadcrumb -->
        <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
        <!-- Main Card S -->
        <b-card class="mt-2">
            <div class="overflow-auto">
                <!-- 상세페이지 테이블 -->
                <b-table
                :items="items"
                :fields="fields"
                show-empty
                stacked
                responsive
                >
                <template v-slot:cell(5)='data'>
                    <a class="detailLink" target="_blank" :href="`http://localhost:5005/download?filePath=${data.item[5]}`" v-if="!flag" >{{data.item[7]}}</a>
                    <span v-if="flag">첨부파일 없음</span>
                </template>
                </b-table>
            </div>
            <!-- Button Box -->
            <div class="d-flex justify-content-end">
                <!-- 목록이동 -->
                <b-button @click="backList()" class="position-fixed-right" size="sm" variant="primary">목록가기</b-button>
                <!-- 게시글 삭제 -->
                <b-button @click="delPosts()" class="position-fixed-right" size="sm" variant="danger">지원서 삭제</b-button>
            </div>
        </b-card>
        <!-- Main Card E -->
    </b-container>
</template>
<script>
import * as applicantApi from '@/api/applicant';
import router from '../../../router';
import store from '../../../store'
export default {
    name: 'RecruitView',
    data() {
        return {
            applicantSeq: 0,
            flag: false,
            bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: '상세페이지',
                    active: true
                },
            ],
            items: [],
            fields: [
                {
                    key: '0',
                    label: '제목',
                },
                {
                    key: '1',
                    label: '지역',
                },
                {
                    key: '2',
                    label: '지원자 이름',
                },
                {
                    key: '3',
                    label: '이메일',
                },
                {
                    key: '4',
                    label: '핸드폰',
                },
                {
                    key: '5',
                    label: '이력서',
                },
                {
                    key: '6',
                    label: '접수일자',
                },
            ],
        }
    },
    created() {
        this.applicantData = this.$route.params;
        this.applicantSeq = this.$route.params.SEQ;
        this.ApplicantListDetail();
    },
    methods: {
        // 글 삭제
        delPosts(event) {
            let question = window.confirm('정말 삭제하시겠습니까?')
            if(question == true) {
                applicantApi.deleteApplicantForm(this.applicantSeq).then((res) => {
                    alert('삭제 되었습니다.')
                    router.push('/admin/recruit/applylist')
                    console.log(res)
                })
            } else {
                alert('삭제 취소 되었습니다.')
                event.preventDefault();
            }
        },
        // 뒤로가기
        backList(){
            router.push(`/admin/recruit/applylist`)
            return false;
        },
        //상세보기
        ApplicantListDetail() {
            // api 이름 변경해야됨
            applicantApi.getApplicantDetail(this.applicantSeq).then((res) => {
                this.items = res.data.result;
                console.log(res.data.result)
                console.log(this.items)
                const itemArray = this.items;
                const resultMap = 
                itemArray.map((x) => {
                    return [x.title, x.location, x.name,
                     x.email, x.tel, x.file, x.time, x.fileName]
                })
                // 첨부파일 유무
                if(resultMap[0][1] == null || resultMap[0][1] == '') {
                    this.flag = true
                    return this.items = resultMap
                } else {
                    console.log(resultMap)
                    return this.items = resultMap
                }
            })
            .catch(function(e){
                setTimeout(store.commit('delToken'), 50000) 
                console.log(e);
            })
        }
    },
}
</script>
<style>
    .btn {
        margin: 0 2.5px;
    }
</style>