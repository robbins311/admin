<template>
    <div>
        <!-- login Wrapper -->
        <b-container fluid="xl">
            <div class="Login">
            <!-- login Box S -->
            <b-card 
                class="loginCard"
                style="max-width: 28rem; max-height: 70rem">
                <!-- with Logo -->
                <b-img class="loginLogo mb-2" :src="require('@/assets/img/logo.png')" fluid />
                <div class="card-wrapper">
                    <!-- ID input -->
                    <b-form-input 
                        placeholder="ADMIN ID"
                        autofocus
                        class="idInput mt-2"
                        v-model="context.userId"
                        @keyup.enter="onLoginClicked"
                        type="text"
                    />
                    <!-- password input -->
                    <b-form-input
                        class="passwordInput mt-2" 
                        placeholder="PW"
                        v-model="context.password"
                        @keyup.enter="onLoginClicked"
                        type="password"
                    />
                <!-- Login Button -->
                <div class="loginBtnBox d-flex justify-content-center">
                    <b-button 
                    class="loginBtn mt-4"
                    type="submit"
                    style="max-width: 17rem; letter-spacing: 1.6px"
                    @click="onLoginClicked()"
                    >
                    LOGIN
                    </b-button>
                </div>
                </div>
            </b-card>
            <!-- login Box E -->
            </div>
        </b-container>
            
    </div>
</template>
<script>
import store from '../../store'
import * as loginApi from '@/api/login';
import router from '../../router';
// import http from './http';
// import axios from 'axios'
export default {
    name: 'LoginApp',
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
    beforeMount() {
        
    },
    beforeUnmount() {
        
    },
    methods: {
        
        onLoginClicked() {
            console.log(this.context.userId, this.context.password)
            let params = {
                'id': this.context.userId,
                'password': this.context.password
            }
            if( !params.id || !params.password ) {
                alert('이메일이나 패스워드를 입력하세요.')
                return null
            }
            loginApi.checkLogin(params).then((res) => {
                params = res.data
                let token = res.data.access;
                localStorage.setItem('accessToken' , token)
                store.commit('setToken', token)
                router.push('/admin/notice')
                // 초기화 후 이동
            })
            .catch((e) => {
                // 초기화
                window.alert('아이디, 비밀번호를 다시 확인해주세요.')
                console.log(router)
                console.log(e)
            })
        }
    },
}
</script>
<style scoped>
/* Mobile */
 @media (max-width: 892px) { 
    .loginCard {
        top: 12rem !important; left: 12rem !important;
        width: 100%;
    }
  }
  /* PC Login S */
    .Login {
        position: relative;
        margin: 0 auto;
    }
    .loginCard {
        position: absolute; top: 12rem !important; left: 20rem;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        background-color: #272729;
        text-align: center;
    }
    .card-wrapper {
        margin-top: 40px;
    }
    .idInput, .passwordInput {
        width: 100%;
        font-size: 15px;
        height: 53px;
        color: #fff;
        background-color: #2f2f2f;
        border: 0;
    }
    .loginBtnBox {
        margin-top: 2rem;
        border-top: 1px solid rgb( 243 238 238 / 40%);
    }
    .loginBtn {
        background-color: #1351f9;
        width: 100%;
        height: 50px;
        vertical-align: middle;
        border-radius: 30px;
        transition: all 1.4s;
        border: none;
    }
    .loginBtn:hover {
        background-color: #0431ac;
    }
    /* PC Login E */
</style>