<template>
    <div>
        <b-container>
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
        <!-- 카드 wrapper -->
        <b-card title="채용공고 등록" bg-variant="light">
            <!-- Form main card S -->
            <!-- 받은 인자값중에 seq번호가 없으면 일반 등록, 아니면 수정하기 함수 호출 -->
            <b-form
                @submit.prevent="recruitSeq !== undefined ? setMode() : onSubmit()"
                v-if="!loading"
            >
            <!-- 채용공고 제목 -->
            <b-row class="font-weight-bold">
            <b-form-group
                id="fieldset-horizontal"
                label="채용공고 제목"
                label-for="input-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
            >
            <!-- 등록 input -->
            <b-form-input 
                id="input-horizontal"
                v-model="form.title"
                placeholder="채용공고 제목을 입력해주세요."
                required
                autofocus
                v-if="!recruitSeq"
            />
            <!-- 수정 input -->
            <b-form-input 
                id="input-horizontal"
                v-model="modForm.title"
                required
                autofocus
                v-if="recruitSeq"
            />
            </b-form-group>
            <!-- 채용공고 지역 -->
            <b-form-group
                label="채용공고 지역"
                class="mt-3"
            >
                <!-- 등록 input -->
                <b-form-select
                    v-model="form.location"
                    :options="loOptions"
                    required
                    v-if="!recruitSeq"
                />
                <!-- 수정 input -->
                <b-form-select
                    v-model="modForm.location"
                    :options="loOptions"
                    required
                    v-if="recruitSeq"
                />
            </b-form-group>
            <!-- 채용공고 유형 -->
            <b-form-group
                label="채용공고 유형"
                class="mt-3"
            >
                <!-- 등록 input -->
                <b-form-select
                    v-model="form.type"
                    :options="caOptions"
                    required
                    v-if="!recruitSeq"
                />
                <!-- 수정 input -->
                <b-form-select
                    v-model="modForm.type"
                    :options="caOptions"
                    required
                    v-if="recruitSeq"
                />
            </b-form-group>
            <!-- 채용공고 기간 -->
            <b-form-group
                label="채용공고 기간"
                id="datePick"
            >
                <!-- 등록 스타트 input -->
                <div class="d-flex dateBox" v-if="!recruitSeq">
                <label class="datelabel" for="startDate">시작일</label>
                <b-form-datepicker
                    id="startDate"
                    v-model="form.dateStart"
                    required
                    v-if="!recruitSeq"
                />
                </div>
                <!-- 등록 엔드 input -->
                <div class="d-flex dateBox" v-if="!recruitSeq">
                <label class="datelabel" for="startDate">마감일</label>
                <b-form-datepicker
                    id="endDate"
                    v-model="form.dateEnd"
                    required
                    v-if="!recruitSeq"
                />
                </div>
                <!-- 수정 스타트 input -->
                <div class="d-flex dateBox" v-if="recruitSeq">
                <label class="datelabel" for="startDate">시작일</label>
                <b-form-datepicker
                    id="startDate"
                    v-model="modForm.dateStart"
                    required
                    v-if="recruitSeq"
                />
                </div>
                <!-- 수정 엔드 input -->
                <div class="d-flex dateBox" v-if="recruitSeq">
                <label class="datelabel" for="startDate">마감일</label>
                <b-form-datepicker
                    id="endDate"
                    v-model="modForm.dateEnd"
                    required
                    v-if="recruitSeq"
                />
                </div>
            </b-form-group>
            </b-row>
            <!-- 첨부파일 -->
            <b-form-group
                label="채용공고 파일"
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
                v-if="!recruitSeq"
            />
            <!-- 수정 input -->
                <b-form-group
                    v-if="recruitSeq"
                    description=" * 첨부파일 미 변경시 기존 첨부파일로 저장됩니다."
                >
                    <b-form>
                        <b-form-file
                            id="file-default"
                            :state="Boolean(form.file)"
                            v-model="modForm.file"
                            ref="file-input"
                            class="mb-2"
                            plain
                            v-if="recruitSeq"
                        />
                        <b-link
                            v-if="recruitSeq"
                            class="ml-2 modLink"
                            target="_blank"
                            :href="`http://localhost:5005${this.items[0].file}`"
                            >
                                <span> 수정 전 파일:  {{ this.items[0].fileName !==  modForm.file.name ? this.items[0].fileName : modForm.file.name}} </span>
                        </b-link>
                    </b-form>
                </b-form-group>
            </b-form-group>
            <!-- 수정 input E -->
            <label class="mt-4 mb-2 textLabel">채용공고 내용</label>
            <!-- content 등록 -->
             <vue-editor 
                v-model="form.content" 
                :items="items"
                placeholder="내용을 입력해주세요."
                v-if="!recruitSeq"
             />
             <!-- content 수정 -->
             <vue-editor 
                v-model="modForm.content" 
                :items="items"
                placeholder="내용을 입력해주세요."
                v-if="recruitSeq"
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
                        @click.prevent="recruitSeq !== undefined ? setMode() : onSubmit()"
                        >
                        {{recruitSeq !== undefined ? '수정하기' : '등록하기'}}
                        </b-button>
                    </b-col>
                    <b-col>
                        <!-- seq값이 있을시에는 view 페이지로 이동, 없을시에는 List페이지로 이동 -->
                        <b-button 
                        :to="recruitSeq !== undefined ? `/admin/recruit/recruitview/${recruitSeq}` : '/admin/recruit/recruitlist'" 
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
import * as recruitApi from '@/api/recruit';
import { VueEditor } from 'vue2-editor'
import router from '../../../router';
export default {
    name: 'RecruitForm',
    components: { VueEditor },
    data() {
        return {
            // seq번호
            recruitSeq: 0,
            // 등록하기 v-model 값
            form: {
                title: '',
                location: null,
                type: null,
                dateStart: '',
                dateEnd: '',
                file: [],
                content: '',
            },
            // 수정하기 v-model 값
            modForm: {
                title: '',
                location: null,
                type: null,
                dateStart: '',
                dateEnd: '',
                file: [],
                content: '',
            },
            show:true,
            loOptions: [
                {value: '본사', text: '본사'},
                {value: '지사', text: '지사'},
            ],
            caOptions: [
                {value: '기간지정', text: '기간지정'},
                {value: '상시채용', text: '상시채용'},
            ],
            bread: [
            {
                text: '관리자페이지',
                href: '/'
            },
            {
                text: '채용공고',
                href: '/admin/recruit/applylist'
            },
            {
                text: '채용공고 등록',
                active: true
            },
            ],
            loading: false,
        }
    },
    created() {
        this.recruitSeq = this.$route.params.SEQ;
        if(this.recruitSeq) {
            this.loading = true;
            recruitApi.getRecruitDetail(this.recruitSeq).then((res) => {
                this.items = res.data.result
                this.loading = false;
                this.modForm.title = this.items[0].title;
                this.modForm.content = this.items[0].contents;
                this.modForm.location = this.items[0].location;
                this.modForm.type = this.items[0].type;
                this.modForm.file = this.items[0].file;
            })
        }
    },
    methods: {
        // 채용공고 수정
        setMode(event) {
            // Formdata 
            const formData = new FormData();
            formData.append('file', this.modForm.file)
            // 수정하기 값
            const modRecruitData = {
                'title': this.modForm.title,
                'location': this.modForm.location,
                'type': this.modForm.type,
                'start': this.modForm.dateStart,
                'end': this.modForm.dateEnd,
                'file': this.modForm.file,
                'fileName': this.modForm.file.name,
                'contents': this.modForm.content,
            }
            if(this.modForm.title == '') {
                    this.$fire({
                    title: "채용공고",
                    text: "제목을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } else if(this.modForm.location == '') {
                    this.$fire({
                    title: "채용공고",
                    text: "지역을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } else if(this.modForm.type == '') {
                    this.$fire({
                    title: "채용공고",
                    text: "유형을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } 
                else if(this.modForm.file == '') {
                    this.$fire({
                    title: "채용공고",
                    text: "파일을 넣어주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } 
                else if(this.modForm.content == '') {
                    this.$fire({
                    title: "채용공고",
                    text: "내용을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } 
            recruitApi.updateRecruitForm(this.recruitSeq, modRecruitData).then((res) => {
                console.log(res.data)
                this.form = res.data
                this.$fire({
                title: "채용공고",
                text: "수정 되었습니다.",
                type: "success",
                timer: 4000
                }).then(r => {
                    router.push(`/admin/recruit/recruitform/${this.brochureSeq}`)
                    console.log(r.value)
                })
            })
            .catch(function(e) {
                this.$fire({
                title: "채용공고",
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
        // 채용공고 등록
        onSubmit(event) {
            //제목 & 내용 insert
            const recruitData = {
                'title': this.form.title,
                'location': this.form.location,
                'type': this.form.type,
                'start': this.form.dateStart,
                'end': this.form.dateEnd,
                'file': this.form.file,
                'fileName': this.form.file.name,
                'contents': this.form.content,
            }
            //  내용이 없을시 alert창 띄움
                if(this.form.title == '') {
                    this.$fire({
                    title: "채용공고",
                    text: "제목을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } else if(this.form.location == '') {
                    this.$fire({
                    title: "채용공고",
                    text: "지역을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } else if(this.form.type == '') {
                    this.$fire({
                    title: "채용공고",
                    text: "유형을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } 
                else if(this.form.file == '') {
                    this.$fire({
                    title: "채용공고",
                    text: "파일을 넣어주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } 
                else if(this.form.content == '') {
                    this.$fire({
                    title: "채용공고",
                    text: "내용을 입력해주세요",
                    type: "warning",
                    timer: 4000
                    }).then(r => {
                        console.log(r.value)
                    })
                    event.preventDefault();
                } 
            //  Api 호출 및 업로드 alert
            recruitApi.addRecruitForm(recruitData).then((res) => {
                console.log(res.data)
                this.form = res.data
                this.$fire({
                    title: "채용공고",
                    text: "업로드 되었습니다.",
                    type: "success",
                    timer: 4000
                    }).then(r => {
                        router.push('/admin/recruit/recruitlist')
                        console.log(r.value)
                    })
            })
            .catch((e) => {
                this.$fire({
                    title: "채용공고",
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
    .custom-select {
        width: 7.5rem;
        height: 1.5rem;
        text-align: center;
        border-radius: 4px;
    }
    #datePick {
        margin-top: 12px;
        width: 15rem;
    }
    label, legend {
        font-weight: bold;
    }
    .dateBox {
        width: 20vw;
        margin-top: 7px;
    }
    .datelabel {
        width: 5vw;
        margin-top: 7px;
        font-weight: normal;
    }
    
</style>