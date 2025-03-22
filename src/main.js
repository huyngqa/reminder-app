import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);
app.use(router); // Sử dụng Vue Router
app.mount('#app');