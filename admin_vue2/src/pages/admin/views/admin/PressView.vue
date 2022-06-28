<template>
    <div>
        <!-- Wraper -->
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
                    <template v-slot:cell(1)='image'>
                        <img :src="`http://localhost:5005/${image.item[1]}`" alt="thumbnail" width="200" height="180">
                    </template>
                    <!-- 링크 클릭되게 수정 -->
                    <template v-slot:cell(2)="link">
                        <a class="detailLink" target='_blank' :href="`${link.item[2]}`" v-if="!flag">{{link.value}}</a>
                        <span v-if="flag">링크없음</span>
                    </template>
                    <template v-slot:cell(3)='text'>
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
import * as pressApi from '@/api/press'
import router from '../../router'
import store from '../../store'
export default {
    name: 'PressView',
    components: {

    },
    data() {
        return {
            flag: false,
            // seq값
            pressSeq: 0,
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
                    label: '썸네일 이미지',
                },
                {
                    key: '2',
                    label: '링크',
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
        this.pressData = this.$route.params;
        this.pressSeq = this.$route.params.SEQ;
        this.PressListDetail();
        
    },
    methods: {
        delPosts(event) {
            // 바로 삭제되지않게 alert 메세지 띄움
            let question = window.confirm('정말 삭제하시겠습니까?')
            // question 값 true시 삭제
            if(question == true) {
                pressApi.deletePressForm(this.pressSeq).then((res) => {
                    alert('삭제 되었습니다.')
                    router.push('/admin/press')
                    console.log(res)
                })
                // question 값 false시 삭제취소
            } else {
                alert('삭제 취소 되었습니다.')
                event.preventDefault();
            }
        },
        // 글 수정화면 이동
        setMode() {
            router.push(`/admin/pressform/${this.pressSeq}`)
            console.log(this.items)
        },
        // 뒤로가기
        backList(){
            router.push(`/admin/press/`)
            return false;
        },
        // 상세보기
        PressListDetail() {
            pressApi.getPressDetail(this.pressSeq).then((res) => {
                this.items = res.data.result;
                console.log(`변수타입체크 -> ${typeof this.items}`)
                const itemArray = this.items;
                console.log(itemArray)
                console.log( `변수타입체크 -> ${typeof itemArray}`)
                const resultMap = 
                // 변경
                itemArray.map((x) => {
                    return [x.title, x.file ,x.link, x.contents]
                })
                return this.items = resultMap
            })
            .catch((e) => {
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