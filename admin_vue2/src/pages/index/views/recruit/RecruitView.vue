<template>
    <div>
        <b-container fluid="xl">
            <b-card class="mt-4 mb-4">
                <div class="recruitBox" responsive v-for="item in items" :key="item">
                    <div class="titleBox">
                        <strong>채용공고명: </strong>
                        <span>{{item[0]}}</span>
                    </div>
                    <div class="inner">
                        <div class="location">
                            <strong>지역: </strong>
                            <span>{{item[1]}}</span>
                        </div>
                        <div class="category">
                            <strong>모집유형: </strong>
                            <span>{{item[2]}}</span>
                        </div>
                        <div class="date">
                            <strong>채용기한: </strong>
                            <span>{{item[3]}}</span>
                        </div>
                    </div>
                    <div class="contents">
                        <span>{{item[6]}}</span>
                    </div>
                    <div class="recruitBtnBox mt-4 d-flex justify-content-start">
                        <b-button target="_blank"
                        :href="`http://localhost:5005${item[5]}`"
                        >이력서 양식 다운로드</b-button>
                    </div>
                </div>
            </b-card>
            <div class=" d-flex justify-content-end mt-2 mb-4">
                    <!-- view seq 받아서 연결 -->
                    <b-button @click="goPost()" class="listBtn">지원서 작성</b-button>
                    <b-button to="/recruit" class="listBtn">목록</b-button>
            </div>
        </b-container>
    </div>
</template>
<script>
import * as recruitApi from '@/api/recruit';
import router from '../../router';
export default {
    name:'RecruitView',
    components: {

    },
    data() {
        return {
            recruitSeq: 0,
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
        this.applicantSeq = this.$route.params.SEQ;
        this.RecruitListDetail();
    },
    methods: {
        goPost() {
            router.push(`/recruitform/${this.applicantSeq}`)
        },
        RecruitListDetail() {
            recruitApi.getRecruitDetail(this.applicantSeq).then((res) => {
                this.items = res.data.result;
                const itemArray = this.items;
                console.log(itemArray)
                // 상시채용시 모집기간 빈칸 출력
                for(let i = 0; i < itemArray.length; i++) {
                    if(itemArray[i].type !== '기간지정') {
                        itemArray[i].date = '';
                    }
                }
                const resultMap = 
                itemArray.map((x) => {
                    // api 값에 따라 변경될수있음
                    return [x.title, x.location, x.type, x.date, x.time,
                     x.image, x.contents, x.seq]
                })
                console.log(resultMap)
                return this.items = resultMap
            })
        },
    },
}
</script>
<style>
    .card {
        border-left: none;
        border-right: none;
    }
    .recruitBox {
        border-top: 2px solid #1b1b1b;
        border-bottom: 1px solid #ccc;
        text-align: left;
        margin-top: 10px; padding: 10px 10px 10px 20px;
    }
    .titleBox {
        padding: 5px;

    }
    .inner {
        padding: 5px;
        
    }
    .contentsBox {
        margin-top: 10px; padding: 10px;
    }
    .recruitBtnBox {
        margin-right: 20px;
        border: none !important;
    }
    .listBtn {
        width: 170px;
        height: 40px;
        border-radius: 0;
        border: 1px solid #f36e21;
        background-color: #f36e21;
        margin-right: 3px;
    }
    .listBtn:hover {
        background-color: #da5d15;
        border: none;
    }
</style>