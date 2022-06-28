<template>
    <div>
        <b-container>
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
        <!-- 카드 wrapper -->
        <b-card title="인증 및 수상" bg-variant="light">
            <!-- Form main card S -->
            <b-form
                @submit.prevent="awardSeq !== undefined ? setMode() : onSubmit()"
                v-if="show"
            >
            <!-- 인증 및 수상 제목 -->
            <b-row class="font-weight-bold">
            <b-form-group
                id="fieldset-horizontal"
                label="인증 및 수상 타이틀"
                label-for="input-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
            >
            <!-- 등록 input -->
            <b-form-input 
                id="input-horizontal"
                v-model="form.notice"
                placeholder="인증 및 수상 제목을 입력해주세요."
                required
                autofocus
                :items="items"
                v-if="!awardSeq"
            />
            <!-- 수정 input -->
            <b-form-input 
                id="input-horizontal"
                v-model="modForm.notice"
                required
                autofocus
                :items="items"
                v-if="awardSeq"
            />
            
            </b-form-group>
            </b-row>
            <!-- 첨부파일 -->
            <b-form-group
                label="이미지 등록"
                label-for="file-default"
                label-cols-sm="2"
                class="mt-2"
            >
            <!-- 등록 input -->
            <b-form-file
                id="file-default"
                :state="Boolean(form.file)"
                v-model="form.file"
                accept="image/*"
                placeholder="파일을 선택해 주세요"
                ref="file-input"
                class="mb-2"
                plain
                required
                :items="items"
                v-if="!awardSeq"
            />
            <!-- 수정 input -->
            <b-form-file
                id="file-default"
                :state="Boolean(form.file)"
                v-model="modForm.file"
                accept="image/*"
                ref="file-input"
                class="mb-2"
                plain
                v-if="awardSeq"
            />
            <b-form-text v-if="awardSeq">* 이미지 미 변경시 기존 이미지로 저장됩니다. &nbsp;</b-form-text>
            </b-form-group>
            <!-- button Box -->
            <div class="mt-3 d-flex justify-content-center">
                <b-row>
                    <b-col>
                        <!-- seq 인자값이 없으면 등록, 있으면 수정하기, 함수 및 name 변경 -->
                        <b-button 
                        class="mr-n1" 
                        size="sm" 
                        type="submit" 
                        variant="primary"
                        @click.prevent="awardSeq !== undefined ? setMode() : onSubmit()"
                        >
                        {{awardSeq !== undefined ? '수정하기' : '등록하기'}}
                        </b-button>
                    </b-col>
                    <b-col>
                        <!-- seq값이 있을시에는 view 페이지로 이동, 없을시에는 List페이지로 이동 -->
                        <b-button 
                        :to="awardSeq !== undefined ? `/admin/award/${awardSeq}` : '/admin/award'" 
                        class="ml-n1" 
                        size="sm" 
                        variant="danger"
                        >취소하기
                        </b-button>
                    </b-col>
                </b-row>
            </div>
            </b-form>
            <!-- Form main card E -->
        </b-card>
        
        </b-container>
    </div>
</template>
<script>
import * as awardApi from '@/api/award';
import router from '../../router';
export default {
    name: 'AwardForm',
    data() {
        return {
            // seq번호
            awardSeq: 0,
            // 등록하기 v-model 값
            form: {
                notice: '',
                file: [],
                fileName: [],
            },
            // 수정하기 v-model 값
            modForm: {
                notice: '',
                file: [],
                fileName: [],
            },
            show:true,
            bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: '인증 및 수상',
                    href: '/admin/award'
                },
                {
                    text: '인증 및 수상 입력',
                    active: true
                },
            ],
            items: [],
            fields: [],
        }
    },
    created() {
        // SEQ값 받아오기
        this.awardSeq = this.$route.params.SEQ;
        // seq값이 있을시, 수정할 내용 뿌리기
        if(this.awardSeq) {
            awardApi.getAwardDetail(this.awardSeq).then((res) => {
                this.items = res.data.result
                console.log(res.data.result)
                this.modForm.notice = this.items[0].title;
                this.modForm.file = this.items[0].file;
            })
        }
    },
    methods: {
        setMode(event) {
            // Formdata 
            const formData = new FormData();
            formData.append('file', this.modForm.file)
            // 수정하기 값
            let awardModeData = {
                "title": this.modForm.notice,
                "file": this.modForm.file,
                "fileName": this.modForm.file.name,
            }
            //  제목 및 내용이 없을시 alert창 띄움
            if(this.modForm.notice == '') {
                this.$fire({
                title: "공지사항",
                text: "수정 할 인증 및 수상 제목을 입력해주세요",
                type: "warning",
                timer: 4000
                }).then(r => {
                    console.log(r.value)
                })
                event.preventDefault();
            } else if (this.modForm.file == '') { 
                this.$fire({
                title: "공지사항",
                text: "수정 할 이미지를 넣어주세요",
                type: "warning",
                timer: 4000
                }).then(r => {
                    console.log(r.value)
                })
                event.preventDefault();
            } 
            // seq, 수정하기 값을 인자로 받아서 수정함.
            awardApi.updateAwardForm(this.awardSeq, awardModeData).then((res) => {
                awardModeData = res.data;
                this.$fire({
                title: "인증 및 수상",
                text: "수정 되었습니다.",
                type: "success",
                timer: 4000
                }).then(r => {
                    router.push(`/admin/award/${this.awardSeq}`)
                    console.log(r.value)
                })
            })
            .catch(function(e) {
                this.$fire({
                title: "인증 및 수상",
                text: "업로드 실패했습니다.",
                type: "error",
                timer: 4000
                }).then(r => {
                    router.go()
                    console.log(e)
                    console.log(r.value)
                })
                router.go()
                console.log(e)
            })
        },
        onSubmit(event) {
            //제목 & 내용 insert
            const awardData = {
                'title': this.form.notice,
                'file': this.form.file,
                'fileName': this.form.file.name,
            }
            //  제목 및 내용이 없을시 alert창 띄움
            if(this.form.notice == '') {
                this.$fire({
                title: "인증 및 수상",
                text: "제목을 입력해주세요",
                type: "warning",
                
                }).then(r => {
                    console.log(r.value)
                })
                event.preventDefault();
            } else if(this.form.file == '') {
                this.$fire({
                title: "인증 및 수상",
                text: "이미지를 넣어주세요",
                type: "warning",
                timer: 4000
                }).then(r => {
                    console.log(r.value)
                })
                event.preventDefault();
            } 
            const formData = new FormData();
            formData.append('file', this.form.file)
            //  Api 호출 및 업로드 alert
            awardApi.addAwardForm(awardData).then((res) => {
                console.log(res.data)
                this.form = res.data
                this.form.file = res.file
                this.$fire({
                title: "인증 및 수상",
                text: "업로드 되었습니다.",
                type: "success",
                timer: 4000
                }).then(r => {
                    router.push('/admin/award')
                    console.log(r.value)
                })
            })
            .catch((e) => {
                this.$fire({
                title: "인증 및 수상",
                text: "업로드 실패했습니다.",
                type: "error",
                timer: 4000
                }).then(r => {
                    router.go()
                    console.log(e)
                    console.log(r.value)
                })
                router.go()
                console.log(e)
            })
        },
    },
}
</script>
<style>
    .col-form-label {
        margin-top: 5px;
        font-weight: bold;
    }
</style>