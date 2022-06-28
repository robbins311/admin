<template>
    <div>
        <b-container>
            <b-card class="mb-4 formBox" title="지원서 제출" bg-variant="light">
                <b-form
                    @submit.prevent="onSubmit()" v-if="show"
                >
                    <b-form-group
                    id="fieldset-horizontal">   
                        <label class="mb-2">이름</label>
                        <b-form-input
                        id="input-horizontal"
                        v-model="form.name"
                        placeholder="이름을 입력해주세요."
                        required
                        autofocus
                        />
                    </b-form-group>
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
                        <b-form-invalid-feedback id="input-live-feedback" class="mb-2">
                           * 이메일 형식에 맞춰주세요. ex) withnetworks@with.com
                        </b-form-invalid-feedback>
                    </b-form-group>
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
                            <label class="mb-2">이력서 첨부</label>
                            <b-input-group
                            prepand="파일첨부"
                            >
                                <b-form-file
                                id="file-default"
                                ref="file-input"
                                class="mb-2"
                                v-model="form.file"
                                required
                                plain
                                >
                                </b-form-file>
                            </b-input-group>
                    </b-form-group>
                    <h2>개인정보 수집ㆍ이용동의</h2>
                            <!-- 전체 선택 -->
                            <b-form-checkbox
                                id="checkbox-0"
                                v-model="form.checkAll"
                                @change="selectAll"
                                required
                                value="Y"
                                unchecked-value="N"
                            >
                                전체선택
                            </b-form-checkbox>
                    <b-form-group
                    id="fieldset-horizontal">
                            <div class="mt-3 d-flex justify-content-left">
                            <label class="mb-2">개인정보 수집 및 이용수칙(필수)</label>
                            <b-form-checkbox
                                id="checkbox-1"
                                v-model="form.statusPersOne"
                                required
                                value="Y"
                                unchecked-value="N"
                            >
                                동의
                            </b-form-checkbox>
                            </div>
                            <b-card>
                                <span class="text-break">
                                    본 채용홈페이지를 통해 제출하는 지원서는 귀하께서 지원서를 제출하는 회사(이하 채용회사)가 직접 접수하고 관리하며, 향후 지원서 관리책임은 채용회사에 있습니다. 지원자는 아래 개인정보 제공 등에 대해 동의하지 않을 권리가 있습니다. 다만, 지원서를 통해 제공받은 정보는 채용회사의 채용과정에 필수적인 항목으로 아래 개인정보 제공 등에 대해 동의하지 않는 경우 채용지원이 제한될 수 있습니다.
                                </span>
                            </b-card>
                    </b-form-group>
                    <b-form-group
                    id="fieldset-horizontal">
                            <div class="mt-3 d-flex justify-content-left">
                            <label class="mb-2">개인정보 수집 및 이용수칙(필수)</label>
                            <b-form-checkbox
                                id="checkbox-1"
                                v-model="form.statusPersTwo"
                                required
                                value="Y"
                                unchecked-value="N"
                            >
                                동의
                            </b-form-checkbox>
                            </div>
                            <b-card>
                                <span class="text-break">
                                    본 채용홈페이지를 통해 제출하는 지원서는 귀하께서 지원서를 제출하는 회사(이하 채용회사)가 직접 접수하고 관리하며, 향후 지원서 관리책임은 채용회사에 있습니다. 지원자는 아래 개인정보 제공 등에 대해 동의하지 않을 권리가 있습니다. 다만, 지원서를 통해 제공받은 정보는 채용회사의 채용과정에 필수적인 항목으로 아래 개인정보 제공 등에 대해 동의하지 않는 경우 채용지원이 제한될 수 있습니다.
                                </span>
                            </b-card>
                    </b-form-group>
                    <b-form-group
                    id="fieldset-horizontal">
                            <div class="mt-3 d-flex justify-content-left">
                            <label class="mb-2">민감정보 수집 및 이용에 관한 동의(필수)</label>
                            <b-form-checkbox
                                id="checkbox-1"
                                v-model="form.statusPersThr"
                                required
                                value="Y"
                                unchecked-value="N"
                            >
                                동의
                            </b-form-checkbox>
                            </div>
                            <b-card>
                                <span class="text-break">
                                    본 채용홈페이지를 통해 제출하는 지원서는 귀하께서 지원서를 제출하는 회사(이하 채용회사)가 직접 접수하고 관리하며, 향후 지원서 관리책임은 채용회사에 있습니다. 지원자는 아래 개인정보 제공 등에 대해 동의하지 않을 권리가 있습니다. 다만, 지원서를 통해 제공받은 정보는 채용회사의 채용과정에 필수적인 항목으로 아래 개인정보 제공 등에 대해 동의하지 않는 경우 채용지원이 제한될 수 있습니다.
                                </span>
                            </b-card>
                    </b-form-group>
                </b-form>
            </b-card>
                    <b-button
                        @click.prevent="onSubmit()"
                        class="mb-4 submitBtn"
                    >
                        제출하기
                    </b-button>
        </b-container>
    </div>
