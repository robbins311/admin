import axios from 'axios';
import store from '../pages/admin/store'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const instance = axios.create({
      // 요청을 보낼 Api Server Ip
      baseURL: "http://localhost:5005"
});
// axios 모든 요청 헤더에 accesstoken 
instance.interceptors.request.use(
      config => {
            const isAuthenticated = store.getters['accessToken']
            if(isAuthenticated) {
                  config.headers.common['authorization'] = store.getters['accessToken']
            }
            return config
      },
      error => {
            Promise.reject(error)
      }
)
export default instance;