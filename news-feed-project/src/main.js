// 애플리케이션의 진입점으로 최상위 컨테이너 뷰인 App.vue 파일을 로드

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
