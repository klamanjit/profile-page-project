import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import SideHeader from "./components/layout/SideHeader.vue";
import BaseButton from "./components/ui/BaseButton.vue";

const app = createApp(App);

app.use(router);

app.component("side-header", SideHeader);
app.component("base-button", BaseButton);
app.mount("#app");
