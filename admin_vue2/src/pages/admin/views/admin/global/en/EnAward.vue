<template>
    <div>
        <b-container class="bv-example-row mb-3" fluid>
            <b-breadcrumb id="breadc" class="pt-3 d-flex justify-content-end" :items="bread" />
            <b-card title="Award">
        <!-- For문 돌려야됨 -->
            <b-row cols="3" class="text-center">
                <b-col cols="4">
                    <b-card>
                        <b-img fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
                        <b-card-text class="mt-3">
                            2021년도 국가생산성대상 4차 산업혁명 선도기업 부문
                        </b-card-text>
                        <template #footer>
                            <small class="text-muted">2022-01-13 13:19:07</small>
                        </template>
                    </b-card>
                </b-col>

                <b-col cols="4">
                    <b-card>
                        <b-img fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
                        <b-card-text class="mt-3">
                            2021년도 국가생산성대상 4차 산업혁명 선도기업 부문
                        </b-card-text>
                        <template #footer>
                            <small class="text-muted">2022-01-13 13:19:07</small>
                        </template>
                    </b-card>
                </b-col>

                <b-col cols="4">
                    <b-card>
                        <b-img fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
                        <b-card-text class="mt-3">
                            2021년도 국가생산성대상 4차 산업혁명 선도기업 부문
                        </b-card-text>
                        <template #footer>
                            <small class="text-muted">2022-01-13 13:19:07</small>
                        </template>
                    </b-card>
                </b-col>
            </b-row>
            <div class="d-flex justify-content-end mt-3">
                <b-button to="/admin/global/en/enawardform" size="sm" variant="primary">Registration Award</b-button>
            </div>
            </b-card>
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'EnAward',
    data() {
        return {
            bread: [
                {
                    text: 'Admin',
                    href: '/'
                },
                {
                    text: 'Award',
                    href: '/admin/global/en/enaward'
                },
                {
                    text: 'Award List',
                    active: true
                },
            ],
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