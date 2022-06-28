<template>
    <div>
        <b-container fluid="xl">
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <b-card title="Manual">
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
                    <b-button to="/admin/global/en/enmanualform" size="sm" variant="primary">Registration Manual</b-button>
                </div>
            </b-card>
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'EnManual',
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            fields: ['no', 'Title', 'AttachFIle' ,'Registration Date'],
            items: [
            { no: 1, Title: '', AttachFile: 'null' , RegistrationDate: '' },
            ],
            bread: [
                {
                    text: 'Admin',
                    href: '/'
                },
                {
                    text: 'Manual',
                    href: '/admin/global/en/enmanual'
                },
                {
                    text: 'Manual List',
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