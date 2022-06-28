<template>
    <div>
        <b-container>
        <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
        <!-- 카드 wrapper -->
        <b-card :items="items" title="보도자료" bg-variant="light">
            <!-- 보도자료 -->
            <b-form
                @submit.prevent="pressSeq !== undefined ? setMode() : onSubmit()"
                v-if="!loading"
            >
            <!-- 보도자료 제목 -->
            <b-row class="font-weight-bold">
            <b-form-group
                id="fieldset-horizontal"
                label="보도자료 제목"
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
                placeholder="보도자료 제목을 입력해주세요."
                required
                autofocus
                :items="items"
                v-if="!pressSeq"
            />
            <!-- 수정 input -->
            <b-form-input 
                id="input-horizontal"
                v-model="modForm.notice"
                required
                autofocus
                :items="items"
                v-if="pressSeq"
            />
            
            </b-form-group>
            </b-row>
            <!-- 첨부파일 -->
            <b-form-group
                label="썸네일 이미지 파일"
                label-for="file-default"
                label-cols-sm="2"
                class="mt-2"
            >
            <!-- 등록 input -->
            <b-form-file
                id="file-default"
                :state="Boolean(form.file)"
                accept="image/*"
                v-model="form.file"
                placeholder="파일을 선택해 주세요"
                ref="file-input"
                class="mb-2"
                plain
                v-if="!pressSeq"
            />
            <!-- 수정 input -->
            <b-form>
            <b-form-file
                id="file-default"
                :state="Boolean(form.file)"
                accept="image/*"
                v-model="modForm.file"
                placeholder="파일을 선택해 주세요"
                ref="file-input"
                class="mb-2"
                plain
                v-if="pressSeq"
            />
            </b-form>
            <b-form-text v-if="pressSeq">* 썸네일 이미지 미 변경시 기존 이미지로 저장됩니다. &nbsp;</b-form-text>
            <b-link
                v-if="pressSeq"
                class="ml-2 modLink"
                target="_blank"
                :href="`http://localhost:5005${items[0].file}`"
                >
                    <span> 수정 전 이미지:  {{ items[0].fileName !==  modForm.file.name ? items[0].fileName : modForm.file.name}} </span>
            </b-link>

            <!-- 보도자료 링크 -->
            <b-form-group
                id="fieldset-horizontal"
                label="보도자료 링크"
                label-for="input-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
            >
            <!-- 등록 input -->
            <b-form-input 
                id="input-horizontal"
                v-model="form.link"
                :items="items"
                placeholder="링크 입력시 주소 앞에 'http://'를 제외하고 입력해주세요."
                v-if="!pressSeq"
            >
            </b-form-input>
            <b-form-text v-if="!pressSeq">ex) www.google.com</b-form-text>
            <!-- 수정 input -->
            <b-form-input 
                id="input-horizontal"
                v-model="modForm.link"
                :items="items"
                v-if="pressSeq"
            />
            
            </b-form-group>
            </b-form-group>
            <label class="mt-4 mb-2 textLabel">보도자료 내용</label>
            <!-- content 등록 -->
             <vue-editor 
                v-model="form.content" 
                :items="items"
                placeholder="내용을 입력해주세요."
                v-if="!pressSeq"
             />
             <!-- content 수정 -->
             <vue-editor 
                v-model="modForm.content" 
                :items="items"
                placeholder="내용을 입력해주세요."
                v-if="pressSeq"
             />
            <!-- button box -->
            <b-row>
            <div class="mt-3 d-flex justify-content-center">
                <b-row>
                    <b-col>
                        <!-- seq 인자값이 없으면 등록, 있으면 수정하기, 함수 및 name 변경 -->
                        <b-button 
                        class="mr-n1" 
                        size="sm" 
                        type="submit" 
                        variant="primary"
                        @click.prevent="pressSeq !== undefined ? setMode() : onSubmit()"
                        >
                        {{pressSeq !== undefined ? '수정하기' : '등록하기'}}
                        </b-button>
                    </b-col>
                    <b-col>
                        <!-- seq값이 있을시에는 view 페이지로 이동, 없을시에는 List페이지로 이동 -->
                        <b-button 
                        :to="pressSeq !== undefined ? `/admin/press/${pressSeq}` : '/admin/press/'" 
                        class="ml-n1" 
                        size="sm" 
                        variant="danger"
                        >
                        취소하기
                        </b-button>
                    </b-col>
                </b-row>
            </div>
            </b-row>
            </b-form>
            <!-- main card E -->
        </b-card>
        
        </b-container>
    </div>
