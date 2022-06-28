<template>
    <div>
        <b-container>
        <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
        <!-- 카드 wrapper -->
        <b-card title="공지사항" bg-variant="light">
            <!-- Form main card S -->
            <!-- 받은 인자값중에 seq번호가 없으면 일반 등록, 아니면 수정하기 함수 호출 -->
            <!-- loading= vue 렌더링 전 v-if로 값 확인 후 create -->
            <b-form
                @submit.prevent="noticeSeq !== undefined ? setMode() : onSubmit()"
                v-if="!loading"
            >
            <b-row class="font-weight-bold">
                <!-- Notice Group -->
            <b-form-group
                id="fieldset-horizontal"
                label="공지사항 제목"
                label-for="input-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
            >
            <!-- 등록 input -->
            <b-form-input
                id="input-horizontal"
                type="text"
                placeholder="공지사항 제목을 입력해주세요."
                v-model="form.notice"
                required
                autofocus
                :items="items"
                v-if="!noticeSeq"
            />
            <!-- 수정 input -->
            <b-form-input
                id="input-horizontal"
                type="text"
                v-model="modForm.notice"
                required
                autofocus
                :items="items"
                v-if="noticeSeq"
            />
            </b-form-group>
            </b-row>
            <!-- 첨부파일 -->
            <b-form-group
                label="첨부파일"
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
                v-if="!noticeSeq"
            />
            <!-- 수정 input -->
                <b-form-group
                    v-if="noticeSeq"
                     description=" * 첨부파일 미 변경시 기존 첨부파일로 저장됩니다."
                >
                    <b-form>
                        <b-form-file
                            id="file-default"
                            :state="Boolean(form.file)"
                            v-model="modForm.file"
                            placeholder="파일을 선택해 주세요"
                            ref="file-input"
                            class="modeInput mb-2"
                            plain
                            v-if="noticeSeq"
                        />
                        
                        <b-link
                            v-if="noticeSeq"
                            class="ml-2 modLink"
                            target="_blank"
                            :href="`http://localhost:5005${items[0].FILE_PATH}`"
                            >
                                <span> 수정 전 파일:  {{ items[0].FILE_NAME !==  modForm.file.name ? items[0].FILE_NAME : modForm.file.name}} </span>
                        </b-link>
                    </b-form>
                </b-form-group>
            </b-form-group>
    
            <label class="mt-3 mb-1 textLabel">공지사항 내용</label>
            <!-- content 등록 -->
             <vue-editor 
                v-model="form.content" 
                :items="items"
                placeholder="내용을 입력해주세요."
                v-if="!noticeSeq"
             />
             <!-- content 수정 -->
             <vue-editor 
                v-model="modForm.content" 
                :items="items"
                placeholder="내용을 입력해주세요."
                v-if="noticeSeq"
             />
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
                        @click.prevent="noticeSeq !== undefined ? setMode() : onSubmit()"
                         >{{noticeSeq !== undefined ? '수정하기' : '등록하기'}}</b-button>
                    </b-col>
                    <b-col>
                        <!-- seq값이 있을시에는 view 페이지로 이동, 없을시에는 List페이지로 이동 -->
                        <b-button 
                        :to="noticeSeq !== undefined ? `/admin/notice/${noticeSeq}` : '/admin/notice/'" 
                        class="ml-n1" 
                        size="sm" 
                        variant="danger"
                        >
                        취소하기
                        </b-button>
                    </b-col>
                </b-row>
            </div>
            </b-form>
            <!-- Form Card E-->
        </b-card>
        </b-container>
    </div>
