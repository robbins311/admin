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
                    </b-table>
                </div>
                <!-- Button Box -->
                <div class="d-flex justify-content-end">
                    <!-- 삭제하기 -->
                    <b-button @click="delPosts()" class="position-fixed-right" size="sm">삭제하기</b-button>
                    <!-- 목록이동 -->
                    <b-button @click="backList()" class="position-fixed-right" size="sm" variant="primary">목록가기</b-button>
                </div>
            </b-card>
            <!-- Main Card E -->
        </b-container>
</template>
<script>
import * as questionApi from '@/api/question'
import router from '../../router'
import store from '../../store'
export default {
    name: 'QuestionView',
    components: {

    },
    data() {
        return {
            questionSeq: 0,
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
                    label: '회사명'
                },
                {
                    key: '1',
                    label: '담당자',
                },
                {
                    key: '2',
                    label: 'Email',
                },
                {
                    key: '3',
                    label: '연락처'
                },
                {
                    key: '4',
                    label: '지역'
                },
                {
                    key: '5',
                    label: '문의내용'
                },
                {
                    key: '6',
                    label: '개인Y/N'
                },
                {
                    key: '7',
                    label: '뉴스Y/N'
                },
                {
                    key: '8',
                    label: '등록일'
                },
            ],
        }
    },
    created() {
        this.questionData = this.$route.params;
        this.questionSeq = this.$route.params.SEQ;
        this.QuestionListDetail();
    },
    methods: {
        delPosts(event) {
            let question = window.confirm('정말 삭제하시겠습니까?')
            if(question == true) {
                questionApi.deleteQuestionForm(this.questionSeq).then((res) => {
                    alert('삭제 되었습니다.')
                    router.push('/admin/question')
                    console.log(res)
                })
            } else {
                alert('삭제 취소 되었습니다.')
                event.preventDefault();
            }
        },
        backList(){
            router.push(`/admin/question/`)
            return false;
        },
        QuestionListDetail() {
            questionApi.getQuestionDetail(this.questionSeq).then((res) => {
                this.items = res.data.result;
                console.log(res.data.result)
                console.log(this.items)
                const itemArray = this.items;
                const resultMap = 
                itemArray.map((x) => {
                    return [x.company, x.manager, x.email, x.tel, x.location
                    ,x.contents, x.personal, x.newsletter, x.time]
                })
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

<style>
    .btn {
        margin: 0 2.5px;
    }
</style>