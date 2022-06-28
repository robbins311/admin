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
                <!-- 모집기간 null 일시 마감날짜 출력 -->
                <template v-slot:cell(3)='date'>
                    <span>
                        {{date.item[3] == null || date.item[3] == '' ? date.item[7] + ' 까지' : date.item[3]}}
                    </span>
                </template>
                <!-- 첨부파일 유무 확인 -->
                <template v-slot:cell(5)='data'>
                    <a class="detailLink" target="_blank" :href="`http://localhost:5005/download?filePath=${data.item[5]}`" v-if="!flag" >{{data.item[8]}}</a>
                    <span v-if="flag">첨부파일 없음</span>
                </template>
                <template v-slot:cell(6)='text'>
                    <div v-html="text.item[6]" />
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
</template>
<script>
import * as recruitApi from '@/api/recruit'
import router from '../../../router'
import store from '../../../store'
export default {
    name: 'ApplyView',
    data() {
        return {
            recruitSeq: 0,
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
                    label: '모집유형',
                },
                {
                    key: '3',
                    label: '모집기간',
                },
                {
                    key: '4',
                    label: '등록일자',
                },
                {
                    key: '5',
                    label: '첨부파일',
                },
                {
                    key: '6',
                    label: '내용',
                },
            ],
        }
    },
    created() {
        console.log(this.$route.params)
        this.recruitData = this.$route.params;
        this.recruitSeq = this.$route.params.SEQ;
        this.RecruitListDetail();
    },
    methods: {
        // 글 삭제
        delPosts(event) {
            let question = window.confirm('정말 삭제하시겠습니까?')
            if(question == true) {
                recruitApi.deleteRecruitForm(this.recruitSeq).then((res) => {
                    alert('삭제 되었습니다.')
                    router.push('/admin/recruit/recruitlist')
                    console.log(res)
                })
            } else {
                alert('삭제 취소 되었습니다.')
                event.preventDefault();
            }
        },
        // 글 수정화면 이동
        setMode() {
            router.push(`/admin/recruit/recruitform/${this.recruitSeq}`)
            console.log(this.items)
        },
        // 뒤로가기
        backList(){
            router.push(`/admin/recruit/recruitlist`)
            return false;
        },
        RecruitListDetail() {
            recruitApi.getRecruitDetail(this.recruitSeq).then((res) => {
                this.items = res.data.result;
                console.log(res.data.result)
                console.log(this.items)
                const itemArray = this.items;
                const resultMap = 
                itemArray.map((x) => {
                    // api 값에 따라 변경될수있음
                    return [x.title, x.location, x.type, x.date, x.time,
                     x.file, x.contents, x.endDate.slice(0, 10), x.fileName]
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