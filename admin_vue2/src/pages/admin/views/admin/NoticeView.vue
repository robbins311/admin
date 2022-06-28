<template>
    <div>
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
                        <!-- 첨부파일 유무 확인 -->
                        <template v-slot:cell(1)='data'>
                            <a class="detailLink" target="_blank" :href="`http://localhost:5005/download?filePath=${data.item[4]}`" v-if="!flag" > {{data.item[1]}} </a>
                            <span v-if="flag">첨부파일 없음</span>
                        </template>
                        <!-- 공지사항 내용 -->
                        <template v-slot:cell(3)='text'>
                            <!-- content -->
                            <!-- 이미지 크기 조절은 ::v-deep으로 css 마크업 -->
                           <div v-html="text.item[3]" />
                        </template>
                    </b-table>
                </div>
                <!-- Button Box -->
                <div class="d-flex justify-content-end">
                    <!-- 수정하기 -->
                    <b-button @click="setMode()" class="position-fixed-right" size="sm">수정하기</b-button>
                    <!-- 삭제하기 -->
                    <b-button @click="delPosts()" class="position-fixed-right" size="sm">삭제하기</b-button>
                    <!-- 목록이동 -->
                    <b-button @click="backList()" class="position-fixed-right" size="sm" variant="primary">목록가기</b-button>
                </div>
            </b-card>
            <!-- Main Card E -->
        </b-container>
    </div>
</template>
<script>

import * as noticeApi from '@/api/notice';
import router from '../../router'
import store from '../../store'
export default {
    name: 'NoticeView',
    components: {

    },
    data() {
        return {
            // seq값
            flag: false,
            noticeSeq: 0,
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
                    label: '첨부파일',
                },
                {
                    key: '2',
                    label: '등록일',
                },
                {
                    key: '3',
                    label: '내용',
                },
            ],

        }
    },
    created() {
        console.log(this.$route.params)
        console.log(this.$route.query)
        this.noticeData = this.$route.params;
        this.noticeSeq = this.$route.params.SEQ;
        this.NoticeListDetail();
    },
    methods: {
        // 글 수정화면 이동
        setMode() {
            router.push(`/admin/noticeform/${this.noticeSeq}`)
            console.log(this.items)
        },
        // 글 삭제
        delPosts(event){
            // 바로 삭제되지않게 alert 메세지 띄움
            let question = window.confirm('정말 삭제하시겠습니까?')
            // question 값 true시 삭제
            if ( question == true ) {
                noticeApi.deleteNoticeForm(this.noticeSeq).then((res) => {
                    alert('삭제 되었습니다.') 
                    router.push('/admin/notice')
                    console.log(res.data)
                })
            // question 값 false시 삭제취소
            } else {
                alert('삭제 취소 되었습니다.')
                event.preventDefault();
            }
        },
        // 목록으로 돌아가기
        backList(){
            router.push(`/admin/notice/`)
            return false;
        },
        //상세보기
        NoticeListDetail() {
            noticeApi.NoticeListDetail(this.noticeSeq).then((res) => {
                this.items = res.data.result
                console.log(this.items)
                const itemArray = this.items;
                console.log(`변수타입체크 -> ${typeof itemArray}`)
                const resultMap = 
                itemArray.map((x) => {
                    return [x.TITLE, x.FILE_NAME, x.DATE, x.CONTENTS, x.FILE_PATH]
                })
                console.log(`변수타입체크 -> ${typeof resultMap}`)
                return this.items = resultMap
            })
            .catch((e) => {
                setTimeout(store.commit('delToken'), 50000) 
                console.log(e);
            })
        },
    },
}
</script>
<style>
    .btn {
        margin: 0 2.5px;
    }
</style>