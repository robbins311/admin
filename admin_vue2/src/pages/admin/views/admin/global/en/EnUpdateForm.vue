<template>
    <div>
        <b-container>
        <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
        <!-- 카드 wrapper -->
        <b-card title="Update" bg-variant="light">
            <!-- 업데이트 -->
            <b-form
                @submit="onSubmit"
                @reset="onReset"
                v-if="show"
            >
            <!-- 업데이트 제목 -->
            <b-row class="font-weight-bold">
            <b-form-group
                id="fieldset-horizontal"
                label="Update Title"
                label-for="input-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
            >
            <b-form-input 
                id="input-horizontal"
                v-model="form.notice"
                placeholder="Please Enter Update Title."
                required
                autofocus
            />
            
            </b-form-group>
            </b-row>
            <!-- 첨부파일 -->
            <b-form-group
                label="Update File"
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
            <label class="mt-4 mb-2">Update Contents</label>
            <b-form-textarea
                id="textarea-rows"
                v-model="form.text"
                placeholder="Please Enter Update Contents."
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
                        <b-button to="/admin/global/en/enupdateform" class="ml-n1" size="sm" type="reset" variant="danger">Cancle</b-button>
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
    name: 'EnUpdateForm',
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
                    text: 'Update',
                    href: '/admin/global/en/enupdate'
                },
                {
                    text: 'Update Registration',
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
    .col-form-label {
        margin-top: 5px;
        font-weight: bold;
    }
</style>