</template>
<script>
//NoticeApi 통신 import
import * as noticeApi from '@/api/notice';
import { VueEditor } from 'vue2-editor'
import router from '../../router'
export default {
    name: 'NoticeForm',
    components: { VueEditor },
    data() {
        return {
            // seq번호
            noticeSeq: 0,
            // 등록하기 v-model 값
            form: {
                notice: '',
                content: '',
                file: [],
                FILE_PATH: [],
                FILE_NAME: [],
            },
            // 수정하기 v-model 값
            modForm: {
                notice: '',
                content: '',
                file: [],
                FILE_PATH: [],
                FILE_NAME: [],
            },
            show:true,
            bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: '공지사항',
                    href: '/admin/notice'
                },
                {
                    text: '공지사항 입력',
                    active: true
                },
            ],
            items: [],
            fields: [],
            loading: false,
        }
    },
    mounted() {
        
    },
    created() {
        console.log(this.$route.params);
        console.log(this.$route.params.SEQ);
        // SEQ값 받아오기
        this.noticeSeq = this.$route.params.SEQ;
        // seq값이 있을시, 수정할 내용 뿌리기
        if(this.noticeSeq) {
            this.loading = true;
            noticeApi.NoticeListDetail(this.noticeSeq).then((res) => {
                this.items = res.data.result
                this.loading = false;
                console.log(res.data.result)
                console.log(res.data.result[0].FILE_PATH)
                console.log(JSON.stringify(this.items))
                this.modForm.notice = this.items[0].TITLE;
                this.modForm.content = this.items[0].CONTENTS;
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
            let noticeModeData = {
                "NOTICE_TITLE": this.modForm.notice,
                "NOTICE_CONTENTS": this.modForm.content,
                "NOTICE_FILE_NAME": this.modForm.file,
                "fileName": this.modForm.file.name,
                "NOTICE_FILE_PATH": "/upload/notice/"
            }
            //  제목 및 내용이 없을시 alert창 띄움
            if(this.modForm.notice == '') {
                this.$fire({
                title: "공지사항",
                text: "수정 할 보도자료 제목을 입력해주세요",
                type: "warning",
                timer: 4000
                }).then(r => {
                    console.log(r.value)
                })
                event.preventDefault();
            } else if (this.modForm.content == '') { 
                this.$fire({
                title: "공지사항",
                text: "수정 할 보도자료 내용을 입력해주세요",
                type: "warning",
                timer: 4000
                }).then(r => {
                    console.log(r.value)
                })
                event.preventDefault();
            } 
            // seq, 수정하기 값을 인자로 받아서 수정함.
            noticeApi.updateNoticeForm(this.noticeSeq, noticeModeData).then((res) => {
               noticeModeData = res.data;
               this.$fire({
                title: "공지사항",
                text: "수정 되었습니다.",
                type: "success",
                timer: 4000
                }).then(r => {
                    router.push(`/admin/notice/${this.noticeSeq}`)
                    console.log(r.value)
                })
            })
            .catch(function(e) {
                this.$fire({
                title: "공지사항",
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
            const NoticeData = {
                "NOTICE_TITLE": this.form.notice,
                "NOTICE_FILE_NAME": this.form.file,
                'NOTICE_CONTENTS': this.form.content,
                'fileName': this.form.file.name,
                "NOTICE_FILE_PATH": "/upload/notice/",
            }
            
            console.log(NoticeData)
                //  제목 및 내용이 없을시 alert창 띄움
                if(this.form.notice == '') {
                    this.$fire({
                    title: "공지사항",
                    text: "제목을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } else if(this.form.content == '') {
                    this.$fire({
                    title: "공지사항",
                    text: "내용을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } 

                const formdata = new FormData();
                formdata.append('file', this.form.file)
                formdata.append('fileName', this.form.file.name)
                //  Api 호출 및 업로드 alert
                noticeApi.addNoticeForm(NoticeData).then((res) => {
                    console.log(res.data);
                    this.form = res.data;
                    this.form.file = res.NOTICE_FILE_NAME;
                    this.$fire({
                    title: "공지사항",
                    text: "업로드 되었습니다.",
                    type: "success",
                    timer: 4000
                    }).then(r => {
                        router.push('/admin/notice')
                        console.log(r.value)
                    })
                })
                .catch((e) => {
                this.$fire({
                title: "공지사항",
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