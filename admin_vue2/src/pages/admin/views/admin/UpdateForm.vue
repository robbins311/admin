<template>
    <div>
        <b-container>
        <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
        <!-- 카드 wrapper -->
        <b-card title="업데이트" bg-variant="light">
            <!-- Form main card S -->
            <!-- 받은 인자값중에 seq번호가 없으면 일반 등록, 아니면 수정하기 함수 호출 -->
            <b-form
                @submit.prevent="updateSeq !== undefined ? setMode() : onSubmit()"
                v-if="!loading"
            >
            <!-- 업데이트 제목 -->
            <b-row class="font-weight-bold">
            <b-form-group
                id="fieldset-horizontal"
                label="업데이트 제목"
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
                placeholder="업데이트 제목을 입력해주세요."
                required
                autofocus
                :items="items"
                v-if="!updateSeq"
            />
            <!-- 수정 input -->
            <b-form-input 
                id="input-horizontal"
                v-model="modForm.notice"
                placeholder="업데이트 제목을 입력해주세요."
                required
                autofocus
                :items="items"
                v-if="updateSeq"
            />
            
            </b-form-group>
            </b-row>
            <!-- 첨부파일 -->
            <b-form-group
                label="업데이트 파일"
                label-for="file-default"
                label-cols-sm="2"
                class="mt-2"
            >
            <!-- 등록 input -->
            <b-form-file
                id="file-default"
                :state="Boolean(form.file)"
                v-model="form.file"
                placeholder="파일을 선택해 주세요"
                ref="file-input"
                class="mb-2"
                plain
                required
                :items="items"
                v-if="!updateSeq"
            />
            <!-- 수정 input -->
            <b-form-file
                id="file-default"
                :state="Boolean(form.file)"
                v-model="modForm.file"
                placeholder="파일을 선택해 주세요"
                ref="file-input"
                class="mb-2"
                plain
                required
                :items="items"
                v-if="updateSeq"
            />
            <b-form-text v-if="updateSeq">* 첨부파일 미 변경시 기존 첨부파일로 저장됩니다. &nbsp;</b-form-text>
            <b-link
                v-if="updateSeq"
                class="ml-2 modLink"
                target="_blank"
                :href="`http://localhost:5005${this.items[0].file}`"
                >
                    <span> 수정 전 파일:  {{ this.items[0].fileName !==  modForm.file.name ? this.items[0].fileName : modForm.file.name}} </span>
            </b-link>
            </b-form-group>
            <label class="mt-4 mb-2 textLabel">업데이트 내용</label>
            <!-- content 등록 -->
             <vue-editor 
                v-model="form.content" 
                :items="items"
                placeholder="내용을 입력해주세요."
                v-if="!updateSeq"
             />
             <!-- content 수정 -->
             <vue-editor 
                v-model="modForm.content" 
                :items="items"
                placeholder="내용을 입력해주세요."
                v-if="updateSeq"
             />
            <b-row>
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
                        @click.prevent="updateSeq !== undefined ? setMode() : onSubmit()"
                        >
                        {{updateSeq !== undefined ? '수정하기' : '등록하기'}}
                        </b-button>
                    </b-col>
                    <b-col>
                        <!-- seq값이 있을시에는 view 페이지로 이동, 없을시에는 List페이지로 이동 -->
                        <b-button 
                        :to="updateSeq !== undefined ? `/admin/update/${updateSeq}` : '/admin/update'" 
                        class="ml-n1" 
                        size="sm" 
                        variant="danger"
                        >취소하기
                        </b-button>
                    </b-col>
                </b-row>
            </div>
            </b-row>
            </b-form>
            <!-- Form Card E-->
        </b-card>
        </b-container>
    </div>
</template>
<script>
import * as updateApi from '@/api/update';
import { VueEditor } from 'vue2-editor'
import router from '../../router';
export default {
    name: 'UpdateForm',
    components: { VueEditor },
    data() {
        return {
            // seq번호
            updateSeq: 0,
            // 등록하기 v-model 값
            form: {
                notice: '',
                file: [],
                content: '',
            },
            // 수정하기 v-model 값
            modForm: {
                notice: '',
                file: [],
                content: '',
            },
            show:true,
            bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: '업데이트',
                    href: '/admin/update'
                },
                {
                    text: '업데이트 입력',
                    active: true
                },
            ],
            items:[],
            fields: [],
            loading: false,
        }
    },
    created() {
        // SEQ값 받아오기
        this.updateSeq = this.$route.params.SEQ;
        // seq값이 있을시, 수정할 내용 뿌리기
        if(this.updateSeq) {
            this.loading = true
            updateApi.getUpdateDetail(this.updateSeq).then((res) => {
                this.items = res.data.result
                this.loading = false;
                this.modForm.notice = this.items[0].title;
                this.modForm.content = this.items[0].contents;
                this.modForm.file = this.items[0].file;
            })
        }
    },
    methods: {
        // 게시글 수정하기
        setMode(event) {
            // Formdata 
            const formData = new FormData();
            formData.append('file', this.modForm.file)
            // 수정하기 값
            let updateModeData = {
                "title": this.modForm.notice,
                "file": this.modForm.file,
                'fileName': this.modForm.file.name,
                "contents": this.modForm.content,
            }
            //  제목 및 내용이 없을시 alert창 띄움
            if(this.modForm.notice == '') {
                    this.$fire({
                    title: "업데이트",
                    text: "제목을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } else if(this.modForm.content == '') {
                    this.$fire({
                    title: "업데이트",
                    text: "내용을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } else if(this.modForm.file == '') {
                    this.$fire({
                    title: "업데이트",
                    text: "파일을 넣어주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } 
            // seq, 수정하기 값을 인자로 받아서 수정함.
            updateApi.updateUpdateForm(this.updateSeq, updateModeData).then((res) => {
                updateModeData = res.data;
                this.$fire({
                title: "업데이트",
                text: "수정 되었습니다.",
                type: "success",
                timer: 4000
                }).then(r => {
                    router.push(`/admin/update/${this.updateSeq}`)
                    console.log(r.value)
                })
            })
            .catch(function(e) {
                this.$fire({
                title: "업데이트",
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
            const updateData = {
                'title': this.form.notice,
                'file': this.form.file,
                'fileName': this.form.file.name,
                'contents': this.form.content,
            }
            //  제목 및 내용이 없을시 alert창 띄움
            if(this.form.notice == '') {
                    this.$fire({
                    title: "업데이트",
                    text: "제목을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } else if(this.form.content == '') {
                    this.$fire({
                    title: "업데이트",
                    text: "내용을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } else if(this.form.file == '') {
                    this.$fire({
                    title: "업데이트",
                    text: "파일을 넣어주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } 
            //  Api 호출 및 업로드 alert
            const formData = new FormData();
            formData.append('file', this.form.file)
            updateApi.addUpdateForm(updateData).then((res) => {
                console.log(res.data)
                this.form = res.data
                this.form.file = res.file
                this.$fire({
                    title: "업데이트",
                    text: "업로드 되었습니다.",
                    type: "success",
                    timer: 4000
                    }).then(r => {
                        router.push('/admin/update')
                        console.log(r.value)
                    })
            })
            .catch((e) => {
                this.$fire({
                    title: "업데이트",
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
    
</style>