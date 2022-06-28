<template>
    <div>
        <b-container>
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
        <!-- 카드 wrapper -->
        <b-card title="SMTP 설정" bg-variant="light">
            <!-- SMTP -->
            <b-form
                @submit="onSubmit"
                @reset="onReset"
                v-if="show"
            >
            <!-- SMTP RadioButtons -->
            <b-form-group label="SMTP 사용유무" v-slot="{ ariaDescribedby }">
                <div class="mt-2 d-flex justify-content-lefts">
                    <b-form-radio class="pr-2" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">사용</b-form-radio>
                    <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">미사용</b-form-radio>
                </div>
            </b-form-group>

            <b-form-group class="mt-2" label="SMTP 인증 사용유무" v-slot="{ ariaDescribedby }">
                <div class="mt-2 d-flex justify-content-lefts">
                    <b-form-radio class="pr-2" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">사용</b-form-radio>
                    <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">미사용</b-form-radio>
                </div>
            </b-form-group>

            <b-form-group class="mt-2" label="SMTP TLS 사용유무" v-slot="{ ariaDescribedby }">
                <div class="mt-2 d-flex justify-content-lefts">
                    <b-form-radio class="pr-2" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">사용</b-form-radio>
                    <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">미사용</b-form-radio>
                </div>
            </b-form-group>


            <!-- SMTP input -->
            <b-row class="font-weight-bold">
            <b-form-group
                id="fieldset-horizontal"
                label="SMTP 호스트"
                label-for="input-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
            >
            <b-form-input 
                id="input-horizontal"
                required
                v-model="smtp.host"
            />
            
            </b-form-group>
            <b-form-group
                id="fieldset-horizontal"
                label="SMTP PORT"
                label-for="input-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
            >
            <b-form-input 
                id="input-horizontal"
                required
                v-model="smtp.port"
            />
            
            </b-form-group>
            <b-form-group
                id="fieldset-horizontal"
                label="SMTP USER"
                label-for="input-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
            >
            <b-form-input 
                id="input-horizontal"
                required
                v-model="smtp.user"
            />
            
            </b-form-group>
            <b-form-group
                id="fieldset-horizontal"
                label="SMTP PASSWORD"
                label-for="input-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
            >
            <b-form-input 
                id="input-horizontal"
                type="password"
                required
                v-model="smtp.password"
            />
            
            </b-form-group>
            <b-form-group
                id="fieldset-horizontal"
                label="SMTP PROTOCOL"
                label-for="input-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
            >
            <b-form-input 
                id="input-horizontal"
                required
                v-model="smtp.protocol"    
            />
            
            </b-form-group>
            </b-row>
            
            <div class="mt-3 d-flex justify-content-center">
                <b-row>
                    <b-col>
                        <b-button to="/admin/noticeview" class="mr-n1" size="sm" type="submit" variant="primary">저장</b-button>
                    </b-col>
                    <b-col>
                        <b-button to="/admin" class="ml-n1" size="sm" type="reset" variant="danger">취소</b-button>
                    </b-col>
                    <b-col>
                        <b-button to="/admin" id="btn3" class="ml-n1" size="sm" type="reset" variant="danger">메일서버 테스트</b-button>
                    </b-col>
                </b-row>
            </div>
            
            </b-form>
            
        </b-card>
        
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'SmtpSetting',
    data() {
        return {
            smtp: {
                host: '',
                port: '',
                user: '',
                password: '',
                protocol: '',
            },
            selected: '',
            show: true,
            bread: [
            {
                text: '관리자페이지',
                href: '/'
            },
            {
                text: '채용공고',
                href: '/admin/recruit/recruitform'
            },
            {
                text: 'SMTP 설정',
                active: true
            },
            ],
      }
        },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.smtp));
            console.log(JSON.stringify(this.smtp));
        },
        onReset() {
            this.smtp.host = '';
            this.smtp.port = '';
            this.smtp.user = '';
            this.smtp.password = '';
            this.smtp.protocal = '';
        },
        clearFiles() {
            this.$refs['file-input'].reset()
        }
    },
}
</script>
<style scoped>
    .card-title {
        border-bottom: 1px solid #ccc;
        margin-top: 10px; margin-bottom: 20px; padding-bottom: 10px;
    }
    #btn3 {
        width: 8rem;
    }
    .form-control {
        width: 20rem;
    }
    .custom-radio {
        margin-right: 10px;
        padding-left: 5px;
    }
    label {
        margin-left: 5px !important;
    }
</style>