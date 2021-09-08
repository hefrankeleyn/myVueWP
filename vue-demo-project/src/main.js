// 引入vue
import Vue from 'vue'
import App from './App.vue'

new Vue({
    // 渲染函数， 这个函数还是比较重要的
    // render: h=>h(App),
    render: createElement => createElement('h1',{}, 'hello'),
}).$mount('#app');


// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')