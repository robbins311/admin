<template>
    <div>
        <b-container fluid="xl">
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <b-card title="Notice">

                <div class="overflow-hidden mt-4">
                    <b-table 
                    id="my-table"
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
                    <b-button to="/admin/global/en/ennoticeform" size="sm" variant="primary">Notice Registration</b-button>
                </div>
            </b-card>
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'EnNotice',
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            fields: ['no', 'TITLE', 'RESISTRATIONDATE'],
            items: [
            { no: 1, TITLE: '', RESISTRATIONDATE: '' },
            ],
            bread: [
                {
                    text: 'Admin',
                    href: '/'
                },
                {
                    text: 'Notice',
                    href: '/admin/global/en/ennotice'
                },
                {
                    text: 'Notice List',
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
    .buttonLayout {
        position: relative;
        left: 0;
    }
</style>