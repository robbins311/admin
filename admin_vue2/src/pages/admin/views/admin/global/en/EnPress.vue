<template>
    <div>
        <b-container fluid="xl">
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <b-card title="Press">
                <div class="overflow-hidden mt-4">
                    <b-table 
                    id="my-table"
                    :src="items.thumb"
                    :items="items" 
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                     />
                     <b-row align-h="center">
                        <b-col cols="3">
                            <b-pagination
                            v-model="currentPage"
                            :total-rows="rows"
                            :per-page="perPage"
                            aria-controls="my-table"
                            />
                        </b-col>
                    </b-row>
                </div>
                <div class="d-flex justify-content-end">
                    <b-button to="/admin/global/en/enpressform" size="sm" variant="primary">Registration Press</b-button>
                </div>
            </b-card>
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'EnPress',
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            fields: ['no','THUMBNAIL', 'TITLE', 'URL' ,'REGISTRATIONDATE'],
            // 이미지 삽입 해야함
            items: [
            { no: 1, THUMBNAIL: '', TITLE: '', URL: '', REGISTRATIONDATE: '' },
            ],
            bread: [
                {
                    text: 'Admin',
                    href: '/'
                },
                {
                    text: 'Press',
                    href: '/admin/global/en/enpress'
                },
                {
                    text: 'Press List',
                    active: true
                },
            ],
        }
    },
    computed: {
        rows() {
            return this.items.length
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