<template>
    <b-container fluid="xl">
            <div>
            <b-card class="loginCard mt-4">
                <div class="card-wrapper">
                <h1 class="pb-3" style="text-align: center;">Login</h1>
                <b-form-input 
                    placeholder="관리자 아이디"
                    autofocus
                    class="mt-2"
                    v-model="context.userId"
                    type="text"
                />
                <b-form-input
                class="mt-4" 
                    placeholder="관리자 비밀번호"
                    v-model="context.password"
                    type="password"
                />
                <div class="loginBtn d-flex justify-content-center">
                    <b-button 
                    class="mt-5"
                    type="submit"
                    style="max-width: 17rem;"
                    >
                    로그인 하기
                    </b-button>
                </div>
                </div>
            </b-card>
            </div>
        </b-container>
</template>
<script>
export default {
    name: 'LoginEx',
    components: {

    },
    data() {
        return {
            context: {
                userId: '',
                password: '',
            }
        }
    },
    computed: {

    },
    created() {
        
    },
    methods: {
        
    },
}
</script>
<style scoped>
    .loginCard {
        
    }
</style>