// 애플리케이션의 진입점으로 최상위 컨테이너 뷰인 App.vue 파일을 로드

import Vue from 'vue'
import App from './App.vue' // App.vue 파일이 main.js 파일에 import됨

Vue.config.productionTip = false

new Vue({ // Vue 인스턴스 생성
  render: h => h(App), // App 컴포넌트를 루트 컴포넌트로 설정
}).$mount('#app') // index.html의 id="app" 인 div 태그에 Vue 인스턴스를 mount
