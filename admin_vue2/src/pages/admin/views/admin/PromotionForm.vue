<template>
    <div>
        <b-container>
        <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
        <!-- 카드 wrapper -->
        <b-card title="프로모션 등록 / 수정하기" bg-variant="light">
            <!-- 프로모션 -->
            <b-form
                @submit="onSubmit"
                @reset="onReset"
                v-if="show"
            >
            <!-- 프로모션 제목 -->
            <b-row class="font-weight-bold">
            <b-form-group
                id="fieldset-horizontal"
                label="프로모션 제목"
                label-for="input-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
            >
            <b-form-input 
                id="input-horizontal"
                v-model="form.notice"
                placeholder="프로모션 제목을 입력해주세요."
                required
                autofocus
            />
            
            </b-form-group>
            </b-row>
            
             <div class="mt-4">
                <label class="mb-2" for="datepicker-sm">프로모션 기간</label>
                <b-row>
                <b-col>
                <b-form-datepicker id="datepicker-sm" size="sm" class="mb-2" />
                </b-col>

                <b-col>
                <b-form-datepicker id="datepicker-sm" size="sm" />
                </b-col>

                </b-row>
            </div>
            
            <label class="mt-2 mb-2">프로모션 내용</label>
            <b-form-textarea
                id="textarea-rows"
                v-model="form.text"
                placeholder="프로모션 내용을 입력하세요."
                rows="8"
                required
            /> 
            <!-- 첨부파일 -->
            <b-form-group
                label="배경이미지 첨부"
                label-for="file-default"
                label-cols-sm="2"
                class="mt-2"
            >
            <b-form-file
                id="file-default"
                :state="Boolean(form.file)"
                v-model="form.file"
                placeholder="파일을 선택해 주세요"
                ref="file-input"
                class="mb-2"
                plain
            />
            </b-form-group>
            <b-button @click="onArray">경품추가하기</b-button>
            <b-form v-if="isShow">
                <b-form-group
                    id="fieldset-horizontal"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    content-cols-sm
                    content-cols-lg="7"
                    label="경품 등수"
                    label-for="input-horizontal"
                >
                    <b-form-input 
                        id="input-horizontal"
                        size="sm"
                        v-model="promo.rank"
                    />
                </b-form-group>
                <b-form-group
                    id="fieldset-horizontal"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    content-cols-sm
                    content-cols-lg="7"
                    label="경품 명"
                    label-for="input-horizontal"
                >
                    <b-form-input 
                        id="input-horizontal"
                        size="sm"
                        v-model="promo.name"
                    />
                </b-form-group>
                <b-form-group 
                    id="input-group-4" 
                    v-slot="{ ariaDescribedby }"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    content-cols-sm
                    content-cols-lg="7"
                    label="경품 수량"
                    label-for="input-horizontal"
                >
                    <b-form-input 
                        id="input-horizontal"
                        size="sm"
                        v-model="promo.qt"
                    />
                    <b-form-checkbox-group
                    v-model="form.checked"
                    id="checkboxes-4"
                    :aria-describedby="ariaDescribedby"
                    >
                    <b-form-checkbox value="default">기본 경품시 체크</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
                <b-form-group
                label="경품이미지 첨부"
                label-for="file-default"
                label-cols-sm="2"
                class="mt-2"
                >
                <b-form-file
                    id="file-default"
                    :state="Boolean(form.file)"
                    v-model="form.file"
                    placeholder="파일을 선택해 주세요"
                    ref="file-input"
                    class="mb-2"
                    plain
                />
                </b-form-group>
                <b-form-group
                    id="fieldset-horizontal"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    content-cols-sm
                    content-cols-lg="7"
                    label="일일 수량 한도"
                    label-for="input-horizontal"
                >
                    <b-form-input 
                        id="input-horizontal"
                        size="sm"
                        v-model="promo.day"
                    />
                </b-form-group>
            </b-form>
            <b-row>
            <div class="mt-3 d-flex justify-content-center">
                <b-row>
                    <b-col>
                        <b-button class="mr-n1" size="sm" type="submit" variant="primary">등록하기</b-button>
                    </b-col>
                    <b-col>
                        <b-button to="/admin/promotion" class="ml-n1" size="sm" type="reset" variant="danger">취소하기</b-button>
                    </b-col>
                </b-row>
            </div>
            </b-row>
            <b-card class="mt-3" header="결과값">
                <pre class="m-0">{{form}}</pre>
            </b-card>
            
            </b-form>
            
        </b-card>
        
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'PromotionForm',
    data() {
        return {
            form: {
                notice: '',
                file: null,
                text: '',
                checked: [],
            },
            promo: {
                rank: '',
                name: '',
                qt: '',
                img: null,
                day: '',
            },
            show:true,
            isShow:false,
            bread: [
                {
                    text: '관리자페이지',
                    href: '/'
                },
                {
                    text: '프로모션',
                    href: '/admin/promotion'
                },
                {
                    text: '프로모션 입력',
                    active: true
                },
            ],
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
            console.log(JSON.stringify(this.form));
        },
        onReset() {
            this.form.notice = '';
            this.form.file = '';
            this.form.text = '';
            this.show = false;
            this.$nextTick(() => {
                this.show = true
            })
        },
        clearFiles() {
            this.$refs['file-input'].reset()
        },
        onArray() {
            this.isShow = !this.isShow;
        }
    },
}
</script>
<style>
    
</style>