</template>
<script>
import * as pressApi from '@/api/press';
import { VueEditor } from 'vue2-editor'
import router from '../../router';
export default {
    name: 'PressForm',
    components: { VueEditor },
    data() {
        return {
            // seq번호
            pressSeq: 0,
            // 등록하기 v-model 값
            form: {
                notice: '',
                file: [],
                link: '',
                content: '',
            },
            // 수정하기 v-model 값
            modForm: {
                notice: '',
                file: [],
                link: '',
                content: '',
                fileName: [],
            },
            show:true,
            bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: '보도자료',
                    href: '/admin/press'
                },
                {
                    text: '보도자료 입력',
                    active: true
                },
            ],
            items: [],
            fields: [],
            loading: false,
        }
    },
    created() {
        // SEQ값 받아오기
        this.pressSeq = this.$route.params.SEQ;
        // seq값이 있을시, 수정할 내용 뿌리기
        if(this.pressSeq) {
            this.loading = true;
            pressApi.getPressDetail(this.pressSeq).then((res) => {
                this.items = res.data.result
                this.loading = false;
                console.log(res.data.result)
                this.modForm.notice = this.items[0].title;
                this.modForm.link = this.items[0].link;
                this.modForm.file = this.items[0].file;
                this.modForm.content = this.items[0].contents;
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
            let pressModeData = {
                "title": this.modForm.notice,
                "file": this.modForm.file,
                "fileName": this.modForm.file.name,
                "link": this.modForm.link,
                "contents": this.modForm.content,
            }
            //  제목 및 내용이 없을시 alert창 띄움
            if(this.modForm.notice == '') {
                this.$fire({
                title: "보도자료",
                text: "수정 할 보도자료 제목을 입력해주세요",
                type: "warning",
                timer: 4000
                }).then(r => {
                    console.log(r.value)
                })
                event.preventDefault();
            } else if (this.modForm.content == '') { 
                this.$fire({
                title: "보도자료",
                text: "수정 할 보도자료 내용을 입력해주세요",
                type: "warning",
                timer: 4000
                }).then(r => {
                    console.log(r.value)
                })
                event.preventDefault();
            } 
            // seq, 수정하기 값을 인자로 받아서 수정함.
            pressApi.updatePressForm(this.pressSeq, pressModeData).then((res) => {
                pressModeData = res.data;
                this.$fire({
                title: "보도자료",
                text: "수정 되었습니다.",
                type: "success",
                timer: 4000
                }).then(r => {
                    router.push(`/admin/press/${this.pressSeq}`)
                    console.log(r.value)
                })
            })
            .catch(function(e) {
                this.$fire({
                title: "보도자료",
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
            //공지사항 제목 & 내용 insert
            const pressData = {
                "title": this.form.notice,
                "file": this.form.file,
                'fileName': this.form.file.name,
                "link": 'http://' + this.form.link,
                "contents": this.form.content,
            }
            //  제목 및 내용이 없을시 alert창 띄움
            if(this.form.notice == '') {
                this.$fire({
                title: "보도자료",
                text: "제목을 입력해주세요",
                type: "warning",
                timer: 4000
                }).then(r => {
                    console.log(r.value)
                })
                event.preventDefault();
            } else if(this.form.content == '') {
                this.$fire({
                title: "보도자료",
                text: "내용을 입력해주세요",
                type: "warning",
                timer: 4000
                }).then(r => {
                    console.log(r.value)
                })
                event.preventDefault();
            } 
            // http가 없을 경우 alert
            /* else if(this.form.link.includes('http://') == false) {
                alert('http:// 를 입력해주세요')
                event.preventDefault();
            } */
            const formdata = new FormData();
            formdata.append('file', this.form.file)
            //  Api 호출 및 업로드 alert
            pressApi.addPressForm(pressData).then((res) => {
                console.log(res.data)
                this.form = res.data;
                this.form.file = res.file;
                this.$fire({
                title: "보도자료",
                text: "업로드 되었습니다.",
                type: "success",
                timer: 4000
                }).then(r => {
                    router.push('/admin/press')
                    console.log(r.value)
                })
            })
            .catch((e) => {
                this.$fire({
                title: "보도자료",
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