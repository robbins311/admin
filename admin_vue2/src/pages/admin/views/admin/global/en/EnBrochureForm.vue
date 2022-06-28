<template>
    <div>
        <b-container>
        <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
        <!-- 카드 wrapper -->
        <b-card title="Brochure" bg-variant="light">
            <!-- 브로슈어 -->
            <b-form
                @submit="onSubmit"
                @reset="onReset"
                v-if="show"
            >
            <!-- 브로슈어 제목 -->
            <b-row class="font-weight-bold">
            <b-form-group
                id="fieldset-horizontal"
                label="Brochure Title"
                label-for="input-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
            >
            <b-form-input 
                id="input-horizontal"
                v-model="form.notice"
                placeholder="Please Enter Brochure Title."
                required
                autofocus
            />
            
            </b-form-group>
            </b-row>
            <!-- 첨부파일 -->
            <b-form-group
                label="Brochure File"
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
            <label class="mt-2 mb-2">Brochure Contents</label>
            <b-form-textarea
                id="textarea-rows"
                v-model="form.text"
                placeholder="Please Enter Brochure Contents."
                rows="8"
                required
            />
            <b-row>
            <div class="mt-3 d-flex justify-content-center">
                <b-row>
                    <b-col>
                        <b-button class="mr-n1" size="sm" type="submit" variant="primary">Registration</b-button>
                    </b-col>
                    <b-col>
                        <b-button to="/admin/global/en/enbrochure" class="ml-n1" size="sm" type="reset" variant="danger">Cancle</b-button>
                    </b-col>
                </b-row>
            </div>
            </b-row>
            
            </b-form>
            
        </b-card>
        
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'EnBrochureForm',
    data() {
        return {
            form: {
                notice: '',
                file: null,
                text: '',
            },
            show:true,
            bread: [
                {
                    text: 'Admin',
                    href: '/'
                },
                {
                    text: 'Brochure',
                    href: '/admin/global/en/enbrochure'
                },
                {
                    text: 'Brochure Registration',
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
        }
    },
}
</script>
<style>
    .card-title {
    margin-top: 15px;
    font-size: 2rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
    }
</style>