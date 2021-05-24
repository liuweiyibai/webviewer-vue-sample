import { createApp } from 'vue';
import App from './App.vue';
import { Select } from 'ant-design-vue';
createApp(App)
  .use(Select)
  .use(Select.Option)
  .mount('#app');
