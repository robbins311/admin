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
                    <template v-slot:cell(1)='data'>
                        <a class="detailLink" target="_blank" :href="`http://localhost:5005/download?filePath=${data.item[1]}`" v-if="!flag"> {{data.item[3]}} </a>
                        <span v-if="flag">첨부파일 없음</span>
                    </template>
                    <template v-slot:cell(2)='text'>
                           <div v-html="text.item[2]" />
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
import * as brochureApi from '@/api/brochure'
import router from '../../router'
import store from '../../store'
export default {
    name: 'BrochureView',
    components: {

    },
    data() {
        return {
            // seq값
            brochureSeq: 0,
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
                    label: '첨부파일',
                },
                {
                    key: '2',
                    label: '내용',
                },
            ],
        }
    },
    created() {
        this.brochureData = this.$route.params;
        this.brochureSeq = this.$route.params.SEQ;
        this.BrochureListDetail();
    },
    methods: {
        // 글 삭제
        delPosts(event) {
            let question = window.confirm('정말 삭제하시겠습니까?')
            if(question == true) {
                brochureApi.deleteBrochureForm(this.brochureSeq).then((res) => {
                    alert('삭제 되었습니다.')
                    router.push('/admin/brochure')
                    console.log(res)
                })
            } else {
                alert('삭제 취소 되었습니다.')
                event.preventDefault();
            }
        },
        // 글 수정화면 이동
        setMode() {
            router.push(`/admin/brochureform/${this.brochureSeq}`)
            console.log(this.items)
        },
        // 뒤로가기
        backList(){
            router.push(`/admin/brochure/`)
            return false;
        },
        BrochureListDetail() {
            brochureApi.getBrochureDetail(this.brochureSeq).then((res) => {
                this.items = res.data.result;
                console.log(res.data.result)
                console.log(this.items)
                const itemArray = this.items;
                const resultMap = 
                itemArray.map((x) => {
                    return [x.title, x.file, x.contents, x.fileName]
                })
                /* console.log(resultMap)
                return this.items = resultMap */
                if(resultMap[0][1] == null) {
                    this.flag = true
                    return this.items = resultMap
                } else if(resultMap[0][1] == ''){
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