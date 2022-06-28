<template>
    <div>
        <b-container fluid="xl">
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <b-card title="Update">
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
                <div class="d-flex justify-content-end mt-3">
                    <b-button to="/admin/global/en/enupdateform" size="sm" variant="primary">Registration Update</b-button>
                </div>
            </b-card>
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'EnUpdate',
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            fields: ['no', 'Title', 'ATTACH FILE' ,'REGISTRATION DATA'],
            items: [
            { no: 1, TITLE: '', ATTACHFILE: 'null' , REGISTRATIONDATA: '' },
            ],
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
                    text: 'Update List',
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