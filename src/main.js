import Vue from "vue";
import App from "./App.vue"; // component template imported

new Vue({
  el: "#app",
  render: h => h(App) // renders the component to the div id app
});