</template>
<script>
import * as applicantApi from '@/api/applicant';
import router from '../../router';
export default {
    name: 'RecruitForm',
    components: {

    },
    data() {
        return {
            applicantSeq: 0,
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
                name: '',
                email: '',
                tel: '',
                file: null,
                location: null,
                checkAll: false,
                statusPersOne: "N",
                statusPersTwo: "N",
                statusPersThr: "N",
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
    created() {
        this.applicantSeq = this.$route.params.SEQ;
        console.log(this.$route.params)
    },
    methods: {
        // 전체선택
        selectAll() {
            let checked = this.form.checkAll;
            this.checked = checked
            console.log(checked)
            if(checked == 'Y') {
                this.form.statusPersOne = 'Y'
                this.form.statusPersTwo = 'Y'
                this.form.statusPersThr = 'Y'
            } else {
                this.form.statusPersOne = 'N'
                this.form.statusPersTwo = 'N'
                this.form.statusPersThr = 'N'
            }

        },
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
            const applicantData = {
                "name": this.form.name,
                "email": this.form.email,
                "tel": this.form.tel,
                "file": this.form.file,
                "fileName": this.form.file.name,
                "location": this.form.location,
                "sensitive": this.form.statusPersOne,
                "personal": this.form.statusPersTwo,
                "rule": this.form.statusPersThr,
                'seqRecruit': this.applicantSeq,
            }
            if(this.form.name == '') {
                alert('이름을 입력해주세요')
                event.preventDefault();
            } else if(this.form.email == '') {
                alert('이메일을 입력해주세요')
                event.preventDefault();
            } else if(this.form.tel == '') {
                alert('연락처를 입력해주세요')
                event.preventDefault();
            }  else if(this.form.file == '') {
                alert('이력서를 첨부해주세요')
                event.preventDefault();
            } else if(this.form.statusPersOne == '' || 
                    this.form.statusPersTwo == '' || 
                    this.form.statusPersThr == '') 
            {
                alert('개인정보 수집 및 이용동의를 하셔야합니다.')
                event.preventDefault();
            }
            applicantApi.addApplicantForm(this.applicantSeq ,applicantData).then((res) => {
                console.log(res.data.result)
                this.form = res.data
                alert('지원 완료 되었습니다.')
                router.push('/recruit')
            })
            .catch((e) => {
                alert('지원서를 다시 한 번 확인해주세요.')
                // router.go()
                console.log(e)
            })
        },
    },
}
</script>
<style scoped>
    .formBox {
        padding: 8px;
    }
    .col-6 {
        display: flex;
        flex-direction: column;
    }
    label {
        font-weight: bold;
    }
    .submitBtn {
        width: 135px;
        height: 43px;
        border-radius: 0;
        border: 1px solid #f36e21;
        background-color: #f36e21;
    }
    .submitBtn:hover {
        background-color: #da5d15;
        border: none;
    }
</style>