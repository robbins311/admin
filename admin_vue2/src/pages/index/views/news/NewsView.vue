<template>
    <div>
        <b-container fluid="xl">
            <b-card  class="mt-4 mb-4">
                <div class="overflow-auto">
                        <b-card :items="items" :fields="fields">
                            <p>{{this.items[0].TITLE}}</p>
                            <p>{{this.items[0].DATE}}</p> 
                        </b-card>
                    <b-table-simple hover responsive :items="items" :fields="fields">
                        <b-thead>
                            <b-tr class="d-flex-column head">
                                <!-- 데이터 -->
                                <div class="titleBox">
                                    <b-td class="title">
                                        데이터 : {{this.items[0].TITLE}} /
                                        전자증권 전환 대상 주권 권리자(주주) 보호 및 조치사항 안내
                                    </b-td>
                                </div>
                                <div class="d-flex">
                                    <b-td>등록일&nbsp;&nbsp;
                                        {{this.items[0].DATE}}
                                    </b-td>
                                <!-- 데이터 -->
                                </div>
                            </b-tr>
                            <div class="contentBox">
                            <!-- 데이터 -->
                            <p>
                                데이터 : {{this.items[0].CONTENTS}} /
                                2019.09.16일 「주식·사채 등의 전자등록에 관한 법률(이하 “전자증권법”)」이 시행됨에 따라 
                                당사의 전자증권 전환 대상 주권 권리자를 보호하기 위하여 전자증권법 부칙 제3조 3항에 근거하여 아래의 사항을 통지합니다.
                            </p>
                        </div>
                        </b-thead>
                    </b-table-simple>
                </div>
                <div class="d-flex justify-content-center mt-2">
                    <b-button to="/news" class="position-fixed-right" size="sm" variant="primary">목록가기</b-button>
                </div>
            </b-card>
        </b-container>
    </div>
</template>
<script>
import * as noticeApi from '@/api/notice';
export default {
    name: 'newsView',
    data() {
        return {
            bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: 'views',
                    active: true
                },
            ],
            items: [],
            fields: [],

        }
    },
    created() {
        console.log(this.$route.params)
        this.noticeSeq = this.$route.params.SEQ;
        var vm = this;
        vm.NoticeListDetail()
    },
    methods: {
        NoticeListDetail() {
            noticeApi.NoticeListDetail(this.noticeSeq).then((res) => {
                var vm = this;
                vm.items = res.data.result
                console.log(res.data.result)
            })
        },
    },
}
</script>
<style scoped>
    .btn {
        margin: 0 2.5px;
        padding: 10px 20px;
        border: #f36e21;
        background-color: #f36e21;
    }
    .card {
        border: none;
    }
    thead {
        border-top: 2px solid #1b1b1b;
    }
    
    .titleBox {
        margin-top: 10px;
    }
    .contentBox {
        border-top: 1px solid #ccc;
        margin-top: 10px;
    }
    .contentBox p {
        margin-top: 5px;
    }
    .title {
        font-size: 1.1rem;
        font-weight: 500;
    }
</style>