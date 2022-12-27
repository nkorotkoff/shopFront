import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createPinia } from "pinia";

import App from "./App.vue";
import "./assets/main.css";
import router from "./components/router/router";

const vuetify = createVuetify({
  components,
  directives,
});
const pinia = createPinia();

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(pinia);

app.mount("#app");
