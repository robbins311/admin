<template>
    <div>
        <h1>제품문의</h1>
        <b-container>
            <b-card class="mb-4" title="제품 문의" bg-variant="light">
                <b-form
                    @submit.prevent="onSubmit()" v-if="show"
                >
                    <b-form-group
                    id="fieldset-horizontal">   
                    <b-row>
                        <b-col cols="6">
                            <label class="mb-2">회사명</label>
                            <b-form-input
                            id="input-horizontal"
                            v-model="form.company"
                            placeholder="회사명을 입력해주세요."
                            required
                            autofocus
                            />
                        </b-col>
                        <b-col cols="6">
                            <label class="mb-2">담당자명</label>
                            <b-form-input
                            id="input-horizontal"
                            v-model="form.manager"
                            required
                            
                            />
                        </b-col>
                    </b-row>
                    </b-form-group>
                    <b-row>
                        <b-col cols="6">
                            <b-form-group
                            id="fieldset-horizontal"
                            >   
                            <label class="mb-2">E-mail</label>
                            <b-form-input
                            id="input-horizontal"
                            v-model="form.email"
                            type="email"
                            :state="emailValidation"
                            required 
                            />
                            </b-form-group>
                        </b-col>
                        <b-col cols="6">
                            <b-form-group
                            description="-없이 번호만 입력해주세요."
                            >
                            <label class="mb-2">연락처</label>
                            <b-form-input
                            id="input-horizontal"
                            v-model="form.tel"
                            type="tel"
                            required
                            :formatter="phoneFomatter"
                            />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-form-group
                    id="fieldset-horizontal">   
                    <b-row>
                        <b-col cols="6">
                            <label class="mb-2">지역</label>
                            <b-form-select
                            v-model="form.location"
                            required
                            placeholder="지역을 선택해 주십시오"
                            :options="options"
                            />
                        </b-col>
                    </b-row>
                    </b-form-group>
                    <b-form-group
                    id="fieldset-horizontal">   
                            <label class="mb-2">문의 및 요청사항</label>
                            <b-form-textarea
                            id="input-horizontal"
                            v-model="form.contents"
                            required
                            />
                    </b-form-group>
                    <b-form-group
                    id="fieldset-horizontal">   
                            <label class="mb-2">제품 안내 및 구매 상담을 위한 개인정보 수집 및 이용 안내에 동의(필수)</label>
                            <b-card>
                                <span>1. 개인정보의 수집·이용 목적 - 제품문의, 기술안내, 민원처리, 구매문의 결과 회신, 후속문의 처리를 위한 참조</span>
                                <br>
                                <span>2. 수집하려는 개인정보의 항목 - 회사명, 부서명, 전화번호, 이메일주소</span>
                                <br>
                                <span>3. 개인정보의 보유 및 이용 기간 - 수집 목적 달성 후 1년 이내 파기</span>
                                <br>
                                <span>이용자는 본 동의를 거부할 권리가 있으며 거부 시 이메일 문의 서비스를 이용하실 수 없습니다.</span>
                            </b-card>
                            <b-form-checkbox
                                id="checkbox-1"
                                v-model="form.statusPers"
                                required
                                value="Y"
                                unchecked-value="N"
                            >
                                동의함
                            </b-form-checkbox>
                    </b-form-group>
                    <b-form-group
                    id="fieldset-horizontal">   
                            <label class="mb-2">뉴스레터, 보안소식 등 정보 수신에 동의(선택)</label>
                            <b-form-checkbox
                                id="checkbox-2"
                                v-model="form.statusNews"
                                value="Y"
                                unchecked-value="N"
                            >
                                동의함
                            </b-form-checkbox>
                    </b-form-group>
                    <b-button
                        @click.prevent="onSubmit()"
                    >
                        제출하기
                    </b-button>
                </b-form>
            </b-card>
        </b-container>
    </div>
</template>
<script>
import * as questionApi from '@/api/question'
import router from '../../router'
export default {
    name: 'QuestionView',
    components: {

    },
    data() {
        return {
            options: [
                { value: '서울', text: '서울' },
                { value: '부산', text: '부산' },
                { value: '경기/인천', text: '경기/인천' },
                { value: '충남/대전/세종', text: '충남/대전/세종' },
                { value: '충북', text: '충북' },
                { value: '경남/울산', text: '경남/울산' },
                { value: '경북/대구', text: '경북/대구' },
                { value: '전남/광주', text: '전남/광주' },
                { value: '전북', text: '전북' },
                { value: '강원', text: '강원' },
                { value: '제주', text: '제주' },
                { value: '기타', text: '기타' },
            ],
            show:true,
            form: {
                company: '',
                manager:'',
                email: '',
                tel: '',
                location: null,
                contents: '',
                statusPers: "N",
                statusNews: "N",
            }
        }
    },
    computed: {
        // 이메일 형식 Check
        emailValidation: function() {
            let val = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return val.test(this.form.email)
        }
    },
    methods: {
        // 핸드폰 번호 자동으로 하이픈 삽입
        phoneFomatter(num) {
            var formatNum = "";
            if (num.length <= 11) {
                formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
            } else {
                if (num.indexOf("02") == 0) {
                formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
                } else {
                formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
                }
            }
            console.log(num.length)
            console.log(typeof formatNum)
            return this.form.tel = formatNum;
        },
        onSubmit(event) {
            console.log(event)
            const questionData = {
                'company': this.form.company,
                'manager': this.form.manager,
                'email': this.form.email,
                'tel': this.form.tel,
                'location': this.form.location,
                'contents': this.form.contents,
                'personal': this.form.statusPers,
                'newsletter': this.form.statusNews,
            }
            
            if(this.form.company == '') {
                alert('회사명을 입력해주세요')
                event.preventDefault();
            } else if(this.form.manager == '') {
                alert('담당자명을 입력해주세요')
                event.preventDefault();
            } else if(this.form.email == '') {
                alert('이메일을 입력해주세요')
                event.preventDefault();
            } else if(this.form.tel == '') {
                alert('연락처을 넣어주세요')
                event.preventDefault();
            } else if(this.form.location == '') {
                alert('지역을 입력해주세요')
                event.preventDefault();
            } else if(this.form.contents == '') {
                alert('문의 및 요청사항을 넣어주세요')
                event.preventDefault();
            } else if(this.form.statusPers == 'N') {
                alert('개인정보약관에 동의를 하셔야합니다.')
                event.preventDefault();
            }
            questionApi.addQuestionForm(questionData).then((res) => {
                console.log(res.data)
                this.form = res.data
                alert('제출 되었습니다')
                router.push('/')
            })
            .catch((e) => {
                alert('제출 실패했습니다.')
                router.go()
                console.log(e)
            })
        },
        
    },
}
</script>
<style scoped>
    .col-6 {
        display: flex;
        flex-direction: column;
    }
</style>