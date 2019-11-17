import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://meyb-boutique.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})

export default ({
});
