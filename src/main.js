import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure the router is correctly imported

const app = createApp(App); // Create the Vue app instance
app.use(router); // Use the router in the app
app.mount('#app'); // Mount the app to the DOM element with id="app"